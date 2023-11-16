import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function LoginForm() {
  const formData: FormData = { email: "", password: "", confirmPassword: "" };
  const [res, setRes] = useState<FormData>(formData);
  const [isMatch, setIsMatch] = useState(true);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRes({ ...res, [name]: value });
  };
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(res);
    if (res.password === res.confirmPassword) {
      try {
        const { confirmPassword, ...requestBody } = res;
        const response = await axios.post(
          "/authentication/signup",
          requestBody
        );

        //useContext useReducer o day
        const navigate = useNavigate();
        navigate("/login");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setIsMatch(false);
    }
  };
  return (
    <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-white rounded-md p-5">
      <h1 className="text-center p-5 font-mono text-5xl font-bold uppercase align-middle">
        Signup
      </h1>
      <form onSubmit={onSubmitHandler}>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            name="email"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15]"
            placeholder="Email address"
            onChange={(e) => inputChangeHandler(e)}
            required
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            name="password"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] "
            placeholder="Password"
            onChange={(e) => inputChangeHandler(e)}
            required
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          {!isMatch && (
            <p className="text-red-600">It is not a same as the password!!</p>
          )}
          <input
            type="password"
            name="confirmPassword"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] "
            placeholder="Confirm Password"
            onChange={(e) => inputChangeHandler(e)}
            required
          />
        </div>

        <div className=" w-full flex flex-row flex-wrap items-center justify-between">
          <Link
            to="/authentication/login"
            className="bg-white inline-block w-2/5 rounded bg-primary px-7 pb-2.5 text-center
          pt-3 text-sm font-medium uppercase leading-normal text-blue-400 border-2
          hover:bg-blue-700 hover:text-white
          "
          >
            Log in
          </Link>
          <button
            type="submit"
            className="bg-blue-400 inline-block w-2/5 rounded bg-primary px-7 pb-2.5 
          pt-3 text-sm font-medium uppercase leading-normal text-white 
          hover:bg-blue-700
          "
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
