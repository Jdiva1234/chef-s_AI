import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";
import Footer from "../components/Footer/footer";
import axios from "axios";

const apiCall = () => {
  axios.get("http://localhost:8080").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};

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
        <button onClick={apiCall}>Enter</button>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
