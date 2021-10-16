import Link from 'next/link'
export default function Timeline ({ name }) {
  return (
    <>
      <h1>Holla {name} desde la Timeline!</h1>
      <Link href='/'>
        <a>Go back to Home</a>
      </Link>
    </>
  )
}
Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello').then((res) => res.json())
}
