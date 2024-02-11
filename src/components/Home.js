import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import particlesConfig from "../constants/particlesConfig";
import "./Home.css"

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = particlesConfig

  if (init) {
    return (
        <Particles id="tsparticles" options={options}/>
    );
  }

  return <></>;
};
export default Home