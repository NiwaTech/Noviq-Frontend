'use client'
import { useState } from "react";
import DesktopSideNav from "@/navigation/DesktopSideNav";
import Container from "@/Layouts/DashboardWrapper/Container";

export default function Dashboard() {
   const [content, setContent] = useState("dashboard");

   return (
      <div className="flex min-h-screen">
         <DesktopSideNav onSelect={setContent} />
         <Container content={content} />
      </div>
   );
}