"use client"


import { useState } from "react"
import { useRouter } from "next/navigation"
// import { Button } from "../components/ui/button"
import { Truck, Users, Settings, BarChart3, UserCheck, LogOut, Menu, X, Home, Phone } from "lucide-react"
import { Button } from "./ui/button"

export function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userRole")
    router.push("/login")
  }

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, current: false },
    { name: "Service Requests", href: "/dashboard/requests", icon: Phone, current: false },
    { name: "Driver Management", href: "/dashboard/drivers", icon: Users, current: false },
    { name: "Fleet Management", href: "/dashboard/fleet", icon: Truck, current: false },
    { name: "Customer Management", href: "/dashboard/customers", icon: UserCheck, current: false },
    { name: "Reports", href: "/dashboard/reports", icon: BarChart3, current: false },
    { name: "Settings", href: "/dashboard/settings", icon: Settings, current: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border">
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className="flex items-center space-x-2">
              <div className="bg-sidebar-primary p-2 rounded-lg">
                <Truck className="h-5 w-5 text-sidebar-primary-foreground" />
              </div>
              <span className="font-bold text-sidebar-foreground">TowPro Admin</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.current ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  router.push(item.href)
                  setSidebarOpen(false)
                }}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:bg-sidebar lg:border-r lg:border-sidebar-border lg:block">
        <div className="flex items-center space-x-2 p-4 border-b border-sidebar-border">
          <div className="bg-sidebar-primary p-2 rounded-lg">
            <Truck className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <span className="font-bold text-sidebar-foreground">TowPro Admin</span>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={item.current ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => router.push(item.href)}
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.name}
            </Button>
          ))}
        </nav>

        {/* User section at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="space-y-2">
            <div className="text-sm text-sidebar-foreground">
              <p className="font-medium">Super Admin</p>
              <p className="text-xs text-muted-foreground">admin@towingservice.com</p>
            </div>
            <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-card">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-1.5 rounded">
              <Truck className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">TowPro</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

