import { Comment } from "../Comments";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { Avatar } from "../Avatar";
import styles from "./style.module.css";
import { useState } from "react";

export function Post({ author, publishAt, content }) {
  const [comments, setComments] = useState(["Post Muito bacana. hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishAt, "d 'de' LLL 'as' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreteNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleCreteNewCommentChange() {
    setNewCommentText(event.target.value);
  }
  function deleteComments(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }
  function handleNewCommemtInvalid() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  const isNewCommentEmpy = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreteNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleCreteNewCommentChange}
          onInvalid={handleNewCommemtInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpy}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComments={deleteComments}
            />
          );
        })}
      </div>
    </article>
  );
}
