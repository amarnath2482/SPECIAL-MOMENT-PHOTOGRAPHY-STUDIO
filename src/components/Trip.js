import cant from "../Assets/cant.jpg";
import fashion from "../Assets/fashion.jpg";
import makeup from "../Assets/makeup.jpg";
import meg from "../Assets/meg.jpg";
import short from "../Assets/short.jpg";
import weding from "../Assets/weding.jpg";
import candi from "../Assets/candid.jpg";
import brith from "../Assets/brith.jpg";
import trade from "../Assets/trad.jpg";
import event from "../Assets/event.jpg";
import series from "../Assets/series.jpg";
import cien from "../Assets/cien.jpg";
import Adv from "../Assets/Adv.jpg";
import Indu from "../Assets/Indu.jpg";
import inter from "../Assets/Interior & Architecture.jpg";
import "./Tripstyle.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1> Service </h1>
      <div className="tripcard">
        <TripData
          image={weding}
          heading="Wedding"
        />

        <TripData
          image={candi}
          heading="Candid"
        />

        <TripData
          image={brith}
          heading="Birthday"
        />

        <TripData
          image={trade}
          heading="Traditional"
        />

        <TripData
          image={cien}
          heading="Cinematic"
        />

        <TripData
          image={event}
          heading="Event"
        />
      </div>
      <br></br>
      <>
        <h1> Other Services </h1>
        <div className="tripcard">
          <TripData
            image={makeup}
            heading="Makeup"
          />

          <TripData
            image={fashion}
            heading="Fashion Style"
          />

          <TripData
            image={cant}
            heading="Catering"
          />

          <TripData
            image={short}
            heading="Short Films"
          />

          <TripData
            image={meg}
            heading="Mehndi Design"
          />

          <TripData
            image={series}
            heading="Web Series"
          />
        </div>
      </>
      <h1> Commercial</h1>
      <div className="tripcard">
        <TripData image={Adv} heading="Advertising" text="" />

        <TripData image={Indu} heading="Industrial" text="" />

        <TripData image={inter} heading="Interior & Architecture" text="" />
      </div>
    </div>
  );
}

export default Trip;
