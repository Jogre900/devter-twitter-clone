import Avatar from 'components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'

export default function Devit({ avatar, email, id, createdAt, content }) {
  const timestamp = useTimeAgo(createdAt)
  return (
    <>
      <article>
        <Avatar source={avatar} />
        <strong>{email}</strong>
        <span>{timestamp}</span>
        <p>{content}</p>
      </article>
      <style jsx>{`
        article {
          padding: 10px 15px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
        date {
          color: '#555';
          font-size: 21px;
        }
      `}</style>
    </>
  )
}
