import React from "react";

interface Props {
  dim?: string;
  src: string;
}

const Image = ({ src, dim = "200px" }: Props) => {
  return (
    <div className={`w-[${dim}] h-[${dim}]`}>
      <img
        src={src}
        alt="Image"
        className="Image-comp fadeIn rb20px img-border"
        width={dim}
        height={dim}
      />
    </div>
  );
};

export default Image;
