import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthVale } from "../context/Authcontext";

import styles from "./Navbar.module.css"

const Navbar =() => {
   const {user} = useAuthVale();
   const {logout}= useAuthentication()
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
           Mini <span>Blog</span>
     </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/"className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>
                {/* checagem de autenticação */}
                {!user && (
                  <>
                      <li>
                    <NavLink to="/login"className={({isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink>
                </li>
                <li>
                    <NavLink to="/Register"className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
                </li>
                </>
                )}
                {/* checagem de usuario logado */}
                {user && (
                   <>
                    <li>
                        <NavLink to="/posts/create"className={({isActive}) => (isActive ? styles.active : '')}>Novo Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord"className={({isActive}) => (isActive ? styles.active : '')}>Dashbord</NavLink>
                    </li>
                  </>
                )}
                <li>
                    <NavLink to="/about"className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>
                {user && (
                  <li>
                    <button onClick={logout}>Sair</button>
                  </li>
                )}
            </ul>
    </nav>
  )
}

export default Navbar