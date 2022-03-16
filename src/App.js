import logo from "./logo.svg";
import "./App.css";
import Avatar from "./components/Avatar";
import Partlist from "./components/Partlist";
import { useEffect, useState } from "react";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};
function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(4);
  const [mouth, setMouth] = useState(8);
  const [eyebrows, setEyebrows] = useState(1);
  const [glasses, setGlasses] = useState(3);
  const [clothing1, setClothing1] = useState(5);
  const [clothing2, setClothing2] = useState(7);
  const [clothing3, setClothing3] = useState(9);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };
  useEffect(() => {
    randomize();
  }, []);
  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              mouth={mouth}
              eyebrow={eyebrows}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="list-section">
            <h2>Body</h2>
            <Partlist
              total={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <Partlist
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <Partlist
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <Partlist
              total={total.mouth}
              path="mouth"
              set={setMouth}
              selected={mouth}
            />
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <Partlist
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrows}
              selected={eyebrows}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <Partlist
              total={total.glasses}
              path="glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L1)</h2>
            <Partlist
              total={total.clothing1}
              path="clothing1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className="list-section">
            <h2>Clothing(L2)</h2>
            <Partlist
              total={total.clothing2}
              path="clothing2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className="list-section">
            <h2>Clothing(L3)</h2>
            <Partlist
              total={total.clothing3}
              path="clothing3"
              set={setClothing3}
              selected={clothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
