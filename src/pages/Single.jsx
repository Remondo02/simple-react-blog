import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"
import { Button } from "../components/Button.jsx"
import { useToggle } from "../hooks/useToggle.js"
import { EditPostModal } from "./Single/EditPostModal.jsx"
import { useTheme } from "../hooks/useTheme.jsx"
import { Pagination } from "../components/Pagination.jsx"
import { themeColors } from "../utils/themeColors.js"

export default function Single({ postId }) {
  const { reverseTheme } = useTheme()
  const {
    data: post,
    loading,
    error,
    setData,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  useDocumentTitle(post?.title)
  const [isEditing, toggleEditing] = useToggle(false)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
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
      <img
        src={`https://picsum.photos/id/${post.id}/800/600`}
        alt=""
        className="img-fluid rounded mx-auto d-block mb-4"
      />
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
        <Pagination
          firstButtonLabel={"article précédent"}
          lastButtonLabel={"article suivant"}
          page={post}
        />
      </div>
    </>
  )
}
