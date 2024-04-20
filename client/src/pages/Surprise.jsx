import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";

function SurprisePage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="flex justify-center">
          Unleash Culinary Adventures, One Surprise at a Time!
        </h1>
        <br />
        <InputBox placeholder={"Type your preference here..."} />
      </div>
    </>
  );
}
export default SurprisePage;
