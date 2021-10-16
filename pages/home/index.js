import { useState, useEffect } from 'react'
import Link from 'next/link'
import AppLayout from 'components/AppLayout'
import useUser from 'hooks/useUser'
import Devit from 'components/Devit'
import { fetchLatestDevits, db } from 'services/firebase'
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'
import Create from 'components/Icons/Create'
import Home from 'components/Icons/Home'
import { Routes } from 'data/routes'
import Search from 'components/Icons/Search'
import { colors } from 'styles/theme'
import ArrowLeft from 'components/Icons/ArrowLeft'

export default function HomePage() {
  const user = useUser()
  const [devit, setDevit] = useState([])

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'devits'), orderBy('createdAt', 'desc'))
      onSnapshot(q, (snapshot) => {
        setDevit(
          snapshot.docs.map((doc) => {
            const data = doc.data()
            const id = doc.id
            const { createdAt } = data

            return {
              ...data,
              id,
              createdAt: +createdAt.toDate(),
            }
          })
        )
      })
    }
  }, [user])

  return (
    <>
      <AppLayout>
        <header>
          <ArrowLeft stroke={colors.black} width={32} height={32} />{' '}
          <h2>Inicio</h2>
        </header>
        <section>
          {devit.map(({ id, email, message, avatar, createdAt }) => (
            <Devit
              avatar={avatar}
              key={id}
              email={email}
              content={message}
              createdAt={createdAt}
            />
          ))}
        </section>
        <nav>
          <Link href='/compose/devit'>
            <a>
              <Create stroke='#09f' width={32} height={32} />
            </a>
          </Link>
          <Link href={Routes.HOME}>
            <a>
              <Home stroke='#09f' width={32} height={32} />
            </a>
          </Link>
          <Link href={Routes.HOME}>
            <a>
              <Search stroke='#09f' width={32} height={32} />
            </a>
          </Link>
        </nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          display: flex;
          height: 49px;
          width: 100%;
          position: sticky;
          top: 0;
          padding-left: 10px;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 1.5rem;
        }
        section {
          flex: 1;
        }
        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: sticky;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 15%);
          background-position: center;
          background-size: 180px 180px;
        }
        nav a:hover > :global(svg) {
          stroke: ${colors.secondary};
        }
      `}</style>
    </>
  )
}
