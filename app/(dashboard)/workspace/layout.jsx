import SideNav from "@/navigation/SideNav";

export default function WorkspaceLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}