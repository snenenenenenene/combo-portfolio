import { useGLTF, useKTX2 } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Bloom } from "@react-three/postprocessing";
import { useState } from "react";
import {
  Color,
  DoubleSide,
  FrontSide,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  TextureLoader,
  sRGBEncoding,
} from "three";

export const Model = (props: any) => {
  const { nodes }: any = useGLTF("/threeD/ramen.glb");

  // non-glowing lights
  const greenSignMaterial = new MeshBasicMaterial({
    color: new Color("#1EFF51"),
  });
  const whiteSignMaterial = new MeshBasicMaterial({
    color: new Color("#FFFFFF"),
  });
  const redLedMaterial = new MeshBasicMaterial({
    color: new Color("#FF112B"),
  });
  const neonYellowMaterial = new MeshBasicMaterial({
    color: new Color("#FFF668"),
  });
  const neonPinkMaterial = new MeshBasicMaterial({
    color: new Color("#FF3DCB"),
  });
  const neonBlueMaterial = new MeshBasicMaterial({
    color: new Color("#00BBFF"),
  });
  const neonGreenMaterial = new MeshBasicMaterial({
    color: new Color("#56FF54"),
  });

  const [
    ramenShopTexture,
    machinesTexture,
    bigScreenTexture,
    // floorTexture,
    miscTexture,
    easelTouchTexture,
    graphicsTexture,
    dishMatcapTexture,
    fanMatcapTexture,
    neonBlueMatcapTexture,
    neonGreenMatcapTexture,
    arcadeScreenTexture,
    vendingMachineDefaultTexture,
    // ABOUT ME SCREENS

    bigScreenAboutMeTexture,
    bigScreenSkillsTexture,
    bigScreenExperienceTexture,
    bigScreenAboutMeMobileTexture,

    // PROJECTS

    vendingMachineMenuTexture,
    project1Texture,
    project2Texture,
    project3Texture,
    project4Texture,
    project5Texture,
    project6Texture,
    project7Texture,
    project8Texture,

    // SIDE SCREEN

    sideScreen1Texture,
    sideScreen2Texture,
    sideScreen3Texture,
  ] = useKTX2([
    "assets/static/textures/baked/ramenShopBaked1024.ktx2",
    "assets/static/textures/baked/machinesBaked1024.ktx2",
    "assets/static/textures/screens/aboutMeScreens/bigScreenDefault.ktx2",
    // "assets/static/textures/baked/vloer.ktx2",
    "assets/static/textures/baked/miscBaked1024.ktx2",
    "assets/static/textures/screens/easel/easelTouch.ktx2",
    "assets/static/textures/baked/graphicsBaked512.ktx2",
    "assets/static/textures/matcaps/dishMatCap.ktx2",
    "assets/static/textures/matcaps/fanMatCap.ktx2",
    "assets/static/textures/matcaps/neonBlueMatCap.ktx2",
    "assets/static/textures/matcaps/neonGreenMatCap.ktx2",
    "assets/static/textures/screens/arcadeScreens/arcadeScreenDefault.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/vendingMachineDefault.ktx2",

    // ABOUT ME SCREENS
    "assets/static/textures/screens/aboutMeScreens/aboutMe.ktx2",
    "assets/static/textures/screens/aboutMeScreens/bigScreenSkills.ktx2",
    "assets/static/textures/screens/aboutMeScreens/bigScreenExperience.ktx2",
    "assets/static/textures/screens/aboutMeScreens/bigScreenAboutMobile.ktx2",
    "assets/static/textures/screens/aboutMeScreens/bigScreenSkillsMobile.ktx2",

    // PROJECTS

    "assets/static/textures/screens/vendingMachineScreens/vendingMachineMenu.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project1.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project2.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project3.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project4.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project5.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project6.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project7.ktx2",
    "assets/static/textures/screens/vendingMachineScreens/project8.ktx2",

    // SIDE SCREEN

    "assets/static/textures/screens/sideScreens/sideScreen1.ktx2",
    "assets/static/textures/screens/sideScreens/sideScreen2.ktx2",
    "assets/static/textures/screens/sideScreens/sideScreen3.ktx2",
  ]);

  const ramenShopMaterial = new MeshBasicMaterial({
    map: ramenShopTexture,
  });

  const machinesMaterial = new MeshBasicMaterial({
    map: machinesTexture,
  });

  const floorTexture = useLoader(
    TextureLoader,
    "assets/static/textures/baked/floor.png"
  );

  floorTexture.encoding = sRGBEncoding;
  floorTexture.flipY = false;

  const miscMaterial = new MeshBasicMaterial({
    map: miscTexture,
  });

  const easelTouchMaterial = new MeshBasicMaterial({
    map: easelTouchTexture,
  });
  const graphicsMaterial = new MeshBasicMaterial({
    map: graphicsTexture,
  });

  const dishMatcapMaterial = new MeshMatcapMaterial({
    matcap: dishMatcapTexture,
    side: DoubleSide,
  });

  const fanMatcapMaterial = new MeshMatcapMaterial({
    matcap: fanMatcapTexture,
  });

  const lightMatcapTexture = useLoader(
    TextureLoader,
    "assets/static/textures/matcaps/lightMatCap.png"
  );

  const lightMatcapMaterial = new MeshMatcapMaterial({
    matcap: lightMatcapTexture,
  });

  const bigScreenAboutMeMaterial = new MeshBasicMaterial({
    map: bigScreenAboutMeTexture,
  });

  const arcadeScreenMaterial = new MeshBasicMaterial({
    map: arcadeScreenTexture,
  });

  const [littleTVScreenVideoTexture] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/eu4.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const [smallScreen3VideoTexture] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/eu4.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const [fifa] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/fifa.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const [smallScreen5VideoTexture] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/eu4.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const [tallScreenVideoTexture] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/minecraft_tall.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const [tvScreenVideoTexture] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/eu4.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <group
      position={[-1.5, -2, 0]}
      rotation={[0, -Math.PI / 1.4, 0]}
      {...props}
      dispose={null}
    >
      {/* BLOOm */}
      <Bloom
        kernelSize={3}
        luminanceThreshold={0}
        luminanceSmoothing={0.4}
        intensity={0.6}
      />
      <mesh
        geometry={nodes.graphicsJoined.geometry}
        material={graphicsMaterial}
        position={[1.14, 1.89, 2.29]}
        scale={0.85}
      />

      <mesh
        geometry={nodes.machinesJoined.geometry}
        material={machinesMaterial}
        position={[1.04, 8.61, 0.16]}
      />
      <mesh
        geometry={nodes.ramenShopJoined.geometry}
        material={ramenShopMaterial}
        position={[-2.66, 7.05, -3.23]}
      />
      <mesh
        geometry={nodes.miscJoined.geometry}
        material={miscMaterial}
        position={[-0.74, 4.55, -6.13]}
      />
      <mesh
        geometry={nodes.easelFrontGraphic.geometry}
        material={easelTouchMaterial}
        position={[-2.5, 1.69, 2.13]}
        rotation={[-2.65, -1.09, -2.7]}
      />
      <mesh
        geometry={nodes.chinese.geometry}
        material={greenSignMaterial}
        position={[-1.57, 2.39, -2.41]}
      />
      <mesh
        geometry={nodes.neonPink.geometry}
        material={neonPinkMaterial}
        position={[-2.18, 4.62, -0.95]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.neonYellow.geometry}
        // material={nodes.neonYellow.material}
        material={neonYellowMaterial}
        position={[-2.04, 6.05, 0.21]}
        rotation={[0.24, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.neonBlue.geometry}
        material={neonBlueMaterial}
        position={[-2.65, 5.27, -3.23]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      <mesh
        geometry={nodes.neonGreen.geometry}
        material={neonGreenMaterial}
        position={[-2.64, 5.29, -3.13]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.storageLight.geometry}
        material={neonBlueMaterial}
        position={[1.27, 5.25, -1.57]}
      />
      <mesh
        geometry={nodes.portalLight.geometry}
        material={neonBlueMaterial}
        position={[-0.13, 5.47, -0.92]}
      />
      <mesh
        // ref={aboutMeScreenRef}
        geometry={nodes.bigScreen.geometry}
        position={[0.53, 6.82, 0.32]}
        material={bigScreenAboutMeMaterial}
        // material={bigScreenMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {/* <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[tvScreenVideoTexture]} />
          <videoTexture attach="emissiveMap" args={[tvScreenVideoTexture]} />
        </meshStandardMaterial> */}
      </mesh>
      <mesh
        geometry={nodes.smallScreen1.geometry}
        material={nodes.smallScreen1.material}
        position={[0.63, 5.12, 1.03]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.smallScreen2.geometry}
        material={nodes.smallScreen2.material}
        position={[-0.33, 5.12, 1.03]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.smallScreen3.geometry}
        material={nodes.smallScreen3.material}
        position={[-1.28, 5.12, 1.03]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[smallScreen3VideoTexture]} />
          <videoTexture
            attach="emissiveMap"
            args={[smallScreen3VideoTexture]}
          />
        </meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.smallScreen4.geometry}
        material={nodes.smallScreen4.material}
        position={[-1.28, 6.08, 1.03]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[fifa]} />
          <videoTexture attach="emissiveMap" args={[fifa]} />
        </meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.tallScreen.geometry}
        material={nodes.tallScreen.material}
        position={[-1.28, 7.31, 1.03]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[tallScreenVideoTexture]} />
          <videoTexture attach="emissiveMap" args={[tallScreenVideoTexture]} />
        </meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.smallScreen5.geometry}
        material={nodes.smallScreen5.material}
        position={[-1.28, 8.56, 1.03]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[smallScreen5VideoTexture]} />
          <videoTexture
            attach="emissiveMap"
            args={[smallScreen5VideoTexture]}
          />
        </meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.sideScreen.geometry}
        material={nodes.sideScreen.material}
        position={[0.03, 4.07, 1.42]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      ></mesh>
      <mesh
        geometry={nodes.tvScreen.geometry}
        position={[-1.4, 6.29, -1.84]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[tvScreenVideoTexture]} />
          <videoTexture attach="emissiveMap" args={[tvScreenVideoTexture]} />
        </meshStandardMaterial>
      </mesh>
      <mesh
        geometry={nodes.littleTVScreen.geometry}
        position={[-1.64, 5.29, -2.17]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial emissive={"#00ff00"} side={FrontSide}>
          <videoTexture attach="map" args={[littleTVScreenVideoTexture]} />
          <videoTexture
            attach="emissiveMap"
            args={[littleTVScreenVideoTexture]}
          />
        </meshStandardMaterial>
      </mesh>
      <pointLight intensity={1} position={[-20.13, 3.4, -5]} />

      <mesh
        geometry={nodes.vendingMachineLight.geometry}
        material={whiteSignMaterial}
        position={[1.14, 1.89, 2.29]}
        scale={0.85}
      />
      <mesh
        geometry={nodes.arcadeRim.geometry}
        material={neonBlueMaterial}
        position={[-0.57, 0.17, 2]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.arcadeToken.geometry}
        material={redLedMaterial}
        position={[-0.54, 0.58, 2.53]}
      />

      <mesh
        geometry={nodes.arcadeScreen.geometry}
        material={arcadeScreenMaterial}
        position={[-0.65, 2.1, 2.89]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.dish.geometry}
        material={dishMatcapMaterial}
        position={[1.82, 5.09, 1.12]}
        rotation={[Math.PI, -0.95, Math.PI]}
      />
      <mesh
        geometry={nodes.dishStand.geometry}
        material={dishMatcapMaterial}
        position={[1.56, 4.81, 0.88]}
        rotation={[Math.PI, -0.95, Math.PI]}
      />
      <mesh
        geometry={nodes.fan1.geometry}
        material={fanMatcapMaterial}
        position={[1.5, 3.75, -3.56]}
        rotation={[Math.PI / 2, 0.67, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.fan2.geometry}
        material={fanMatcapMaterial}
        position={[0.32, 3.75, -3.56]}
        rotation={[Math.PI / 2, 0.67, -Math.PI / 2]}
      />
    </group>
  );
};

useGLTF.preload("/threeD/ramen.glb");
