import { useState, useContext } from 'react'
import { Context } from "../../context/context"
import modulos from '../../data/modulos'
import NavContent from '../../components/navcontent'
import styles from '../../styles/Dime.module.css'

function Modulo() {
  const { state, dispatch } = useContext(Context)
  const [potmodulo, setModulo] = useState(" ")
  const [potcliente, setPotcliente] = useState(" ")
  let potc = potcliente
  let potm = potmodulo
  
  // Função
  let calcQtde = (event) => {
    event.preventDefault()
    if (potc === 0 || potm === 0) {
      alert('Por favor digite a potência do cliente e a potência do modulo')
    } else {
      let qtde = Math.ceil((potc * 1000) / potm)
      dispatch({
        type: "add_qtde",
        value: +qtde })
      dispatch({
        type: "add_potm",
        value: +potm })
      dispatch({
        type: "add_potc",
        value: +potc })
    }
  }
  return (
    <div className={styles.app}>
      <NavContent />
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          <strong>Módulos FV</strong>
        </h2>
          <form onSubmit= {calcQtde}>
            <div>
              <label className={styles.label}>Potência do cliente (kW)</label>
              <input className={styles.forminput} value={potcliente} onChange={(e) => setPotcliente(e.target.value)} />
            </div>
            <div className={styles.select}>
              <label className={styles.label}>Módulo FV (W)</label>
              <select className={styles.formselect} value={potmodulo}  
                onChange={e => setModulo(e.target.value)}>
                  {modulos.map((item) => (
                <option key={item.value} value={item.potmodulo}>{item.tipo}</option>
              ))}        
              </select>
            </div>
            <div className={styles.submit}>
              <button 
                className={styles.btn} 
                type='submit'>
                  Calcule QTDE
              </button>
            </div>
          </form>
      </div>
      <div className={styles.container}>
        <div>
          <h2 className={styles.titulo}>
            <strong>Painel</strong>
          </h2>
        </div>
        <div className={styles.painel}>
          <h3 className={styles.h31}>
            Potência Cliente:
          </h3>
          <span className={styles.span}>
            <strong>{state.potc}</strong>
          </span>
        </div>
        <div className={styles.painel}>
          <h3 className={styles.h32}>
            Potência Módulo:
          </h3>
          <span className={styles.span}>
            <strong>{state.potm}</strong>
          </span>
        </div>
        <div className={styles.painel}>
          <h3 className={styles.h33}>
            Qtde Módulo: 
          </h3>
          <span className={styles.span}>
            <strong>{state.qtde}</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Modulo


{/* <span type="hidden" >{JSON.stringify(state)}</span> */}