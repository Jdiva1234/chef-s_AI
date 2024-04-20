import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";

function ExplorePage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <br />
        <InputBox placeholder={"Explore new theme..."} />
      </div>
    </>
  );
}
export default ExplorePage;
