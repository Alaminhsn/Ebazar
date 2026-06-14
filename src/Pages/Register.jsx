import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup_page ">
      <div>
        <p className="title signup-title mt-8 font-bold">Create Account</p>
      </div>

      <div className="mt-8 signup-detail">
        <label className="mr-28">Email Address</label>

        <input
          type="email"
          placeholder="Email"
          className="inp mt-1 input2 rounded-md mb-3"
        />

        <br />

        <label className="mr-36">Password</label>

        <input
          type="password"
          placeholder="Password"
          className="inp mt-1 input2 rounded-md mb-3"
        />

        <br />

        <label className="mr-20">Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm Password"
          className="inp mt-1 input2 rounded-md mb-3"
        />
      </div>

      <div>
        <button className="mt-4 mb-3 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
          Sign up
        </button>

        <br />

        <button
          type="button"
          className="text-white mt-4 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fillRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>

        <p className="mt-5">
          Already have an account?
          <Link to="/signin" className="text-blue-900 ml-2 md:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
