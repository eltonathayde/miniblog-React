import styles from "./Dashbord.module.css"
import {Link} from "react-router-dom"

// hooks

import {useAuthValue} from '../../context/Authcontext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'

const Dashbord = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  // posts do usuario

  const{documents: posts,loading} = useFetchDocuments("posts",null,uid)

  const deleteDocument = (id) => {

  }
  if(loading){
    return <p>carregandoo ...</p>
  }
  return (
    <div className={styles.dashbord}>
        <h2>Dashbord</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
       <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>       
            </div>
        ) : (
          <>
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div >
             {posts && posts.map((post) =>(
              <div key={post.id}  className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/post/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link to={`post/edit/${post.id}`} className="btn btn-outline">
                    Editar
                  </Link>
                  <button
                    onClick={()=> deleteDocument(post.id)}
                    className="btn btn-outline btn-danger">
                      Excluir
                  </button>
                </div>
              </div>
          ))}
          </>
        ) }

     
    </div>
  )
}

export default Dashbord