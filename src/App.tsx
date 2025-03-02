import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs';
import { BookOpen, Users, Award, ExternalLink, CheckCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('task1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Award className="mr-2 h-8 w-8 text-indigo-600" />
            Auroville Recruitment Tasks
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b">
              <TabsList className="flex">
                <TabsTrigger 
                  value="task1" 
                  className={`flex-1 px-4 py-4 text-center ${activeTab === 'task1' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Users className="inline-block mr-2 h-5 w-5" />
                  Task 1: Community Engagement
                </TabsTrigger>
                <TabsTrigger 
                  value="task2" 
                  className={`flex-1 px-4 py-4 text-center ${activeTab === 'task2' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <BookOpen className="inline-block mr-2 h-5 w-5" />
                  Task 2: Course Completion
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="task1" className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Engagement Activities</h2>
              <p className="text-gray-600 mb-6">
                Based on the course and exam you've completed, participate in any three of the following activities:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Create a Poll in the Exchange tab', description: 'Create A Poll' },
                  { title: 'Post content related to your expertise', description: 'Post your Thoughts' },
                  { title: 'Ask a relevant question', description: 'Ask a Question' },
                  { 
                    title: 'Engage with the community', 
                    description: 'Upvote/downvote and comment your thoughts on other users\' polls, questions, and posts' 
                  }
                ].map((activity, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">{activity.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h3 className="text-lg font-medium text-indigo-800 mb-2">Evaluation Criteria</h3>
                <ul className="list-disc pl-5 text-indigo-700 space-y-1">
                  <li>Engagement metrics (e.g., upvotes, comments) on your activities</li>
                  <li>Relevance and quality of your contributions to the community</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="task2" className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Completion on the Auro.edu App</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Objective:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Select any one course from the list given below</li>
                  <li>Complete all chapter quizzes and score at least 70% on the final exam to earn the accreditation certificate</li>
                  <li>Candidates who achieve distinction will receive guaranteed opportunities with Auroville Investment Management or other companies within the Auro group</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Course List:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Advanced Python Programming',
                    'Mastering Django',
                    'Mastering Flask',
                    'Mastering Node.js & Express.js',
                    'Advanced PHP',
                    'Advanced Laravel',
                    'Mastering Ruby on Rails',
                    'DevOps Practices and CI/CD'
                  ].map((course, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Course Details:</h3>
                <p className="text-gray-600">
                  <span className="font-medium">Level:</span> Advanced<br />
                  <span className="font-medium">Category:</span> Digital
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">App URLs:</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    <ExternalLink className="h-5 w-5 mr-2 text-gray-500" />
                    Download from Apple Store
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    <ExternalLink className="h-5 w-5 mr-2 text-gray-500" />
                    Download from Google Play Store
                  </a>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Steps to Access Your Course:</h3>
                <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                  <li>Open the Auro.edu App</li>
                  <li>Navigate to the Course tab in the bottom navigation bar</li>
                  <li>Click on the Search Icon on the top Header. Simply Search your course in the search bar on top by writing the course name with correct spelling</li>
                  <li>Or Select Digital category from drop-down, "Programming languages" from the list of topics, and under advanced level courses, you will find all these courses listed</li>
                  <li>Select and open the course to begin</li>
                </ol>
              </div>

              <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h3 className="text-lg font-medium text-indigo-800 mb-2">Evaluation Criteria</h3>
                <p className="text-indigo-700">Quality and accuracy of your course completion and certificate achievement.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Auroville Investment Management</h2>
          <p className="text-gray-600">
            Auroville Investment Management is part of the Auro group, focusing on innovative investment solutions. 
            This recruitment process aims to identify talented individuals who can contribute to our community and 
            demonstrate expertise in advanced programming technologies.
          </p>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Team collaboration" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold flex items-center">
                <Award className="mr-2 h-6 w-6" />
                Auroville Investment Management
              </h3>
              <p className="text-gray-400 mt-2">Recruitment Process 2025</p>
            </div>
            <div>
              <p className="text-gray-400">For any queries, please contact recruitment@auroville.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;