"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Truck, Settings, LayoutDashboard } from "lucide-react";
import { useAuth } from "../../app/auth/context/AuthContext"; // assuming you store user role here

// Sidebar menus per role
const menuConfig = {
  company: [
    { name: "Dashboard", href: "/dashboard/company", icon: LayoutDashboard },
    { name: "Towing Requests", href: "/dashboard/company/requests", icon: Truck },
    { name: "Operators", href: "/dashboard/company/operators", icon: Users },
    { name: "Settings", href: "/dashboard/company/settings", icon: Settings },
  ],
  user: [
    { name: "Dashboard", href: "/dashboard/user", icon: LayoutDashboard },
    { name: "My Requests", href: "/dashboard/user/requests", icon: Truck },
    { name: "Profile", href: "/dashboard/user/profile", icon: Users },
    { name: "Settings", href: "/dashboard/user/settings", icon: Settings },
  ],
  operator: [
    { name: "Dashboard", href: "/dashboard/operator", icon: LayoutDashboard },
    { name: "Assigned Jobs", href: "/dashboard/operator/jobs", icon: Truck },
    { name: "Profile", href: "/dashboard/operator/profile", icon: Users },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth(); // your AuthContext should provide user role
  const role = user?.role || "user"; // default role as "user"

  const menuItems = menuConfig[role] || [];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        🚗 {role === "company" ? "Towing Admin" : role === "operator" ? "Operator Panel" : "User Panel"}
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
