import './Input.css'
export const Input = ({labelName, children}) => {
  return (
    <div className='inputContainer'>
        <label htmlFor="input" className="labelInput">{labelName}</label>
        {children}
    </div>
  )
}
