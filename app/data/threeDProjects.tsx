"use client";

import { Kiki } from "./models/Kiki";
export const threeDProjects: {
  id: number;
  name: string;
  source?: string;
  technologies: any;
  description: string;
  images: string[];
  link?: string;
  models?: any;
}[] = [
  // {
  //   id: 1,
  //   name: "House",
  //   technologies: {
  //     blender: true,
  //     proceduralGeneration: true,
  //   },
  //   description: "Asset made for Principles of Game Design Class",
  //   images: ["/threeD/house.png"],
  // },
  // {
  //   id: 2,
  //   name: "Laptop",
  //   technologies: {
  //     blender: true,
  //   },
  //   description: "Asset made for Visual Design Class",
  //   images: ["/threeD/laptop.png"],
  // },
  // {
  //   id: 3,
  //   name: "pangolin",
  //   technologies: {
  //     blender: true,
  //   },
  //   description: "",
  //   images: ["/threeD/pangolin.png"],
  // },
  // {
  //   id: 4,
  //   name: "room",
  //   technologies: {
  //     blender: true,
  //   },
  //   description: "",
  //   images: ["/threeD/room.png"],
  // },
  // {
  //   id: 5,
  //   name: "velociraptor",
  //   technologies: {
  //     blender: true,
  //     proceduralGeneration: true,
  //   },
  //   description: "",
  //   images: ["/threeD/velociraptor.png"],
  // },
  {
    id: 6,
    name: "Kiki",
    technologies: {
      blender: true,
    },
    description: "",
    images: ["/threeD/kiki.png"],
    models: [<Kiki key={"kiki"} />],
  },
  {
    id: 7,
    name: "Procedural Voxel Terrain",
    link: "https://github.com/snenenenenenene/unity-procedural-terrain",
    technologies: {
      unity: true,
      cSharp: true,
      proceduralGeneration: true,
    },
    images: ["/games/voxel.png"],
    description: "A voxel terrain generator made in Unity",
  },
  {
    id: 8,
    name: "Animals",
    technologies: {
      blender: true,
    },
    description: "",
    images: ["/threeD/animals.png"],
  },
];
