import InputTitle from "./inputTitle/InputTitle";
import Textarea from ".//inputTextArea/Textarea";
import Checkbox from "./checkbox/Checkbox";
import Submit from "./button/Submit";

function Form({ states }) {
  const date = new Date();
  date.setDate(date.getDate());
  const onSubmitHandler = (e) => {
    e.preventDefault();
    states.setNotes([
      ...states.notes,
      {
        id: +new Date(),
        title: states.title,
        body: states.body,
        archived: states.isArc,
        createdAt: date.toDateString(),
      },
    ]);
  };
  return (
    <form className="top-container" onSubmit={onSubmitHandler}>
      <h3>ADD NEW NOTE!</h3>
      <InputTitle states={states} />
      <Textarea states={states} />
      <Checkbox states={states} />
      <Submit />
    </form>
  );
}

export default Form