import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Loginpage(props) {
  const input = {
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(input);
  const { next, setNext } = props;

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  // useEffect(()=>{
  //   console.log(next)
  // },[])
  function handleSubmit() {
    if (!inputData.email || !inputData.password) {
      alert("Please fill all input fields");
      return;
    }
    let data = { email: inputData.email, password: inputData.password };

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
          setNext(true);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert(error);
      });
      setInputData(input);
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login Page
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  value={inputData.email}
                  placeholder="Email"
                  type="email"
                  required
                  className="w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className=" text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  value={inputData.password}
                  placeholder="Password"
                  type="password"
                  required
                  className="w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>

            <div className="md:flex justify-center space-x-2 text-sm">
              <p>Click Forgot password ?</p>
              <Link
                href="/forgotpassword"
                className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                Forgot password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
