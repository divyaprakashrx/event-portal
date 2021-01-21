import styles from './footer.module.css'

const Footer = () => (
  <div className={styles.footer}>
    <p style={{textAlign:`center`}}>&copy; Robotics Club NITP {new Date().getFullYear()}</p>
  </div>
)

export default Footer
