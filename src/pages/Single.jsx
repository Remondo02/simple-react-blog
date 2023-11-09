import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"

export function Single({ postId }) {
  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  useDocumentTitle(post?.title)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }

  return (
    <>
      <h1 className="mb-3">{post.title}</h1>
      <img
        src={`https://picsum.photos/id/${post.id}/800/600`}
        alt=""
        className="img-fluid rounded mx-auto d-block mb-3"
      />
      <p>{post.body}</p>
      <p>
        <a
          href={`#post:${post.id + 1}`}
          role="button"
          className="btn btn-primary"
        >
          Article suivant
        </a>
      </p>
    </>
  )
}
