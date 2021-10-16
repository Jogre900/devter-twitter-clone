import { useState } from 'react'
import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import { fonts } from 'styles/theme'
import { addDevit } from 'services/firebase'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { Routes } from 'data/routes'

const STATUS_STATE = {
  NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

export default function ComposeDevit() {
  const router = useRouter()
  const user = useUser()
  const [status, setStatus] = useState(STATUS_STATE.NOT_KNOW)
  const [message, setMessage] = useState('')

  const onHandleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    setStatus(STATUS_STATE.LOADING)
    addDevit({
      email: user.email,
      avatar: user.avatar,
      userId: user.userId,
      message,
    })
      .then(() => {
        setStatus(STATUS_STATE.SUCCESS)
        router.push(Routes.HOME)
      })
      .catch((err) => {
        console.error(err)
        setStatus(STATUS_STATE.ERROR)
      })
  }

  const isDisabled = !message.length || status === STATUS_STATE.LOADING

  return (
    <>
      <AppLayout>
        <form onSubmit={onHandleSubmit}>
          <textarea
            cols='30'
            rows='10'
            onChange={onHandleChange}
            value={message}
            placeholder='¿Que esta pasando?'
          ></textarea>
          <div>
            <Button disabled={isDisabled}>Devitiar</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>
        {`
          textarea {
            font-family: ${fonts.base};
            padding: 0.5rem;
            width: 100%;
            border: 0;
            min-height: 200px;
            resize: none;
          }
          textarea:focus {
            outline: 0;
          }
          div {
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  )
}
