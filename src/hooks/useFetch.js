import { useEffect, useRef, useState } from "react"
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
  const [error, setErro] = useState(null)
  const optionsRef = useRefSync(options)

  useEffect(() => {
    fetch(url, {
      ...optionsRef,
      headers: {
        Accept: "application/json; charset=UTF-8",
        ...optionsRef?.headers,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setLoading(false), setData(data)
      })
      .catch((e) => setErro(e))
      .finally(() => setLoading(false))
  }, [url])

  return {
    loading,
    data,
    error,
    setData
  }
}