import { useHashNavigation } from "./hooks/useHashNavigation.js"
import { Home } from "./pages/Home.jsx"
import { Contact } from "./pages/Contact.jsx"
import { NotFound } from "./pages/NotFound.jsx"
import { Header } from "./components/Header.jsx"
import { ErrorBoundary } from "react-error-boundary"
import { Alert } from "./components/Alert.jsx"
import { Suspense, lazy, useState } from "react"
import { ThemeContext } from "./hooks/useTheme.jsx"


function App() {
  const { page, param } = useHashNavigation()
  const pageContent = getPageContent(page, param)
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <button onClick={toggleTheme}>Changer de thème</button>
      <Header page={page} />
      <ThemeContext.Provider value={theme}>
        <div className="container my-3">
          <ErrorBoundary FallbackComponent={PageError}>
            {pageContent}
          </ErrorBoundary>
        </div>
      </ThemeContext.Provider>
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
      <Suspense fallback={<div>Chargement des componsants en cours</div>}>
        <SingleLazy postId={param} />
      </Suspense>
    )
  }
  return <NotFound page={page} />
}

export default App
