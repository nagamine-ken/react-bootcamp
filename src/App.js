import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes";
import Login from "./Login";
import Form from "./Form";

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

// Clock:

// function App() {

//   setInterval(updateTime, 1000)
  
//   let now = new Date().toLocaleTimeString();
//   // console.log(now);

//   const [time, setTime] = useState(now)

//   function updateTime(){
//     let newTime = new Date().toLocaleTimeString();
//     setTime(newTime)
//   }


//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={updateTime}>Get Time</button>
//     </div>
//   );
// }

// Event Handler:

function App() {

  const [headingText, setHeadingText] = useState("Hey!")
  const [isMouseOver, setMouseOver] = useState(false)
  const [currentInput, setNewInput] = useState("")

  function handleClick(){
    setHeadingText(currentInput)
    console.log("Clicked!")
  }

  function mouseOver(){
    setMouseOver(true)
  } 

  function mouseOut(){
    setMouseOver(false)
  } 

  function handleChange(event){
    console.log(event.target.value)
    setNewInput(event.target.value)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input onChange={handleChange} value={currentInput} type="text" placeholder="Type anything" />
      <button style={{backgroundColor: isMouseOver ? "black" : "white" }} onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
    </div>
  );
}



export default App;
