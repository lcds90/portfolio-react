import { ReactElement } from "react"
import style from './style.module.css'

type NavbarProps = {
    children: ReactElement | ReactElement[];
};

export const Navbar = ({children}: NavbarProps) => {
  return (
    <nav className={style.navbar}>
        {children}
    </nav>
    )
}
