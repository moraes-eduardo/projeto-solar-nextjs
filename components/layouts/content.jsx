import styles from '../../styles/Content.module.css'

const Content = ({ children }) => (
  <div className={styles.section}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default Content
