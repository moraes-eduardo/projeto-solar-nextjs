import { useState, useContext } from 'react'
import { Context } from "../../context/context";
import sistemas from '../../data/sistemas'
import tensoes from '../../data/tensoes'
import otimizadores from '../../data/otimizadores'
import NavContent from '../../components/navcontent'
import styles from '../../styles/Dime.module.css'

function Inversor(props) {
  const { state } = useContext(Context);
  const [sistema, setSistema] = useState(" ")
  const [tensao, setTensao] = useState(" ")
  const [otimizador, setOtimizador] = useState(" ")
  
  // Função calculo Qtde Inversor

  return (    
    <div className={styles.app}>
      <NavContent />
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          <strong>Inversores_MicroInversores</strong></h2>
        <form onSubmit={"função calculo inversor"}>
          <div className={styles.select}>
            <label className={styles.label}>Sistema - Inversor</label>
            <select className={styles.formselect} value={sistema} 
              onChange={e => setSistema(e.target.value)}>
                {sistemas.map(item => (
                <option key={item.value} value={item.potmax}>{item.tipo}</option>                
              ))}
            </select>
          </div>
          <div className={styles.select}>
            <label className={styles.label}>SolarEdge Otimizador</label>
            <select className={styles.formselect} value={otimizador} 
              onChange={e => setOtimizador(e.target.value)}>
                {otimizadores.map(item => (
                <option key={item.value} value={item.value}>{item.tipo}</option>                
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
export default Inversor