import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Success from "./Notifications/Success";
import Error from "./Notifications/Error";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const formData: FormData = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [res, setRes] = useState<FormData>(formData);
  const [isMatch, setIsMatch] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRes({ ...res, [name]: value });
  };
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (res.password === res.confirmPassword) {
      try {
        const { confirmPassword, ...requestBody } = res;
        const response = await axios.post("/api/v1/auth/register", requestBody);
        console.log(response);
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } catch (e: any) {
        if (e.data) {
          setIsError(true);
          setErrorMessage(e.data.message);
        } else {
          console.error("Error submitting form:", e);
        }
      }
    } else {
      setIsMatch(false);
    }
  };
  return (
    <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-white rounded-md p-5 flex flex-col justify-center text-center">
      <Success
        isSuccess={isSuccess}
        title="Đăng ký thành công"
        message="Đang chuyển tiếp đến đăng nhập."
      ></Success>
      <Error
        isError={isError}
        title="Đăng ký thất bại"
        message={ErrorMessage}
      ></Error>

      <div className="object-scale-down m-auto">
        <img className="h-16 w-16" src="/logo.png" alt="logo"></img>
      </div>
      <h1 className="text-center p-5 font-mono text-5xl font-bold uppercase align-middle">
        Đăng ký
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
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            name="confirmPassword"
            className={
              isMatch
                ? "peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] "
                : "peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] border-rose-600"
            }
            placeholder="Xác nhận mật khẩu"
            onChange={(e) => inputChangeHandler(e)}
            required
          />
          {!isMatch && (
            <p className="text-red-600 text-left">
              Không trùng khớp với mật khẩu!!
            </p>
          )}
        </div>

        <div className=" w-full flex flex-row flex-wrap items-center justify-between">
          <Link
            to="/auth/login"
            className="bg-white inline-block w-2/5 rounded bg-primary px-7 pb-2.5 text-center
          pt-3 text-sm font-medium uppercase leading-normal text-blue-400 border-2
          hover:bg-blue-700 hover:text-white
          "
          >
            Đăng nhập
          </Link>
          <button
            type="submit"
            className="bg-blue-400 inline-block w-2/5 rounded bg-primary px-7 pb-2.5 
          pt-3 text-sm font-medium uppercase leading-normal text-white 
          hover:bg-blue-700
          "
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
}
