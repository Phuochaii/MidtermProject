import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Success from "../components/Notifications/Success";
import Error from "../components/Notifications/Error";
import { backEndServer } from "../shared/const";

interface FormData {
  username: string;
  password: string;
}

export default function LoginForm() {
  const formData: FormData = { username: "", password: "" };
  const [res, setRes] = useState<FormData>(formData);
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleCheckBoxChange() {
    setIsChecked(!isChecked);
  }
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRes({ ...res, [name]: value });
  };
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backEndServer}/auth/login`, res);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setIsSuccess(true);
      setIsError(false);
      setTimeout(() => {
        navigate("/homepage");
      }, 2000);
    } catch (e: any) {
      console.log(e);
      if (e.response.data) {
        setIsError(true);
        setIsSuccess(false);
        setErrorMessage(e.response.data.message);
      } else {
        console.error("Error login:", e);
      }
    }
  };
  return (
    <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-white rounded-md p-5 flex flex-col justify-center text-center">
      <Success
        isSuccess={isSuccess}
        title="Đăng nhập thành công"
        message="Đang chuyển tiếp đến trang chủ."
      ></Success>
      <Error
        isError={isError}
        title="Đăng nhập thất bại"
        message={ErrorMessage}
      ></Error>

      <div className="object-scale-down m-auto">
        <img className="h-16 w-16" src="/logo.png" alt="logo"></img>
      </div>
      <h1 className="text-center p-5 font-mono text-5xl font-bold uppercase align-middle">
        Đăng nhập
      </h1>
      <form onSubmit={onSubmitHandler}>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            name="username"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15]"
            placeholder="Tên tài khoản"
            onChange={(e) => inputChangeHandler(e)}
            required
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            name="password"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] "
            placeholder="Mật khẩu"
            onChange={(e) => inputChangeHandler(e)}
            required
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              value=""
              id="exampleCheck3"
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="exampleCheck3"
            >
              Ghi nhớ tài khoản
            </label>
          </div>

          <a
            href="#!"
            className="text-primary transition duration-150 ease-in-out"
          >
            Quên mật khẩu?
          </a>
        </div>
        <div className=" w-full flex flex-row flex-wrap items-center justify-between">
          <Link
            to="/auth/register"
            className="bg-white inline-block w-2/5 rounded bg-primary px-7 pb-2.5 text-center
        pt-3 text-sm font-medium uppercase leading-normal text-blue-400 border-2
        hover:bg-blue-700 hover:text-white
        "
          >
            Đăng ký
          </Link>
          <button
            type="submit"
            className="bg-blue-400 inline-block w-2/5 rounded bg-primary px-7 pb-2.5 
        pt-3 text-sm font-medium uppercase leading-normal text-white 
        hover:bg-blue-700
        "
          >
            Đăng nhập
          </button>
        </div>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            Hoặc
          </p>
        </div>

        <a
          className=" bg-[#3b5998] mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white hover:bg-blue-700"
          href="#!"
          role="button"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          Tiếp tục với Facebook
        </a>
        <a
          className="bg-[#55acee] mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white hover:bg-blue-600"
          href="#!"
          role="button"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          Tiếp tục với Twitter
        </a>
      </form>
    </div>
  );
}
