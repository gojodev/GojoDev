import React, { useState } from "react";

interface Props {
  dim?: string;
  src: string;
}

const Image = ({ src, dim = "200px" }: Props) => {
  return (
    <div>
      <img
        src={src}
        alt="image"
        className="Image-comp fadeIn box-shadow"
        width={dim}
        height={dim}
      />
    </div>
  );
};

export default Image;
