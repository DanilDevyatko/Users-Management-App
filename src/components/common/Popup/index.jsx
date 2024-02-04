import "./index.scss"

export function Popup({isOpen, children}) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <h1>Add new user</h1>
      {children}
    </div>
  )
}