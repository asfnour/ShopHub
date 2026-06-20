import { Link } from "react-router-dom";
import FormInput from "./FormInput";
function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Sign in to your account
        </h1>
        <form className="space-y-5">
          <FormInput label="Email address" type="email" name="email" required />
          <FormInput
            label="Password"
            type="password"
            name="password"
            required
          />
          <button
            type="submit"
            className="w-full py-2 font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Dont have an account?
          <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
export default SignIn;
