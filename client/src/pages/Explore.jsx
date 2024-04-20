import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";

function ExplorePage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="flex justify-center">
          Explore AI generated reciepes from different continents
        </h1>
        <br />
        <InputBox placeholder={"Explore new theme..."} />
      </div>
    </>
  );
}
export default ExplorePage;
