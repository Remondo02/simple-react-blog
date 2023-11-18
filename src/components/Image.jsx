import { useFetch } from "../hooks/useFetch.js"
import { Alert } from "./Alert.jsx"
import { SkeletonCardImage } from "./SkeletonCardImage.jsx"

/**
 * @param {string} imageId
 * @param {string} className
 * @param {number | null} width
 * @param {number} height
 * @returns {JSX.Element}
 */
export function Image({ imageId, className = "", width, height = null }) {
  const newClassName = className ? className : "card-img-top"
  const isHeight = height ? `/${height}` : ""
  const imgUrl = `https://picsum.photos/id/${imageId}/${width}${isHeight}`
  const { data: url, loading, error } = useFetch(imgUrl)

  if (loading) {
    return <SkeletonCardImage />
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }

  return <img src={url} className={newClassName} alt="" />
}
