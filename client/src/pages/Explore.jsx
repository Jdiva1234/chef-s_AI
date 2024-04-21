import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";
import Footer from "../components/Footer/footer";

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

      <Footer />
    </>
  );
}
export default ExplorePage;
