import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from './styles.module.css'

export function Sidebar(){
  return(
    <aside className={styles.siderbar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"  />

      <div className={styles.profile}>
      <Avatar hasBorder src='https://github.com/EvertonMattos.png'/>
        <strong>Everton Mattos</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>

  )
}