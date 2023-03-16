import styles from './ClearButton.module.css'

export const ClearButton = ({clearInputs}) => {
  return (
    <button className={styles.buttonClear} onClick={clearInputs}>Limpiar</button>
  )
}
