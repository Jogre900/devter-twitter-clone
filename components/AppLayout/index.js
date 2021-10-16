import css, { global } from './styles.js'
export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx global>
        {global}
      </style>
      <style jsx>{css}</style>
    </>
  )
}
