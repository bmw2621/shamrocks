import { useGLTF } from "@react-three/drei";
import { FC, useMemo } from "react";
import { ShaderMaterial, Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { skullData } from "./shaders";

type Props = {
  lightPosition: [x: number, y: number, z: number];
};

const SkullyMesh: FC<Props> = ({ lightPosition }) => {
  const { nodes } = useGLTF("/models/skully.glb");

  const skullMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          u_threshold: {
            value: 1.0,
          },
          u_lightSource: {
            value: new Vector3(...lightPosition),
          },
        },
        ...skullData,
      }),
    [lightPosition]
  );

  return (
    <mesh
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      geometry={nodes.Skull.geometry}
      material={skullMaterial}
      rotation={[degToRad(90), 0, degToRad(-90)]}
    />
  );
};

export default SkullyMesh;
