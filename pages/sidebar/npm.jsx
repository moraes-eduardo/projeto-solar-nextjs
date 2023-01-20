import styles from '../../styles/Tabela.module.css'
import comandos from '../../data/comandos'

function getLinhas() {
  return comandos.map((comando, i) => {
    return (
      <tr key={comando.id}
      className={i % 2 === 0 ? 'par' : 'impar'}>
          <td className={styles.td1}>{comando.id}</td>
          <td className={styles.td2}>{comando.tecnologia}</td>
          <td className={styles.td3}>{comando.comando}</td>
          <td className={styles.td4}>{comando.obs}</td>
          <style jsx>{`
            .par {
              background-color: #ddd;
            }
            .impar {
              background-color: #ccc;
            }
          `}</style>
      </tr>
      )
  })
}

export default function NPM() {
  return (
    <div>
      <div>
        <h1><strong>Tabela de comandos NPM</strong></h1>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>                    
              <th className={styles.th}>Id</th>
              <th className={styles.th}>Tecnologia</th>
              <th className={styles.th}>Comando</th>
              <th className={styles.th}>Observação</th>
            </tr>
          </thead>
          <tbody>
            {getLinhas()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Número preço 
// <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>