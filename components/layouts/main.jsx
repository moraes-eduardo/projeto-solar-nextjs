import styles from '../../styles/Main.module.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'


const Main = ({ children }) => (
  <div className={styles.main_container}>
    <Navbar />
    <Sidebar />
    

    <div className={styles.content_wrapper}>
      {children}
    </div>

  </div>
)

export default Main