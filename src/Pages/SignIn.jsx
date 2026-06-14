import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>

      {/* Form Box */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Sign up
        </button>

        {/* Google Login */}
        <button className="w-full mt-3 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
          <svg className="w-4 h-4" viewBox="0 0 18 19" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Link */}
        <p className="mt-5 text-sm text-center">
          Already have an account?
          <Link to="/signin" className="text-blue-600 ml-1 underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
