import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"

export function Contact() {
  const { reverseTheme } = useTheme()
  return (
    <div className={themeColors("Text", { reverseTheme })}>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti
        laboriosam eaque possimus rem quam aliquid dolorum ea ratione suscipit
        placeat labore quo, sapiente ipsam odit cum repellat! Iste enim,
        aspernatur, assumenda ut exercitationem voluptas impedit architecto
        dolorem facere incidunt suscipit, dignissimos a nobis possimus ipsum eos
        nisi. Quo explicabo rem quos dolor quibusdam obcaecati? Perspiciatis
        magnam qui vitae, harum velit eveniet voluptate, repellendus mollitia
        reprehenderit maxime fuga reiciendis officia illum ad ea dolorum quaerat
        molestiae ex recusandae eum, doloremque illo nostrum nihil. Ea et unde
        aut voluptatum tenetur a quos corporis doloribus. Repudiandae odit, at
        officiis quia consequuntur explicabo deleniti necessitatibus natus nisi
        quo corrupti assumenda dignissimos adipisci eos dicta ex. Voluptatum
        quia cum ab sapiente consectetur officiis unde. Rem excepturi doloribus
        adipisci in suscipit, quas optio culpa perferendis id ratione dolore
        reiciendis incidunt, enim tenetur fugiat aspernatur quos quod amet
        praesentium commodi iusto unde maiores, reprehenderit porro. Aperiam.
      </p>
    </div>
  )
}
