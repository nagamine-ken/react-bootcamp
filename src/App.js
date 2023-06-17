import "./App.css";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import contacts from "./contacts";


function App() {
  return (
    <div>
      <Header />
      <Note
        // All these data is passed to the Note.jsx child as an object called "props":
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Note
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Note
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <Note
        name={contacts[3].name}
        imgURL={contacts[3].imgURL}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />
      <Footer />
    </div>
  );
}

export default App;
