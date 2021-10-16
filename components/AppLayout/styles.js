import css from 'styled-jsx/css'
import { colors, fonts } from '../../styles/theme'
export const global = css.global`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html,
body {
  background-image: radial-gradient(
      ${colors.primary} 1px,
      transparent 1px
    ),
    radial-gradient(${colors.primary} 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  border: 0;
  box-sizing: border-box;
  font-family: ${fonts.base};
  padding: 0;
  list-style: none;
  overflow: hidden;
}
a {
  text-decoration: none;
`

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background-color: #fff;
    box-shadow: 0 0.9rem 1.125rem 0 rgba(0 0 0 /30%);
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 480px) {
    main {
      width: 480px;
      height: 90vh;
    }
  }
`
