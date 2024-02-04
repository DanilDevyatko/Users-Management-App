import { Input } from "../Input";

export function Form({onChangeInput, formFields}) {
  const {name, surname, age} = formFields;
  
  return (
    <div>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" value={name} onChange={onChangeInput}/>
      </div>
      <div className="input-group">
        <label htmlFor="surname">Surname</label>
        <Input type="text" id="surname" value={surname} onChange={onChangeInput}/>
      </div>
      <div className="input-group">
        <label htmlFor="age">Age</label>
        <Input type="number" id="age" value={age} onChange={onChangeInput}/>
      </div>
    </div>
  )
}
