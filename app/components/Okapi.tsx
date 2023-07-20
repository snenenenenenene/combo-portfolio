"use client";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "react-three-fiber";

export function Okapi(props: any) {
  const [yRotation, setYRotation] = useState(-Math.PI / 4);

  useFrame(() => {
    setYRotation(yRotation + 0.001);
  });

  const { nodes, materials }: any = useGLTF("/threeD/okapi.gltf");
  return (
    <group {...props} dispose={null} scale={1} rotation={[0, yRotation, 0]}>
      <group
        position={[0, 7.966, -1.901]}
        rotation={[1.359, 0, 0]}
        scale={4.03}
      >
        <primitive object={nodes.lowerspine} />
        <primitive object={nodes.hipl} />
        <primitive object={nodes.hipr} />
        <skinnedMesh
          geometry={nodes.Cube.geometry}
          material={materials.Fur}
          skeleton={nodes.Cube.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube_1.geometry}
          material={materials.Eyes}
          skeleton={nodes.Cube_1.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/threeD/okapi.gltf");
