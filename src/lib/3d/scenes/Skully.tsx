"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { PerspectiveCamera } from "three";
import SkullyScene from "./SkullyScene";

const Skully = () => {
  const canvasProps = useMemo(() => {
    const camera = new PerspectiveCamera(15);
    camera.position.setZ(3);
    return { camera };
  }, []);

  return (
    <Canvas {...canvasProps}>
      <SkullyScene />
    </Canvas>
  );
};

export default Skully;
