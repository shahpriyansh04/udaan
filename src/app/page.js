"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpenIcon,
  TrophyIcon,
  MessageCircleIcon,
  CalendarIcon,
  MapIcon,
  BrainIcon,
  RobotIcon,
  ClockIcon,
  BadgeCheckIcon,
  UserIcon,
  PhoneIcon,
  BarChartIcon,
  PieChartIcon,
  LineChartIcon,
  X,
  Globe,
} from "lucide-react";

export default function EnhancedStudentDashboard() {
  const [isHindi, setIsHindi] = useState(false);

  const translations = {
    en: {
      welcome: "Namaste, Aarav!",
      classInfo: "Class XII - Science Stream",
      chatWithTutor: "Chat with AI Tutor",
      goals: "Today's Goals",
      completePhysics: "Complete Physics Numericals",
      overview: "Overview",
      academics: "Academics",
      vivaPrep: "Viva Prep",
      roadmap: "Roadmap",
      schedule: "Schedule",
      attendance: "Attendance",
      badges: "Badges",
      aiTherapist: "AI Therapist",
      todaysGoals: "Today's Goals",
      upcomingClasses: "Upcoming Classes",
      quickActions: "Quick Actions",
      studyStreak: "Study Streak",
      daysInARow: "Days in a row",
      moreDaysToBeatRecord: "3 more days to beat your record!",
      subjectPerformance: "Subject Performance",
      recentTestScores: "Recent Test Scores",
      academicProgress: "Academic Progress Over Time",
      vivaPreparation: "Viva Preparation",
      vivaPerformanceAnalysis: "Viva Performance Analysis",
      confidenceLevel: "Confidence Level",
      responseAccuracy: "Response Accuracy",
      subjectCoverage: "Subject Coverage",
      learningRoadmap: "Your Learning Roadmap",
      weeklySchedule: "Weekly Schedule",
      attendanceOverview: "Attendance Overview",
      monthlyAttendanceTrend: "Monthly Attendance Trend",
      attendanceInsights: "Attendance Insights",
      academicBadges: "Academic Badges",
      aiTherapistSessions: "AI Therapist Sessions",
      nextSession: "Next Session",
      recentTopics: "Recent Topics",
      moodTracker: "Mood Tracker",
      startLesson: "Start Lesson",
      takeQuiz: "Take Quiz",
      scheduleTutor: "Schedule Tutor",
      viewRoadmap: "View Roadmap",
      planNextWeek: "Plan Next Week",
      viewAllBadges: "View All Badges",
      scheduleNewSession: "Schedule New Session",
      examStressManagement: "Exam Stress Management",
      timeManagementTechniques: "Time Management Techniques",
      buildingSelfConfidence: "Building Self-Confidence",
      physicsLab: "Physics Lab",
      chemistryLecture: "Chemistry Lecture",
      mathsDoubtClearing: "Maths Doubt Clearing Session",
      physicsMidTerm: "Physics Mid-Term",
      chemistryQuiz: "Chemistry Quiz",
      mathematicsAssignment: "Mathematics Assignment",
      englishEssay: "English Essay",
      masterNewtonianMechanics: "Master Newtonian Mechanics",
      completeOrganicChemistry: "Complete Organic Chemistry",
      conquerCalculus: "Conquer Calculus",
      maintainedAttendance:
        "You've maintained 100% attendance in Mathematics this month!",
      improvedAttendance:
        "Your Physics attendance has improved by 5% compared to last month.",
      missedClasses:
        "You've missed 2 Chemistry classes this week. Consider catching up!",
    },
    hi: {
      welcome: "नमस्ते, आरव!",
      classInfo: "कक्षा बारहवीं - विज्ञान शाखा",
      chatWithTutor: "एआई ट्यूटर से बात करें",
      goals: "आज के लक्ष्य",
      completePhysics: "भौतिकी के संख्यात्मक प्रश्न पूरे करें",
      overview: "सारांश",
      academics: "अकादमिक",
      vivaPrep: "वाइवा तैयारी",
      roadmap: "रोडमैप",
      schedule: "अनुसूची",
      attendance: "उपस्थिति",
      badges: "बैज",
      aiTherapist: "एआई थेरेपिस्ट",
      todaysGoals: "आज के लक्ष्य",
      upcomingClasses: "आगामी कक्षाएं",
      quickActions: "त्वरित क्रियाएँ",
      studyStreak: "अध्ययन की लकीर",
      daysInARow: "लगातार दिन",
      moreDaysToBeatRecord: "आपका रिकॉर्ड तोड़ने के लिए 3 और दिन!",
      subjectPerformance: "विषय प्रदर्शन",
      recentTestScores: "हाल के टेस्ट स्कोर",
      academicProgress: "समय के साथ शैक्षणिक प्रगति",
      vivaPreparation: "वाइवा तैयारी",
      vivaPerformanceAnalysis: "वाइवा प्रदर्शन विश्लेषण",
      confidenceLevel: "आत्मविश्वास स्तर",
      responseAccuracy: "प्रतिक्रिया सटीकता",
      subjectCoverage: "विषय कवरेज",
      learningRoadmap: "आपका लर्निंग रोडमैप",
      weeklySchedule: "साप्ताहिक अनुसूची",
      attendanceOverview: "उपस्थिति अवलोकन",
      monthlyAttendanceTrend: "मासिक उपस्थिति प्रवृत्ति",
      attendanceInsights: "उपस्थिति अंतर्दृष्टि",
      academicBadges: "शैक्षणिक बैज",
      aiTherapistSessions: "एआई थेरेपिस्ट सत्र",
      nextSession: "अगला सत्र",
      recentTopics: "हाल के विषय",
      moodTracker: "मूड ट्रैकर",
      startLesson: "पाठ शुरू करें",
      takeQuiz: "क्विज़ लें",
      scheduleTutor: "ट्यूटर अनुसूची",
      viewRoadmap: "रोडमैप देखें",
      planNextWeek: "अगले सप्ताह की योजना बनाएं",
      viewAllBadges: "सभी बैज देखें",
      scheduleNewSession: "नया सत्र अनुसूची",
      examStressManagement: "परीक्षा तनाव प्रबंधन",
      timeManagementTechniques: "समय प्रबंधन तकनीक",
      buildingSelfConfidence: "आत्मविश्वास निर्माण",
      physicsLab: "भौतिकी प्रयोगशाला",
      chemistryLecture: "रसायन विज्ञान व्याख्यान",
      mathsDoubtClearing: "गणित संदेह निवारण सत्र",
      physicsMidTerm: "भौतिकी मध्यावधि",
      chemistryQuiz: "रसायन विज्ञान क्विज़",
      mathematicsAssignment: "गणित असाइनमेंट",
      englishEssay: "अंग्रेजी निबंध",
      masterNewtonianMechanics: "न्यूटोनियन यांत्रिकी में महारत हासिल करें",
      completeOrganicChemistry: "कार्बनिक रसायन विज्ञान पूरा करें",
      conquerCalculus: "कैलकुलस पर विजय प्राप्त करें",
      maintainedAttendance: "आपने इस महीने गणित में 100% उपस्थिति बनाए रखी है!",
      improvedAttendance:
        "पिछले महीने की तुलना में आपकी भौतिकी उपस्थिति में 5% सुधार हुआ है।",
      missedClasses:
        "आपने इस सप्ताह 2 रसायन विज्ञान कक्षाएं छोड़ दी हैं। पकड़ने पर विचार करें!",
    },
  };

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  const translate = (key) => {
    return isHindi ? translations.hi[key] : translations.en[key];
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {translate("welcome")}
          </h1>
          <p className="text-gray-600">{translate("classInfo")}</p>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={toggleLanguage}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Globe className="mr-2 h-4 w-4" />
            {isHindi ? "English" : "हिंदी"}
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <MessageCircleIcon className="mr-2 h-4 w-4" />
            {translate("chatWithTutor")}
          </Button>
        </div>
      </header>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-purple-100">
          {[
            "overview",
            "academics",
            "vivaPrep",
            "roadmap",
            "schedule",
            "attendance",
            "badges",
            "aiTherapist",
          ].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase().replace(" ", "")}
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              {translate(tab)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>{translate("todaysGoals")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 form-checkbox text-purple-600"
                    />
                    <span>{translate("completePhysics")}</span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 form-checkbox text-purple-600"
                    />
                    <span>Revise Chemistry Organic Compounds</span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 form-checkbox text-purple-600"
                    />
                    <span>Solve Maths Integration Problems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{translate("upcomingClasses")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>{translate("physicsLab")}</span>
                    <span className="text-sm text-gray-500">2:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>{translate("chemistryLecture")}</span>
                    <span className="text-sm text-gray-500">4:30 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>{translate("mathsDoubtClearing")}</span>
                    <span className="text-sm text-gray-500">
                      Tomorrow, 10:00 AM
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{translate("quickActions")}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                <Button className="flex flex-col items-center justify-center h-20 bg-purple-600 hover:bg-purple-700 text-white">
                  <BookOpenIcon className="mb-1 h-4 w-4" />
                  <span className="text-xs">{translate("startLesson")}</span>
                </Button>
                <Button className="flex flex-col items-center justify-center h-20 bg-purple-600 hover:bg-purple-700 text-white">
                  <TrophyIcon className="mb-1 h-4 w-4" />
                  <span className="text-xs">{translate("takeQuiz")}</span>
                </Button>
                <Button className="flex flex-col items-center justify-center h-20 bg-purple-600 hover:bg-purple-700 text-white">
                  <CalendarIcon className="mb-1 h-4 w-4" />
                  <span className="text-xs">{translate("scheduleTutor")}</span>
                </Button>
                <Button className="flex flex-col items-center justify-center h-20 bg-purple-600 hover:bg-purple-700 text-white">
                  <MapIcon className="mb-1 h-4 w-4" />
                  <span className="text-xs">{translate("viewRoadmap")}</span>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{translate("studyStreak")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <span className="text-4xl font-bold text-purple-600">7</span>
                  <p className="text-sm text-gray-600">
                    {translate("daysInARow")}
                  </p>
                </div>
                <Progress
                  value={70}
                  className="mt-4 h-2 bg-purple-200"
                  indicatorClassName="bg-purple-600"
                />
                <p className="mt-2 text-sm text-center text-gray-600">
                  {translate("moreDaysToBeatRecord")}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="academics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{translate("subjectPerformance")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Physics", "Chemistry", "Mathematics", "English"].map(
                    (subject) => (
                      <div key={subject}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {subject}
                          </span>
                          <span className="text-sm font-medium text-gray-700">
                            {Math.floor(Math.random() * 20) + 80}%
                          </span>
                        </div>
                        <Progress
                          value={Math.floor(Math.random() * 20) + 80}
                          className="h-2 bg-purple-200"
                          indicatorClassName="bg-purple-600"
                        />
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{translate("recentTestScores")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    translate("physicsMidTerm"),
                    translate("chemistryQuiz"),
                    translate("mathematicsAssignment"),
                    translate("englishEssay"),
                  ].map((test) => (
                    <li
                      key={test}
                      className="flex justify-between items-center"
                    >
                      <span>{test}</span>
                      <span className="font-semibold text-purple-600">
                        {Math.floor(Math.random() * 20) + 80}/100
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{translate("academicProgress")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-purple-100 rounded-md flex items-center justify-center">
                  <LineChartIcon className="h-24 w-24 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vivaprep" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Viva Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Physics", "Chemistry", "Mathematics"].map((subject) => (
                    <Button
                      key={subject}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <BrainIcon className="mr-2 h-4 w-4" /> Start {subject}{" "}
                      Viva Practice
                    </Button>
                  ))}
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <X className="mr-2 h-4 w-4" /> Practice with AI Examiner
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Viva Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Confidence Level</span>
                    <Progress
                      value={75}
                      className="w-1/2 h-2 bg-purple-200"
                      indicatorClassName="bg-purple-600"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Accuracy</span>
                    <Progress
                      value={85}
                      className="w-1/2 h-2 bg-purple-200"
                      indicatorClassName="bg-purple-600"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Subject Coverage</span>
                    <Progress
                      value={60}
                      className="w-1/2 h-2 bg-purple-200"
                      indicatorClassName="bg-purple-600"
                    />
                  </div>
                </div>
                <div className="mt-4 h-[150px] bg-purple-100 rounded-md flex items-center justify-center">
                  <PieChartIcon className="h-20 w-20 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3">
                    1
                  </div>
                  <span>Master Newtonian Mechanics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white mr-3">
                    2
                  </div>
                  <span>Complete Organic Chemistry</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-white mr-3">
                    3
                  </div>
                  <span>Conquer Calculus</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                Generate Detailed Roadmap
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div key={day} className="text-center">
                      <div className="font-medium">{day}</div>
                      <div className="mt-1 h-20 bg-purple-100 rounded-md flex items-center justify-center text-xs">
                        <ClockIcon className="h-4 w-4 text-purple-600 mr-1" />
                        4h
                      </div>
                    </div>
                  )
                )}
              </div>
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                Plan Next Week
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Physics", "Chemistry", "Mathematics", "English"].map(
                    (subject) => (
                      <div key={subject}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {subject}
                          </span>
                          <span className="text-sm font-medium text-gray-700">
                            {Math.floor(Math.random() * 10) + 90}%
                          </span>
                        </div>
                        <Progress
                          value={Math.floor(Math.random() * 10) + 90}
                          className="h-2 bg-purple-200"
                          indicatorClassName="bg-purple-600"
                        />
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Attendance Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-purple-100 rounded-md flex items-center justify-center">
                  <BarChartIcon className="h-24 w-24 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Attendance Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BadgeCheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    <span>
                      You've maintained 100% attendance in Mathematics this
                      month!
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BadgeCheckIcon className="mr-2 h-4 w-4 text-yellow-500" />
                    <span>
                      Your Physics attendance has improved by 5% compared to
                      last month.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BadgeCheckIcon className="mr-2 h-4 w-4 text-red-500" />
                    <span>
                      You've missed 2 Chemistry classes this week. Consider
                      catching up!
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="badges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <BadgeCheckIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-sm text-center">Physics Prodigy</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <TrophyIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-sm text-center">Math Maestro</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-2">
                    <UserIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-sm text-center">
                    Perfect Attendance
                  </span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                View All Badges
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aitherapist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Therapist Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Next Session</h3>
                    <p className="text-sm text-gray-600">Thursday, 4:00 PM</p>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <PhoneIcon className="mr-2 h-4 w-4" /> Join Call
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Recent Topics</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Exam Stress Management</li>
                    <li>Time Management Techniques</li>
                    <li>Building Self-Confidence</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Mood Tracker</h3>
                  <div className="h-[100px] bg-purple-100 rounded-md flex items-center justify-center">
                    <LineChartIcon className="h-16 w-16 text-purple-600" />
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Schedule New Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
