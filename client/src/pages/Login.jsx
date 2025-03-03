import { useState } from "react";
import { Link } from "react-router";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            <span role="img" aria-label="ticket">🎟️</span> Ticket App
          </h2>
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back</h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? 
          <Link to="/signup" className="text-amber-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
