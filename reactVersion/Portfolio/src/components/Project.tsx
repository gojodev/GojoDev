import React from "react";
import Image from "./Image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faGlobe);
interface Props {
  img: string;
  desc: string;
  github: string;
  webLink?: string;
  name: string;
  techStack: string;
}

const Project = ({
  img = "./images/gojodev.webp",
  desc = "Project Description",
  github,
  webLink,
  name,
  techStack,
}: Props) => {
  const displayOrHide = webLink == "" ? "hidden" : "inline-block";
  return (
    <div className="center mt-4">
      <div className="container-v w-[20%]">
        <div className="center">
          <Image src={img} dim="150px" />
        </div>
        <div className="center generalText white bg-black p-2 rb20px mt-3 box-shadow">
          {name}
        </div>
      </div>
      <div className="generalBlackBG white container-v w-[80%] rb20px">
        <div className="w-[auto]">
          <div className="generalText">{desc}</div>

          <div className="container-h center">
            <div className="w-[50%]">
              <a href={github} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="2x"
                  className="pulseAnimation"
                />
              </a>

              <a href={webLink} target="_blank">
                <FontAwesomeIcon
                  icon={["fas", "globe"]}
                  size="2x"
                  className={displayOrHide + " pulseAnimation"}
                />
              </a>
            </div>
            <div className="generalText blueText w-[50%]">{techStack}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
