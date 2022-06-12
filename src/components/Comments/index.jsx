import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment({ content, onDeleteComments }) {
  const [likes, setLikes] = useState(0);
  function handleDeleteComment() {
    onDeleteComments(content);
  }
  function onLikeButton() {
    setLikes(likes + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eried.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Everton Mattos</strong>
              <time
                title="11 de março ás 08:12h"
                dateTime="2022-05-22 08:13:38"
              >
                Publicado há 1hr
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={onLikeButton}>
            <ThumbsUp size={22} />
            Like <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
