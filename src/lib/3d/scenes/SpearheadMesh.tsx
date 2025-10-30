import { useGLTF } from "@react-three/drei";

const SpearheadMesh = () => {
  const { nodes, materials } = useGLTF("/models/spearhead.glb");
  return (
    <group dispose={null} position={[-0.03, 0.07, 0]}>
      <mesh
        // @ts-ignore
        geometry={nodes.Spearhead.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
        position={[0, 0, 0.2]}
      />
      <mesh
        // @ts-ignore
        geometry={nodes.Rim.geometry}
        material={materials.whiteRim}
        position={[0, -0.085, 0.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.088888888}
      />
      <mesh
        // @ts-ignore
        geometry={nodes.Text.geometry}
        material={materials.whiteRim}
        position={[-0.06, -0.06, 0.215]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      />
    </group>
  );
};
export default SpearheadMesh;
