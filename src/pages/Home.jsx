import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"
import { Card } from "../components/Card.jsx"
import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"
import { SkeletonCards } from "../components/SkeletonCardS.jsx"
import { useEffect, useState } from "react"

export function Home() {
  const nbItems = 10
  useDocumentTitle("Mon Blog")
  const { reverseTheme } = useTheme()
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${nbItems}`
  )
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }

  return (
    <>
      <h1 className={themeColors("Text", { reverseTheme })}>Mon Blog</h1>
      {data && (
        <div className="row gy-4">
          {data.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-lg-4">
              <Card
                dataLoading={isLoading}
                imageId={post.id}
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
