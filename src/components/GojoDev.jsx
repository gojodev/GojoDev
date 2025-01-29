import Image from "./Image";

const GojoDev = () => {
  const bday = new Date("06/08/2004");
  const today = new Date();

  let time_diff = today.getTime() - bday.getTime();
  time_diff = time_diff / 1000 / 31556952;

  const age = time_diff.toFixed(3);

  return (
    <div className="container-h center width33">
      <div className="box-shadow rb20px">
        <Image src="./images/gojodev.webp" className="center" />
      </div>
      <div className="center">
        <h2 className="generalText">Emmanuel Koledoye (~{age})</h2>
      </div>
    </div>
  );
};

export default GojoDev;
