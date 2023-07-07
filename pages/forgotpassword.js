import { useState } from "react";
import Link from "next/link";

export default function Forgotpassword() {
  const [reset, setReset] = useState("");
  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center space-y-2 px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Reset Password
            </h2>
            <p className="text-center text-gray-400">
              Enter your email adress,we'll send you a link on your to reset your
              password.
            </p>
          </div>
          <div className="space-y-2 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  value={reset}
                  placeholder="Email"
                  type="email"
                  required
                  className="w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setReset(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                // onClick={handleSubmit}
                className="flex justify-center rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
            <div className="flex justify-center space-x-2 text-sm">
              <p>Back to Log in Page</p>
              <Link
                href="/"
                className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                Click here
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}
