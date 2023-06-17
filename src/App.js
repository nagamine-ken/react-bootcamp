import "./App.css";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
  return (
    <div>
      <Header />
      <Note
        name="Jenny"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jennie_at_the_Sprite_Waterbomb_Festival_2018_%281%29.jpg/170px-Jennie_at_the_Sprite_Waterbomb_Festival_2018_%281%29.jpg"
        tel="(250)423-5435"
        email="jennybp@gmail.com"
      />
      <Footer />
    </div>
  );
}

export default App;
