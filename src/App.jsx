import { useRef, useState } from "react";
import moon from "./moon.png";
import land from "./land.png";
import red from "./red.gif";
import spongebob from "./spongebob.gif";
import alice from "./alice.gif";
import guy from "./guy.gif";
import explode from "./explode.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const characters = [guy, red, spongebob, alice, explode];
  const ref = useRef();
  const [character, setCharacter] = useState({
    counter: 0,
    get activeCharacter() {
      return characters[this.counter];
    },
  });
  function changeCharacter(){
    if(character.counter  < characters.length-1 ){
      setCharacter({
        counter: character.counter + 1,
        get activeCharacter() {
          return characters[this.counter];
        },
      })
    } else {
      setCharacter({
        counter: 0,
        get activeCharacter() {
          return characters[this.counter];
        },
      })
    }
   
  }
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 22.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={character.activeCharacter} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
          style={{ cursor: "pointer" }}
        >
          <h2>Click to fall</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={changeCharacter}
          sticky={{ start: 2.6, end: 22.5 }}
          style={{ cursor: "pointer" }}
        >
          <h2>Click to change</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
