import { RiLockPasswordLine } from 'react-icons/ri'

import styles from './ClearButton.module.css'
export const OpenBSCButton = () => {
    const copyCredencials = () =>{
        navigator.clipboard.writeText('RIC000\nCONRIC33')
    }
    return (
        <>
        <a className={styles.buttonClear} target='_blank' href='http://boir.oss.claro.amx/Datatable_BSC/Datatable_BSC.html'>Abrir BSC</a>
        <RiLockPasswordLine onClick={copyCredencials}/>
        </>
    )
}
