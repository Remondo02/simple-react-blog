export function Pagination({ firstButtonLabel, lastButtonLabel, page: post }) {
  let baseDisableObj = {
    classDisable: "",
    ariaDisabled: "false",
  }

  let { classDisable, ariaDisabled } = baseDisableObj

  post.id <= 1
    ? ((classDisable = "disabled"), (ariaDisabled = "true"))
    : baseDisableObj

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={`page-item ${classDisable}`}>
          <a
            className="page-link"
            href={`#post:${post.id - 1}`}
            aria-disabled={ariaDisabled}
          >
            {firstButtonLabel}
          </a>
        </li>
        {post.id > 1 && (
          <li className="page-item">
            <a className="page-link" href={`#post:${post.id - 1}`}>
              {post.id - 1}
            </a>
          </li>
        )}
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            {post.id}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`#post:${post.id + 1}`}>
            {post.id + 1}
          </a>
        </li>
        {post.id <= 1 && (
          <li className="page-item">
            <a className="page-link" href={`#post:${post.id + 2}`}>
              {post.id + 2}
            </a>
          </li>
        )}
        <li className="page-item">
          <a className="page-link" href={`#post:${post.id + 1}`}>
            {lastButtonLabel}
          </a>
        </li>
      </ul>
    </nav>
  )
}
