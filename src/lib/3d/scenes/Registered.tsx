import { Text3D } from "@react-three/drei";
import { FC } from "react";

const Registered: FC = () => (
  <Text3D font={"/fonts/text.json"} scale={0.07} position={[-0.07, -0.2, 0]}>
    ®
    <meshStandardMaterial color="#555555" />
  </Text3D>
);

export default Registered;
