'use client'
import { useState } from "react";
import DesktopSideNav from "@/nativigation/DesktopSideNav";
import Container from "@/screens/Dashboard/Container";

export default function Dashboard() {
   const [content, setContent] = useState("dashboard");

   return (
      <div className="flex min-h-screen">
         <DesktopSideNav onSelect={setContent} />
         <Container content={content} />
      </div>
   );
}