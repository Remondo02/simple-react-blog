import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"
import { Card } from "../components/Card.jsx"
import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"

export function Home() {
  useDocumentTitle("Mon Blog")
  const { reverseTheme } = useTheme()
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  )

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }

  return (
    <>
      <h1 className={themeColors("Text", {reverseTheme})}>Mon Blog</h1>
      {data && (
        <div className="row gy-4">
          {data.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-lg-4">
              <Card
                image={`https://picsum.photos/id/${post.id}/280/180`}
                title={post.title}
                description={post.body}
                href={`#post:${post.id}`}
                buttonLabel="Voir l'article"
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
