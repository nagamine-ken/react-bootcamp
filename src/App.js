import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes";
import Login from "./Login";
import Form from "./Form";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

// Keeoer's App:
// function App() {
//   return (
//     <div>
//       <Header />
//       {notes.map((noteItem)=>{
//         return (
//           <Note
//             // All of these data is passed to the Note.jsx child as an object called "props":
//             key={noteItem.id}
//             title={noteItem.title}
//             content={noteItem.content}
//           />
//         );
//       })}

//       <Footer />
//     </div>
//   );
// }

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

// const userIsRegistered = true;

// function App() {
//   return (
//     <div className="container">
//       <Form isRegistered={userIsRegistered} />
//     </div>

//   );
// }

function App() {
  var count = 0;

  function increase() {
    count++;
    console.log(count);
    root.render(
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    );
  }

  root.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
