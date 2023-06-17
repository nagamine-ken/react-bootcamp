import "./App.css";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import contacts from "./contacts";


function App() {
  return (
    <div>
      <Header />
      {contacts.map((contact)=>{
        return (
          <Note
            // All these data is passed to the Note.jsx child as an object called "props":
            id={contact.id}
            key={contact.id}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
      
      <Footer />
    </div>
  );
}

export default App;
