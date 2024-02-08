import "./index.scss"

export function Popup({isOpen, children}) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      {children}
    </div>
  )
}
