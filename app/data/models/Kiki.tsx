"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 kiki.gltf --transform -t -s
*/

import { useGLTF } from "@react-three/drei";
import { JSX } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh;
    Sphere: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
  };
};

export function Kiki(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/kiki-transformed.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={materials.PaletteMaterial001}
        rotation={[-Math.PI / 2, 0.073, Math.PI / 2]}
        scale={[0.29, 0.829, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.PaletteMaterial002}
        position={[0.51, 5.43, -0.541]}
        rotation={[0, 0.333, 0.677]}
        scale={[0.206, 0.403, 0.403]}
      />
    </group>
  );
}

useGLTF.preload("/models/kiki-transformed.glb");
