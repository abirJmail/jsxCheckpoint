import logo from './logo.svg';
import './Style.css';
import women from "./women.jpg"

function App() {
  return (
<div className="App">
    <div style={{border:"solid 1px black", maxWidth:"100vw", backgroundColor: "rosybrown",textAlign: "center"}}>
    <h1 className="title red">ABIR JMAIL</h1>
    <br />
    <img src={women} alt ='women' width="500" height="360" />
    <br />
    <img src="/download.jpg" width="700" height="360" />
    </div>
    <video width="700" height="360"  controls >
      <source src="/girl.mp4" type="video/mp4" />
    </video>
</div>

    
  );
}

export default App;
