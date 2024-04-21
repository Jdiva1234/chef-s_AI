import NavBar from "../components/navBar/navbar";
import InputBox from "../components/input/input";
import Footer from "../components/Footer/footer";

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
      <Footer />
    </>
  );
}
export default SurprisePage;
