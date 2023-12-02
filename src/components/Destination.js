import Camera from "../Assets/1.jpg";
import Camera1 from "../Assets/Camra1.jpg";
import DestinationData from "./DestinationData";
import "./Destinationstyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>About </h1>
      <p></p>

      <DestinationData
        className="first-des"
        text="SPECIAL MOMENT PHOTOGRAPHY STUDIO captures the essence of a split second frozen in time, a unique blend of art and technology. With each click of the camera, it crystallizes the fleeting beauty of the world, allowing us to relive and appreciate the nuances of a particular instant. "
        img1={Camera}
        img2={Camera1}
      />
    </div>
  );
};

export default Destination;
