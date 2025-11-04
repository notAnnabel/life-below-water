import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect } from "react";
import { s } from "lifebelowwater";
import p5 from "p5";

export function meta({}: Route.MetaArgs) {
  useEffect(() => {
     const myP5 = new p5(s);
  },[])
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
