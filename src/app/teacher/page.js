"use client";
import { useState } from "react";
import {
  Bell,
  BookOpen,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function EducatorDashboard() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-purple-700">EduTrack</h1>
        </div>
        <nav className="mt-6">
          {[
            { name: "Dashboard", icon: LayoutDashboard },
            { name: "Analytics", icon: LineChart },
            { name: "Students", icon: Users },
            { name: "Courses", icon: BookOpen },
            { name: "Messages", icon: MessageSquare },
          ].map((item) => (
            <button
              key={item.name}
              className={`flex items-center w-full px-4 py-2 text-left ${
                selectedTab === item.name.toLowerCase()
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedTab(item.name.toLowerCase())}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Educator Dashboard
          </h2>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="text-black">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Educator"
              />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Analytics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                At-Risk Students
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
              <Progress value={15} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Attendance
              </CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">
                -2% from last month
              </p>
              <Progress value={89} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Intervention Success Rate
              </CardTitle>
              <LineChart className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72%</div>
              <p className="text-xs text-muted-foreground">
                +5% from last quarter
              </p>
              <Progress value={72} className="mt-2" />
            </CardContent>
          </Card>
        </section>

        {/* Student List Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>At-Risk Students</CardTitle>
            <CardDescription>
              Students who may need additional support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Alice Johnson",
                  risk: "High",
                  attendance: "65%",
                  performance: "C-",
                },
                {
                  name: "Bob Smith",
                  risk: "Medium",
                  attendance: "78%",
                  performance: "C",
                },
                {
                  name: "Charlie Brown",
                  risk: "Low",
                  attendance: "85%",
                  performance: "B-",
                },
              ].map((student) => (
                <div
                  key={student.name}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt={student.name}
                      />
                      <AvatarFallback>
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-500">
                        Attendance: {student.attendance}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                      variant={
                        student.risk === "High"
                          ? "destructive"
                          : student.risk === "Medium"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {student.risk} Risk
                    </Badge>
                    <Button
                      size="sm"
                      className="bg-purple-600 text-white hover:bg-purple-700"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Intervention Tools Section */}
        <Card>
          <CardHeader>
            <CardTitle>Intervention Tools</CardTitle>
            <CardDescription>
              Quick actions to support at-risk students
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button className="w-full justify-start bg-purple-600 text-white hover:bg-purple-700">
              <MessageSquare className="mr-2 h-4 w-4" /> Message Student
            </Button>
            <Button className="w-full justify-start bg-purple-600 text-white hover:bg-purple-700">
              <Users className="mr-2 h-4 w-4" /> Schedule Meeting
            </Button>
            <Button className="w-full justify-start bg-purple-600 text-white hover:bg-purple-700">
              <BookOpen className="mr-2 h-4 w-4" /> Assign Extra Resources
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
