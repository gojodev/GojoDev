import React from "react";

interface Props {
  dim?: string;
  src: string;
  noBorders?: boolean;
}

const Image = ({ src, dim = "200px", noBorders }: Props) => {
  const borderStyle =
    noBorders === false || noBorders === undefined ? "" : "img-border";
  return (
    <div className={`w-[${dim}] h-[${dim}]`}>
      <img
        src={src}
        alt="Image"
        className={`Image-comp fadeIn rb20px ${borderStyle}`}
        width={dim}
        height={dim}
      />
    </div>
  );
};

export default Image;
