import Image from "./Image";

const GojoDev = () => {
  const bday = new Date("06/08/2004");
  const today = new Date();

  let time_diff = today.getTime() - bday.getTime();
  time_diff = time_diff / 1000 / 31556952;

  const age = time_diff.toFixed(3);

  return (
    <div className="center width33">
      <div className="rb20px m-auto">
        <Image src="./images/gojodev.webp" />
      </div>
      <div className="m-auto">
        <h2 className="generalText">Emmanuel Koledoye (~{age})</h2>
      </div>
    </div>
  );
};

export default GojoDev;
