import { useHashNavigation } from "./hooks/useHashNavigation.js"
import { Home } from "./pages/Home.jsx"
import { Contact } from "./pages/Contact.jsx"
import { NotFound } from "./pages/NotFound.jsx"
import { Header } from "./components/Header.jsx"
import { ErrorBoundary } from "react-error-boundary"
import { Alert } from "./components/Alert.jsx"
import { Suspense, lazy } from "react"
import { useTheme } from "./hooks/useTheme.jsx"
import { SkeletonSingle } from "./components/SkeletonSingle.jsx"

function App() {
  const { page, param } = useHashNavigation()
  const pageContent = getPageContent(page, param)
  const { theme } = useTheme()
  const baseStyle = { height: "100%", minHeight: "calc(100vh - 72px)" }
  const fullStyle =
    page === "post" ? { maxWidth: 800, ...baseStyle } : baseStyle

  return (
    <>
      <Header page={page} />
      <div className={`bg-${theme}`}>
        <div className="container py-4" style={fullStyle}>
          <ErrorBoundary FallbackComponent={PageError}>
            {pageContent}
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

function PageError({ error }) {
  return <Alert type="danger">{error.toString()}</Alert>
}

function getPageContent(page, param) {
  if (page === "home") {
    return <Home />
  }

  if (page === "contact") {
    return <Contact />
  }

  if (page === "post") {
    const SingleLazy = lazy(() => import("./pages/Single.jsx"))
    return (
      <Suspense fallback={<SkeletonSingle/>}>
        <SingleLazy postId={param} />
      </Suspense>
    )
  }
  return <NotFound page={page} />
}

export default App
