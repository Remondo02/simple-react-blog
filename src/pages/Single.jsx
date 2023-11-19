import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Alert } from "../components/Alert.jsx"
import { Button } from "../components/Button.jsx"
import { useToggle } from "../hooks/useToggle.js"
import { EditPostModal } from "./Single/EditPostModal.jsx"
import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"
import { SkeletonSingle } from "../components/SkeletonSingle.jsx"

export default function Single({ postId }) {
  const { isLight, reverseTheme } = useTheme()
  const {
    data: post,
    loading: dataLoading,
    error: dataError,
    setData,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  useDocumentTitle(post?.title)

  const [isEditing, toggleEditing] = useToggle(false)

  const imgUrl = `https://picsum.photos/id/${postId}/800/600`
  const { data: url, loading: imgLoading, error: imgError } = useFetch(imgUrl)
  let errors = []

  errors.push(dataError, imgError)
  errors = errors.toString().split(",").join(" ")

  if (dataLoading || imgLoading) {
    return <SkeletonSingle />
  }

  if (dataError || imgError) {
    return <Alert type="danger">{errors}</Alert>
  }

  const handleSave = (data) => {
    setData({
      ...post,
      ...data,
    })
    toggleEditing()
  }

  return (
    <>
      <h1 className={themeColors("Text", { reverseTheme })}>{post.title}</h1>
      <img src={url} className="img-fluid rounded mx-auto d-block mb-4" />
      <p className={`text-${reverseTheme} mb-4`}>{post.body}</p>
      {isEditing && (
        <EditPostModal
          post={post}
          onClose={toggleEditing}
          onSave={handleSave}
        />
      )}
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={toggleEditing}>
          Editer l'article
        </Button>
        <Button
          variant={themeColors("Button", { isLight })}
          href={`#post:${post.id + 1}`}
        >
          Article suivant
        </Button>
      </div>
    </>
  )
}
