import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./CommonFile";

const Register = () => {
  const { register, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conformPassword = e.target.conformPassword.value;

    if (password !== conformPassword) {
      return console.log("Password don't Match");
    }

    register(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border-4 mx-auto">
        <h1 className="text-2xl font-bold text-center">Registration</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className=" bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="conform_password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="conformPassword"
              id="conform_password"
              placeholder="Password"
              className=" bg-slate-100 w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <button className="btn btn-primary rounded-md block w-full p-3 text-center dark:text-gray-50 dark:bg-violet-600">Register</button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          You have an Account?
          <Link to="/login" rel="noopener noreferrer" className="underline dark:text-gray-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
