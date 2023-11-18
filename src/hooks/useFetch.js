import { useEffect, useState } from "react"
import { useRefSync } from "./useRefSync.js"

/**
 *
 * @param {string} url
 * @param {FetchEventInit} options
 * @returns
 */
export function useFetch(url, options = {}) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const optionsRef = useRefSync(options)

  useEffect(() => {
    let headersContentType
    let isImage
    const typeImage = "image/jpeg"
    fetch(url, {
      ...optionsRef,
      headers: {
        Accept: ["application/json; charset=UTF-8"],
        ...optionsRef?.headers,
      },
    })
      .then((r) => {
        headersContentType = r.headers.get("content-type")
        return headersContentType === "image/jpeg" ? r.blob() : r.json()
      })
      .then((data) => {
        isImage = headersContentType === "image/jpeg" ? true : false
        setLoading(false), setData(isImage ? URL.createObjectURL(data) : data)
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false))
  }, [url])

  return {
    loading,
    data,
    error,
    setData,
  }
}
