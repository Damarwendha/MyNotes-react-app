function Checkbox({ states }) {
  return (
    <div className="checkbox-container">
      <input
        value={states.isArc}
        onChange={(e) => states.setIsArc(e.target.value)}
        type="checkbox"
        className="input-checkbox"
      ></input>
      <h6 className="not-readed-title-container">Archived</h6>
    </div>
  );
}

export default Checkbox