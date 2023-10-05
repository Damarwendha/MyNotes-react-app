import Headers from "./header/Headers";
import Content from "./content/Content";

function Output({ states }) {
  return (
    <Headers>
      {states.notes.length === 0 ? <p>Your note is still empty :{"("}</p> : ""}
      {states.sortedItems.map((item, i) => (
        <Content
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          archived={item.archived}
          date={item.createdAt}
          states={states} />
      ))}
    </Headers>
  );
}

export default Output