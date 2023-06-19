import "./App.css";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
// import contacts from "./contacts";
import notes from "./notes";
// import emojipedia from "./emojipedia";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notes)=>{
        return (
          <Note
            // All of these data is passed to the Note.jsx child as an object called "props":
            key={notes.id}
            title={notes.title}
            content={notes.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>
//         <span>emojipedia</span>
//       </h1>

//       <dl className="dictionary">
//         {emojipedia.map( (emojiTerm) => {
//           return (
//             <Entry
//               // All of these data is passed to the Entry.jsx child as an object called "props":
//               //When mapping components you have to assign an unique "key" to each mapped component!!!
//               key={emojiTerm.id}
//               emoji={emojiTerm.emoji}
//               name={emojiTerm.name}
//               meaning={emojiTerm.meaning}
//             />
//           );
//         })}
//       </dl>
//     </div>
//   );
// }

export default App;
