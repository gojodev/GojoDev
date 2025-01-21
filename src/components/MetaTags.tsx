import React from "react";
import { Helmet } from "react-helmet-async";

// You can have more props. In my case, these are enough.
function MetaTags() {
  return (
    <Helmet>
      <title>GojoDev - Portfolio</title>

      <meta property="og:title" content="GojoDev" />
      <meta
        property="og:description"
        content="Explore projects by Emmanuel Koledoye, a 3rd-year software development student. Check out helpful websites and programming scripts."
      />
      <meta
        property="og:image"
        content="https://gojodev.com/images/gojodev.webp"
      />
      <meta property="og:url" content="https://gojodev.com" />

      <link rel="canonical" href="https://www.gojodev.com" />
      <link rel="icon" type="image/x-icon" href="./images/favicon.ico" />

      <meta
        name="description"
        content="Explore projects by Emmanuel Koledoye, a 3rd-year software development student. Check out helpful websites and programming scripts."
      />
      <meta
        name="keywords"
        content="web development, programming, software development, projects, GojoDev, Caopoints, Caopoints"
      />
      <meta name="author" content="Emmanuel Koledoye" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <link rel="icon" type="image/x-icon" href="./images/favicon.ico"></link>
    </Helmet>
  );
}

export default MetaTags;
