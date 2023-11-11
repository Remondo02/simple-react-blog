import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"
import { Button } from "../components/Button.jsx"
import { useToggle } from "../hooks/useToggle.js"
import { Modal } from "../components/Modal.jsx"
import { EditPostModal } from "./Single/EditPostModal.jsx"
import { useTheme } from "../hooks/useTheme.jsx"
import { Pagination } from "../components/Pagination.jsx"

export default function Single({ postId }) {
  const { theme, themeText } = useTheme()
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
      <h1 className={`mb-4 text-${themeText}`}>{post.title}</h1>
      <img
        src={`https://picsum.photos/id/${post.id}/800/600`}
        alt=""
        className="img-fluid rounded mx-auto d-block mb-4"
      />
      <p className={`text-${themeText} mb-4`}>{post.body}</p>
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
