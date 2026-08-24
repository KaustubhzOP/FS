import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    alert("Login button clicked!");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <p className="text-center text-gray-500 mt-2">Welcome to SkillSync</p>

        <form onSubmit={handleLogin} className="mt-8">
          <label className="block mb-2">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border p-3 rounded-lg mb-5"
          />

          <label className="block mb-2">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border p-3 rounded-lg mb-6"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
