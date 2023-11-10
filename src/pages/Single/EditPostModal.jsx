import { Button } from "../../components/Button.jsx"
import { Modal } from "../../components/Modal.jsx"
import { Input } from "../../components/Input.jsx"

export function EditPostModal({ post, onClose, onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Modal>
      <h1>Editer l'article</h1>
      <form action="" onSubmit={handleSubmit} className="vstack gap-3">
        <Input name="title" label="Titre" defaultValue={post.title} />
        <Input
          name="body"
          label="Contenu"
          type="textarea"
          defaultValue={post.body}
        />
        <Button type="submit">Sauvegarder</Button>
      </form>
    </Modal>
  )
}
