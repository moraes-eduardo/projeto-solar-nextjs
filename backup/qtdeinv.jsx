import { useState, useContext } from 'react'
import styles from '../../styles/QtdeMod.module.css'
import sistemas from '../../data/sistemas'
import tensoes from '../../data/tensoes'
import { Context } from "../../context/context";

function QtdeInv(props) {

  const { state } = useContext(Context);

  const [sistema, setSistema] = useState(" ")
  const [tensao, setTensao] = useState(" ")
  
  // Função calculo Qtde Inversor

  return (    
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Cálculo da quantidade de inversor</h1>
        <h3 className={styles.h3}>Qtde Módulo: 
          <span className={styles.span}>  {state.number}
          </span>
        </h3>
        <form onSubmit={"função calculo inversor"}>
          <div className={styles.select}>
            <label className={styles.label}>Sitema - Inversor</label>
            <select className={styles.formselect} value={sistema} 
              onChange={e => setSistema(e.target.value)}>
                {sistemas.map(item => (
                <option key={item.value} value={item.potmax}>{item.tipo}</option>                
              ))}
            </select>
          </div>
          <div className={styles.select}>
            <label className={styles.label}>Rede Elétrica Cliente</label>
            <select className={styles.formselect} 
              value={tensao}
              onChange={e => setTensao(e.target.value)}>
              {tensoes.map(item => (
                <option key={item.value} value={item.value}>{item.tipo}</option>
              ))}
            </select>
          </div>
          <div className={styles.submit}>
            <button className={styles.btn} type='submit'>Calcule QTDE</button>
          </div>
        </form>
      </div>
      <div className={styles.container}>
        <div>
          <h3 className={styles.h3}>
            Máxima potência de entrada:
            <span className={styles.span}>  {sistema}</span>
          </h3>
          <h3 className={styles.h3}>
            Rede elétrica selecionada:
            <span className={styles.span}>  {tensao}</span>
          </h3>
          <h3 className={styles.h3}>
            Quantidade de Inversor:
            <span className={styles.span}>  {"{qtde_inversor}"}</span>
          </h3>
          <h3 className={styles.h3}>
            Otimizador:
            <span className={styles.span}>  {"{qtde_otimizador}"}</span>
          </h3>
        </div>
      </div>
      <div>
        <button className={styles.btn_outline} type='submit'>Próximo</button>
      </div>
    </div>
  )
}

export default QtdeInv
