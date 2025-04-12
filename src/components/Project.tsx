import React, { useEffect, useState } from "react";
import Image from "./Image";
import "../style.css";
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
  const [webLinkStyle, setWebLinkStyle] = useState("");
  const [githubStyle, setGithubStyle] = useState("");
  useEffect(() => {
    const webLinkStyle = webLink == undefined ? "hide" : "inline-block";
    const githubStyle = github == undefined ? "hide" : "inline-block";

    setWebLinkStyle(webLinkStyle);
    setGithubStyle(githubStyle);
    console.log("name, define? : ", name, webLink);
  }, []);

  return (
    <a href={webLink || github} target="_blank">
      <div className="center generalBlackBG box-shadow w-[95%] m-auto rb20px">
        <div className="container-v w-[250px] h-[250px]">
          <div className="center">
            <div className="m-auto">
              <Image src={img} dim="150px" />
            </div>
          </div>
          <div className="center generalText white bg-white p-2 rb20px mt-3 box-shadow">
            <div className="text-black m-auto">{name}</div>
          </div>
        </div>

        <div className="container-v white rb20px m-auto">
          <div className="w-[100%]">
            <div className="generalText text-center">{desc}</div>
            <div className="container-h center">
              <div className="w-[50%]">
                <a href={github} target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    size="2x"
                    className={`${githubStyle} pulseAnimation`}
                  />
                </a>

                <a href={webLink} target="_blank">
                  <FontAwesomeIcon
                    icon={["fas", "globe"]}
                    size="2x"
                    className={`${webLinkStyle} pulseAnimation`}
                  />
                </a>
              </div>
              <div className="generalText blueText w-[50%]">{techStack}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
