import { useState } from "react";
import { Link } from "react-router";
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for matching passwords
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    // Clear any previous errors
    setError('');

    // Handle sign-up logic (e.g., API call) here
    console.log("User signed up:", { username, email, password });

    // Optionally, redirect to login page or dashboard after successful sign-up
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-amber-500">
            <span role="img" aria-label="ticket">🎟️</span> Ticket App
          </h2>
          <h1 className="text-xl font-semibold text-gray-700">Create an Account</h1>
        </header>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your username"
            />
          </div>

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

          <div>
            <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-amber-500 hover:underline">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
