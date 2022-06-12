import style from './style.module.css'
import logo from '../../image/logo.svg'
export function Header() {
  return(
  <strong className={style.header}>
    <img src={logo} alt="Logo Ignite" />
    Ignite
  </strong>
  )
}