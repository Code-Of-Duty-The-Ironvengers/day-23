import { useState } from "react";
import "./App.css";

const obj = {
  name: "Maxime",
};

obj.name;
obj["name"];

const aVariableThatHoldsTheStringName = "name";
obj[aVariableThatHoldsTheStringName];

const codeOfDuty = [
  { name: "Asem", from: "Syria" },
  { name: "Pelayo", from: "ESSPAIN" },
  { name: "Tony", from: "SwagVille" },
  { name: "Maxime", from: "Lies About Her Age DAM" },
  { name: "Vincent", from: "Berlin" },
  { name: "Kira", from: "Mountains" },
  { name: "Guichermo", from: "ESSPAIN" },
  { name: "Daiane", from: "Braziu" },
  { name: "Tiffany", from: "Taiwan" },
  { name: "Nuno", from: "Puerto" },
  { name: "Nico", from: "Parijs" },
  { name: "Diana", from: "Parijs" },
  { name: "Joao", from: "Need For Speed Peniche" },
  { name: "Palash", from: "UAE" },
  { name: "Elvan", from: "Gluten Tag" },
  { name: "Abhijeet", from: "Parijs" },
  { name: "Soumia", from: "Morocco" },
  { name: "Aderemi", from: "Berlin" },
  { name: "Nana", from: "7 languages spokenville" },
  {
    name: "Jackson",
    from: "Drawing smilies instead of answering FilipeStrasse",
  },
  {
    name: "Dani",
    from: "ESSPAIN",
  },
  {
    name: "Filipe",
    from: "I bless the rains down in AAAAFRICAAAA",
  },
];

function App() {
  const [userTextOnInput, setUserTextOnInput] = useState("");
  const [filter, setFilter] = useState("name");

  const countryStudents = codeOfDuty
    .filter((student) => {
      const wantToKeep = student[filter]
        .toLowerCase()
        .includes(userTextOnInput.toLowerCase());

      return wantToKeep;
    })
    .map((student) => {
      return (
        <div key={student.name}>
          {student.name} - {student.from}
        </div>
      );
    });

  return (
    <div className="App">
      <InputComponenet
        // onChange={useWhatever}
        maxChars={20}
        onTonySwag={(evt) => {
          setUserTextOnInput(evt.target.value);
        }}
      />
      {/* <Input max={5} /> */}
      <br />
      <button
        onClick={() => {
          setFilter("NaMe".toLowerCase());
        }}
        style={{ margin: "20px 50px 20px 0" }}
      >
        Name
      </button>
      <button
        onClick={() => {
          setFilter("FrOm".toLowerCase());
        }}
      >
        Country
      </button>
      <div key="a key to the kingdom" />
      {countryStudents}
    </div>
  );
}

export default App;

function InputComponenet({ maxChars = 200, onTonySwag }) {
  const [input, setInput] = useState("");

  return (
    <input
      onChange={(e) => {
        setInput(e.target.value);
        onTonySwag(e);
      }}
      style={{
        border: input.length >= maxChars ? "5px solid red" : "",
        outline: "none",
      }}
    />
  );
}
