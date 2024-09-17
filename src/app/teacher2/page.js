"use client";
import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  Filter,
  Home,
  MessageSquare,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  ChartTooltip,
  Legend
);

const EducatorDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Mock data for the charts
  const dropoutRiskData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "High Risk",
        data: [12, 19, 13, 15, 12, 13],
        backgroundColor: "rgba(239, 68, 68, 0.5)",
      },
      {
        label: "Medium Risk",
        data: [20, 25, 18, 22, 20, 23],
        backgroundColor: "rgba(245, 158, 11, 0.5)",
      },
      {
        label: "Low Risk",
        data: [40, 35, 43, 38, 41, 39],
        backgroundColor: "rgba(16, 185, 129, 0.5)",
      },
    ],
  };

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance Rate",
        data: [95, 88, 92, 96, 90],
        borderColor: "rgb(59, 130, 246)",
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">EduTrack</h2>
        </div>
        <nav className="mt-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Dashboard
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Overview of student data and analytics</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Students
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Manage and view student profiles</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Courses
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Manage and view course information</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>View and manage your schedule</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Messages
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Communicate with students and parents</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Educator Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="Educator avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium text-gray-700">Jane Doe</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Attendance
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">
                -1% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                At-Risk Students
              </CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">57</div>
              <p className="text-xs text-muted-foreground">+5 from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Dropout Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Bar data={dropoutRiskData} options={chartOptions} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={attendanceData} options={chartOptions} />
            </CardContent>
          </Card>
        </div>

        {/* Intervention Tools */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Schedule Meeting</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Set up a meeting with students or parents</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Send Alert</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notify students or parents about important updates</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Create Action Plan</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Develop a strategy for at-risk students</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Generate Report</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Create a detailed report on student performance</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>

        {/* Student List */}
        <Card>
          <CardHeader>
            <CardTitle>Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <Input
                  placeholder="Search students..."
                  className="w-full md:w-64"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <Search className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Search for students</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <Select
                  value={selectedFilter}
                  onValueChange={setSelectedFilter}
                >
                  <option value="All">All Students</option>
                  <option value="HighRisk">High Risk</option>
                  <option value="MediumRisk">Medium Risk</option>
                  <option value="LowRisk">Low Risk</option>
                </Select>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter student list</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Alice Johnson</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                        High Risk
                      </span>
                    </TableCell>
                    <TableCell>75%</TableCell>
                    <TableCell>C-</TableCell>
                    <TableCell>
                      <Button size="sm">View Profile</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Smith</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Medium Risk
                      </span>
                    </TableCell>
                    <TableCell>85%</TableCell>
                    <TableCell>B</TableCell>
                    <TableCell>
                      <Button size="sm">View Profile</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Charlie Brown</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Low Risk
                      </span>
                    </TableCell>
                    <TableCell>95%</TableCell>
                    <TableCell>A-</TableCell>
                    <TableCell>
                      <Button size="sm">View Profile</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EducatorDashboard;
