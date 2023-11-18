import { useTheme } from "../hooks/useTheme.jsx"
import { themeColors } from "../utils/themeColors.js"

export function Contact() {
  const { reverseTheme } = useTheme()
  return (
    <div className={themeColors("Text", { reverseTheme })}>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat
        ratione exercitationem. Odit provident ducimus nam ex nesciunt
        voluptatum, possimus quos id accusamus aliquam enim iusto officiis.
        Necessitatibus architecto, delectus quo mollitia commodi ab ut alias
        explicabo veritatis labore omnis, provident natus quibusdam molestiae
        sapiente ipsa magnam illo iste voluptates! Reiciendis cumque modi in
        labore unde aut corporis sit autem nemo ut, nobis distinctio nostrum
        ipsam placeat accusantium tempore, et iusto quae eum a quidem obcaecati?
        Adipisci assumenda architecto eveniet ratione nesciunt obcaecati animi.
        Praesentium similique soluta ut placeat, incidunt neque at odit
        repudiandae consequuntur deleniti quia, unde, ipsam et?
      </p>
    </div>
  )
}
