import './Comand.css'
export const Comand = ({color, comand, task}) => {
  return (
    <div className={`comandContainer ${color}`}>
        <p>{comand}</p>
        <p>{task}</p>
    </div>
  )
}
