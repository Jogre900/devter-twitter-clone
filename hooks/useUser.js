import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { changeAuthStat } from 'services/firebase'
import { Routes } from 'data/routes'

export default function useUser() {
  const router = useRouter()
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    changeAuthStat(setUser)
  }, [])

  useEffect(() => {
    user === null && router.push(Routes.MAIN)
  }, [user])

  return user
}
