import styles from '../styles/NavContent.module.css'
import Link from 'next/link'

const NavContent = () => (
  <div className={styles.navstep}>
    <ul className={styles.main_menu}>
      <Link href="/dime/modulo" >
        <li className={styles.main_menuli}>
          <i className={styles.main_menui}>
            <strong>Módulos</strong>
          </i>
        </li>
      </Link>                
      <Link href="/dime/inversor" >
        <li className={styles.main_menuli}>
          <i className={styles.main_menui}>
            <strong>Inversores</strong>
          </i>
        </li>
      </Link>
      <Link href="/dime/estrutura" >
        <li className={styles.main_menuli}>
          <i className={styles.main_menui}>
            <strong>Estruturas</strong>
          </i>
        </li>
      </Link>
      <Link href="/dime/acessorio" >
        <li className={styles.main_menuli}>
          <i className={styles.main_menui}>
            <strong>Acessórios</strong>
          </i>
        </li>
      </Link>
    </ul>
  </div>
)

export default NavContent

