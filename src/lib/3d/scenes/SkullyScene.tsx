"use client";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useState } from "react";
import Registered from "./Registered";
import SkullyMesh from "./SkullyMesh";
import SpearheadMesh from "./SpearheadMesh";

const SPEED = 0.003;
let timeoutId: NodeJS.Timeout;
const LIGHT_SOURCE_POSITION = [5, 10, 2] as [x: number, y: number, z: number];

const SkullyScene = () => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [groupProps, setGroupProps] = useState({
    dispose: null,
    "rotation-y": 0,
    "rotation-x": 0,
  });

  useFrame((_, delta) => {
    if (autoRotate)
      setGroupProps((prev) => ({
        ...prev,
        "rotation-y": prev["rotation-y"] + delta,
        "rotation-x":
          prev["rotation-x"] > 0
            ? prev["rotation-x"] - SPEED
            : prev["rotation-x"] + SPEED,
      }));
  });

  const stopAutoRotate = () => {
    setAutoRotate(false);
    clearTimeout(timeoutId);
  };

  const handleMouseMove = (e: ThreeEvent<PointerEvent>) => {
    stopAutoRotate();
    setGroupProps((prev) => ({
      ...prev,
      "rotation-x": prev["rotation-x"] + e.movementY * SPEED,
      "rotation-y": prev["rotation-y"] + e.movementX * SPEED,
    }));
    timeoutId = setTimeout(() => setAutoRotate(true), 3000);
  };

  return (
    <group {...groupProps} onPointerMove={handleMouseMove}>
      <directionalLight intensity={20} position={LIGHT_SOURCE_POSITION} />
      <SkullyMesh lightPosition={LIGHT_SOURCE_POSITION} />
      <SpearheadMesh />
      <Registered />
    </group>
  );
};

export default SkullyScene;
