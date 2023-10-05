import Button from '../button/Button';

function Content({ states, id, title, body, date, archived }) {
  const deleteHandler = () => {
    states.setNotes(states.notes.filter((item) => item.id !== id));
  };
  const archiveHandler = () => {
    states.setNotes(
      states.notes.map((item) => item.id == id ? { ...item, archived: !item.archived } : item
      )
    );
  };

  return (
    <div className={`readed-output-container ${archived ? "archived" : ""}`}>
      {archived ? "(Archived)" : ""}
      <div className="not-readed-output-left">
        <h4>
          <strong>{title}</strong>
        </h4>
        <h6 className="writer-text">{body}</h6>
        <h6>{date}</h6>
      </div>

      <div className="not-readed-icons">
        <Button states={states} id={id} icon="undo" handler={archiveHandler} />
        <Button
          states={states}
          id={id}
          icon="delete-64"
          handler={deleteHandler} />
      </div>
    </div>
  );
}

export default Content