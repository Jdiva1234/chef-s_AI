import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";

function SurprisePage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <br />
        <InputBox placeholder={"Type your preference here..."} />
      </div>
    </>
  );
}
export default SurprisePage;
