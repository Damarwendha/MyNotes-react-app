function Filter({ states }) {
  return (
    <div className="mid-container filter">
      <select onChange={(e) => states.setSortBy(e.target.value)}>
        <option value={"input"}>Sort by input date</option>
        <option value={"alphabet"}>Sort by alphabet</option>
        <option value={"type"}>Sort by type</option>
      </select>
    </div>
  );
}

export default Filter