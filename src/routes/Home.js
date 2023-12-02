import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://img.freepik.com/free-photo/hi-tech-biometric-security-scan-close-up-woman-eye-process-scanning_587448-4950.jpg?t=st=1696503831~exp=1696507431~hmac=45ef4e1e5a31e01fbdfebb798306a3ae3dc39c6808de95877a3b97cbbcfc304a&w=1060"
        title="Welcome to our Family"
        text="Hello...."
        buttonText="Join Us"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
