import "./Home.css";
import man from "./assets/man.png";
function Home() {
  const text = "2교시"
  const text1 = "3교시"
  return (
    <div className="container">
      <img src="bear.png" alt="" />
      <h2>{text}</h2>
      <img src= {man} alt="" />
      <p>{text1}</p>
    </div>
  );
}
export default Home;
