import { Component, useState, createContext, useContext } from "react";
import "./App.css";
import { useAddStudentForm } from "./add-student-form.hook";

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

// Context
// useReducer

class App2 extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("COMPONENT WAS ADDED TO THE DOM");
    // axios.get('data from db').then()
  }

  componentDidUpdate() {
    console.log("COMPONENT JUST UPDATED");
  }

  componentWillUnmount() {
    console.log("ABOUT TO LEAVE THIS CRUEL WORLD");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Hello from App2
        <div onClick={this.increment}>COUNT IS {this.state.count}</div>
      </div>
    );
  }
}

function App() {
  const [students, setStudents] = useState(codeOfDuty);
  const [userTextOnInput, setUserTextOnInput] = useState("");
  const [filter, setFilter] = useState("name");
  const [on, setOn] = useState(true);

  function updateStudentListForKicks(newStudent) {
    setStudents([newStudent, ...students]);
  }

  const countryStudents = students
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
      <ShowContext />
      {on && <App2 />}
      <button onClick={() => setOn(!on)}>TURNS OFF</button>
      <AddStudentForm
        // updateStudentList={updateStudentListForKicks}
        setStudents={setStudents}
        // students={students}
      />

      <Input
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

function Input({ maxChars = 200, onTonySwag }) {
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

function AddStudentForm({ setStudents, students }) {
  const { name, setFrom, from, setName } = useAddStudentForm();

  return (
    <div>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log("CALLED  ON SUBMIT FORM");
        }}
      >
        <input
          placeholder="What s the name?"
          onChange={(evt) => {
            setName(evt.target.value);
          }}
        />
        <br />
        <input
          placeholder="Where this person from?"
          onChange={(evt) => {
            setFrom(evt.target.value);
          }}
        />

        <br />
        <button
          type="submit"
          onClick={() => {
            console.log("CLICKED ON BUTTON?");
            setStudents((doesntMatter) => [{ name, from }, ...doesntMatter]);
          }}
        >
          SUBMIT NEW PERSON
        </button>
      </form>
    </div>
  );
}

const UserContext = createContext();

function UserContextWrapper({ children }) {
  const [user, setUser] = useState({ _id: "123l", name: "nuno" });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function ShowContext() {
  return (
    <UserContextWrapper>
      <div>
        Grand grand grandparent of the one we want
        <h1>Hello from grand grand apapa</h1>
        <GrandParent />
      </div>
    </UserContextWrapper>
  );
}

function GrandParent() {
  return (
    <div>
      <h1>Hello from grand parent</h1>
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>Hi from Parent</h1>
      <TargetChild />
    </div>
  );
}

function TargetChild() {
  const user = useContext(UserContext);
  return <div>Hey there {user.name}</div>;
}
