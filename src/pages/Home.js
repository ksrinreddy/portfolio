import React from "react";
import Hero from "../components/Hero";
import ProjectsPreview from "../components/ProjectsPreview";
import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      {/* <ProjectsPreview /> */}
    </main>
  );
};

export default Home;
