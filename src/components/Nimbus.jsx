import LinearWithValueLabel from "./LinearProgressWithLabel";
import Image from "./Image";

const Nimbus = () => {
  return (
    <div className="center">
      <div className="m-auto p-4">
        <div className="box-shadow">
          <Image src="./images/Nimbus-Logo.png" dim="300" />
        </div>
        <br />
        <h2 className="generalText">Internship Completion:</h2>

        <LinearWithValueLabel />
      </div>
    </div>
  );
};

export default Nimbus;
