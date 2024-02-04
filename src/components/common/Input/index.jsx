export function Input({type, id, value, onChange}) {

  function handleChange(e) {
    const {id , value} = e.target;

    onChange(id, value)
  }
  return (
    <input onChange={handleChange} type={type} id={id} value={value}/>
  )
}
