export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <style jsx>{`
        button {
          border: 0;
          border-radius: 9999px;
          background-color: #000000;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;

          font-weight: 700;
          font-size: 16px;
          white-space: nowrap;
          padding: 0.4em 1.4em;
          transition: opacity 0.3s ease;
          user-select: none;
        }
        button[disabled] {
          pointer-events: none;
          opacity: 0.7;
        }
        button:hover {
          opacity: 0.7;
        }
        button:focus {
          outline: 0;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
      `}</style>
    </>
  )
}
