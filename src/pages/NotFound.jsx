/**
 * @param {page} string 
 * @returns {JSX.Element}
 */
export function NotFound({ page }) {
  return (
    <>
      <h1>Page introuvable</h1>
      <p>La page demandée "{page}" n'existe pas.</p>
    </>
  )
}
