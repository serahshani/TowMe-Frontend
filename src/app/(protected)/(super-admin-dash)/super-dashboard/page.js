"use client"

import { DashboardLayout } from "../../../components/super-dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Truck, Users, AlertTriangle, CheckCircle, Clock, DollarSign, TrendingUp, MapPin } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Mock data for charts
const weeklyServiceData = [
  { day: "Mon", services: 12, revenue: 2400 },
  { day: "Tue", services: 19, revenue: 3800 },
  { day: "Wed", services: 15, revenue: 3000 },
  { day: "Thu", services: 22, revenue: 4400 },
  { day: "Fri", services: 28, revenue: 5600 },
  { day: "Sat", services: 35, revenue: 7000 },
  { day: "Sun", services: 18, revenue: 3600 },
]

const serviceTypeData = [
  { name: "Emergency Tow", value: 45, color: "#f87171" },
  { name: "Roadside Assist", value: 30, color: "#34d399" },
  { name: "Vehicle Recovery", value: 15, color: "#fbbf24" },
  { name: "Jump Start", value: 10, color: "#60a5fa" },
]

const requestSerice = [
  {
    id: "SR-001",
    type: "Emergency Tow",
    location: "Highway 101, Mile 45",
    time: "2 min ago",
    priority: "high",
  },
  {
    id: "SR-002",
    type: "Jump Start",
    location: "Downtown Mall Parking",
    time: "8 min ago",
    priority: "medium",
  },
  {
    id: "SR-003",
    type: "Roadside Assist",
    location: "Oak Street & 5th Ave",
    time: "15 min ago",
    priority: "low",
  },
  {
    id: "SR-004",
    type: "Vehicle Recovery",
    location: "Industrial District",
    time: "23 min ago",
    priority: "high",
  }
]
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
            <p className="text-muted-foreground">Monitor your towing operations in real-time</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              All Systems Operational
            </Badge>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500">+3</span> from last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Drivers</CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12/18</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">67%</span> availability rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fleet Status</CardTitle>
              <Truck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/20</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-500">75%</span> vehicles active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,250</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+12%</span> from yesterday
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Services Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Service Volume</CardTitle>
              <CardDescription>Services completed and revenue generated</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyServiceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="services" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Service Types Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Service Type Distribution</CardTitle>
              <CardDescription>Breakdown of service requests by type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {serviceTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Urgent Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Service Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Service Requests</CardTitle>
              <CardDescription>Latest incoming requests requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requestSerice.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${request.priority === "high"
                          ? "bg-red-500"
                          : request.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                          }`}
                      />
                      <div>
                        <p className="font-medium">
                          {request.id} - {request.type}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {request.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{request.time}</p>
                      <Button size="sm" variant="outline">
                        Assign
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Important notifications and system status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Vehicle Maintenance Due</p>
                    <p className="text-sm text-red-600">Truck #TW-007 requires scheduled maintenance</p>
                    <p className="text-xs text-red-500 mt-1">Due: Today</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Driver Shift Ending</p>
                    <p className="text-sm text-yellow-600">John Smith's shift ends in 30 minutes</p>
                    <p className="text-xs text-yellow-500 mt-1">Replacement needed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Performance Update</p>
                    <p className="text-sm text-blue-600">Response time improved by 15% this week</p>
                    <p className="text-xs text-blue-500 mt-1">Great job team!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">System Backup Complete</p>
                    <p className="text-sm text-green-600">Daily backup completed successfully</p>
                    <p className="text-xs text-green-500 mt-1">All data secured</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout >
  )
}

