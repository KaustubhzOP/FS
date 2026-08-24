import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>

        <p className="text-gray-600 mt-2">
          Welcome to your SkillSync dashboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">Skills Offered</p>

            <h2 className="text-3xl font-bold mt-2">5</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">Skills Wanted</p>

            <h2 className="text-3xl font-bold mt-2">3</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">Requests</p>

            <h2 className="text-3xl font-bold mt-2">4</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">Projects</p>

            <h2 className="text-3xl font-bold mt-2">2</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-8">
          <h2 className="text-xl font-bold">My Skills</h2>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              MongoDB
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              Java
            </span>

            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
              Node.js
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
