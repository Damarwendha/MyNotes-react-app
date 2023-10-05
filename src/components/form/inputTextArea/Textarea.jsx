function Textarea({ states }) {
  return (
    <div className="input-writer-year-container">
      <textarea
        value={states.body}
        onChange={(e) => states.setBody(e.target.value)}
        className="input-body input-title"
        placeholder="Write here!"
        name="msg"
        rows="5"
        cols="50"
      ></textarea>
    </div>
  );
}

export default Textarea