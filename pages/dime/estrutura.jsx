import { useState, useContext } from 'react'
import { Context } from "../../context/context"
import modos from '../../data/modos'
import estruturas from '../../data/estruturas'
import NavContent from '../../components/navcontent'
import styles from '../../styles/Dime.module.css'

function Estrutura() {
  const { state } = useContext(Context);
  const [estrutura, setEstrutura] = useState(" ")
  const [modo, setModo] = useState(" ")
  
  // Função calculo Qtde Estrutura

  return (    
    <div className={styles.app}>
      <NavContent />
      <div className={styles.container}>
        <h2 className={styles.titulo}><strong>Estrutura dos Módulos</strong></h2>
        <form onSubmit={"função calculo inversor"}>
          <div className={styles.select}>
            <label className={styles.label}>Tipo - estrutura</label>
            <select className={styles.formselect} value={estrutura} 
              onChange={e => setEstrutura(e.target.value)}>
                {estruturas.map(item => (
                <option key={item.value} value={item.suporte}>{item.tipo}</option>                
              ))}
            </select>
          </div>
          <div className={styles.select}>
            <label className={styles.label}>Modo Instalação</label>
            <select className={styles.formselect} 
              value={modo}
              onChange={e => setModo(e.target.value)}>
              {modos.map(item => (
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
export default Estrutura
