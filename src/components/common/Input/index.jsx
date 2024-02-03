export function Input({type, id, value, onChage}) {
  return (
    <input onChange={(event) => {onChage(`${id}`, event.target.value)}} type={type} id={id} value={value}/>
  )
}
