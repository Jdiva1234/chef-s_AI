import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="flex justify-center ">
          Welcome to Chefs AI where cooking is made simple{" "}
        </h1>
        <br />
        <InputBox placeholder="Type your ingredients here..." />
      </div>
    </>
  );
}
export default HomePage;
