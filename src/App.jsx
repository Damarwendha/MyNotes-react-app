import "./App.css";
import { useState } from "react";
import Header  from "./components/header/Header";
import Form from "./components/form/Form";
import Filter from "./components/filter/Filter";
import Output from "./components/output/Output";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Chasing dreams not perfection",
      body: "Perfectionism can cause depression and stress, yet it is common—particularly in accomplished professionals. Pursuing excellence rather than perfection heightens our enjoyment of the process rather than attachment to the outcome. Being open to curiosity and wonder can help promote a growth mindset and combat perfectionism.",
      archived: false,
      createdAt: "Tue Dec 22 2004",
    },
    {
      id: 2,
      title:
        "Would you rather live a life that leaves you filled with hate and regret on your death bed Or... Give life everything you’ve got to build something amazing?",
      body: "If you’re anything like me, the choice is obvious...Chase your dreams.Too many people let fear keep them from chasing their dreams and living the life they truly want in their heart.The question is ... are you going to be one of these people?Because I can promise you this... Even though chasing your dreams is extremely difficult… It’s going to be worth it. Always chase your dreams. To do so, you're going to have to get over the fears that keep most people from ever reaching their dreams.",
      archived: true,
      createdAt: "Tue Dec 22 2004",
    },
    {
      id: 3,
      title: "PURSUING YOUR DREAMS & YOUR POTENTIAL LEADS TO FULFILLMENT",
      body: "you’ll start to realize that true happiness and success is attainable through your daily actions and the pursuit of your potential",
      archived: false,
      createdAt: "Tue Dec 22 2004",
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isArc, setIsArc] = useState(false);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy == "input") sortedItems = notes;
  if (sortBy == "alphabet")
    sortedItems = notes.slice().sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy == "type")
    sortedItems = notes.slice().sort((a, b) => a.archived - b.archived);

  // Maafkan kemalasanku ya mas reviewer, sampe saya kumpulin gini statesnya hehe
  const states = {
    title: title,
    setTitle: setTitle,
    body: body,
    setBody: setBody,
    isArc: isArc,
    setIsArc: setIsArc,
    notes: notes,
    setNotes: setNotes,
    sortBy: sortBy,
    setSortBy: setSortBy,
    sortedItems: sortedItems,
  };

  return (
    <div className="App">
      <Header />
      <Form states={states} />
      <Filter states={states} />
      <Output states={states} />
    </div>
  );
}

export default App;
