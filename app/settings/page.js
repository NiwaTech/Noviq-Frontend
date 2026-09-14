// app/settings/page.js
import DashboardLayout from "../src/screens/DashboardLayout";
import Settings from "../src/screens/Settings"; // Import your full Settings component

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <Settings />
    </DashboardLayout>
  );
}