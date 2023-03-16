import './Comand.css'

import { FaRegCopy } from 'react-icons/fa'
import { useState } from 'react'

export const Comand = ({ color, comand, task }) => {
  const [showCopy, setShowCopy] = useState(false);

  const copyComand = () => {
    navigator.clipboard.writeText(comand);
    setShowCopy(true);
    setTimeout(()=>setShowCopy(false),2000)
  }
  return (
    <div className={`comandContainer ${color}`}>
      <div className='comandSelect'>
        <p>{comand}</p>
        <FaRegCopy onClick={copyComand} />
        {showCopy&&<p className='copy'>Copiado</p>}
      </div>
      <p>{task}</p>
    </div>
  )
}
