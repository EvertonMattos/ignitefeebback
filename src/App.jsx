import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/EvertonMattos.png',
      name: 'Everton Mattos',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishAt: new Date('2022-06-02 23:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png ',
      name: 'Diego 3g',
      role: 'Backend Developer',
    },
    content:[
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Sou developer Back end'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishAt: new Date('2022-01-02 23:00:00'),
  },
]
export function App() {
  return (
    <div>
     <Header/>

     <div className={styles.wrapper}> 
      <Sidebar />
        <main>
        {posts.map(post=>{
          return(
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishAt={post.publishAt}
            />
          )
        })} 
        </main>
     </div>
    </div>
  )
}
