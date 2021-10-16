import styles from './styles.module.css'
export default function Avatar({ source, size, alt, text, isWithText }) {
  return (
    <>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} src={source} alt={alt} />
        {isWithText && <strong>{text || 'text'}</strong>}
      </div>

      <style jsx>{``}</style>
    </>
  )
}
