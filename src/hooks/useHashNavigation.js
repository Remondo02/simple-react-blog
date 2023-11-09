import { useEffect, useState } from "react"

export function useHashNavigation() {
  const [hash, setHash] = useState(location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(location.hash)
    }
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const cleanHash = hash.replaceAll("#", "").toLowerCase()

  return {
    page: cleanHash ? cleanHash.split(":")[0] : "home",
    param: cleanHash.split(":")[1],
  }
}
