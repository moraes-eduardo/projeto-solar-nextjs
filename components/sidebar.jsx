import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'
import { 
    ChevronIcon, 
    Dashboard,
    Qtde,
    Projetos,
    Informacoes,
    Logout,
    Set,
    Star
} from "./icones"

const Sidebar = () => (
  <div className={styles.sidebar}>
    <nav>
      <Link href="/sidebar/dash">
        <a className={styles.link_sidebar}>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Dashboard}
        </button><strong>Dashboard</strong></a>
      </Link>
      <Link href="/dime/modulo">
        <a className={styles.link_sidebar}>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Qtde}
        </button><strong>Dimensionamento</strong></a>
      </Link>  
      <Link href="/sidebar/projetos">
        <a className={styles.link_sidebar}>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Projetos}
        </button><strong>Projetos</strong>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{ChevronIcon}
        </button>
        </a>
      </Link>
      <Link href="/sidebar/infor">
        <a className={styles.link_sidebar}>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Informacoes}
        </button><strong>Informações</strong></a>
      </Link>
      <Link href="/sidebar/npm">
        <a className={styles.link_sidebar}>
        <button className={`
          flex jus"tify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hove"r:bg-purple-50`}>{Star}
        </button><strong>Comandos NPM</strong></a>
      </Link>
      <Link href="/sidebar/config">
        <a className={styles.link_sidebar}>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Set}
        </button><strong>Configurações</strong></a>
      </Link>
      <Link href="/sidebar/logout">
        <a className={styles.link_sidebar}>
        <button className={`
          flex justify-center items-center
          text-blue-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Logout}
        </button><strong>Logout</strong></a>
      </Link>
    </nav>
  </div>
)

export default Sidebar