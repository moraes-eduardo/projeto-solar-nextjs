import { useState, useContext } from 'react'
import styles from '../../styles/QtdeMod.module.css'
import modulos from '../../data/modulos'
import { Context } from "../../context/context";

function Qtde() {

  const { state, dispatch } = useContext(Context);
    
  // state
  const [modulo, setModulo] = useState(" ")
  const [potcliente, setPotcliente] = useState(" ")
  const [qtde, setQtde] = useState('')

  // Função
  let calcQtde = (event) => {
    //prevent submitting
    event.preventDefault()

    if (potcliente === 0 || modulo === 0) {
      alert('Por favor digite a potência do cliente e a potência do modulo')
    } else {
      let qtde = ((potcliente * 1000) / modulo)
      setQtde(Math.ceil(qtde))
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Quantidade Módulo</h1>
          <form onSubmit= {calcQtde}>
            <div>
              <label className={styles.label}>Potência do cliente (kW)</label>
              <input className={styles.forminput} value={potcliente} onChange={(e) => setPotcliente(e.target.value)} />
            </div>
            <div className={styles.select}>
              <label className={styles.label}>Módulo FV (W)</label>
              <select className={styles.formselect} value={modulo} 
                onChange={e => setModulo(e.target.value)}>
                  {modulos.map((item) => (
                <option key={item.value} value={item.pot}>{item.tipo}</option>
              ))}        
              </select>
            </div>
            <div className={styles.submit}>
              <button 
                onClick={() => {
                  dispatch({
                    type: "add_number",
                    value: +qtde })
                }}
                className={styles.btn} 
                type='submit'>
                  Calcule QTDE
              </button>
            </div>
          </form>
      </div>
      <div className={styles.container}>
        <div>
          <h3 className={styles.h3}>
            Potência Módulo:
            <span className={styles.span}>  {modulo}</span>
          </h3>
        </div>
        <div>
          {/* <span type="hidden" >{JSON.stringify(state)}</span> */}
          <h3 className={styles.h3}>
            Qtde Módulo:  
            <span 
              className={styles.span}>  {state.number}</span>
          </h3>
        </div>
      </div>
      <div>
        <button className={styles.btn_outline} >Próximo</button>
      </div>
    </div>
  );
}
export default Qtde