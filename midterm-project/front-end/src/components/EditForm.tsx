import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Success from "./Notifications/Success";
import Error from "./Notifications/Error";
import axiosClient from "../shared/lib/axios";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
interface EditFormProps {
  fullname?: string;
  email?: string;
}

export default function EditForm() {
  const outletCoxtext: any = useOutletContext();
  const [res, setRes] = useState<EditFormProps>(outletCoxtext[0]);
  const [isCancel, setIsCancel] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isCancel) {
      navigate("/");
    }
  }, [isCancel]);
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRes({ ...res, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(res);
      const response = await axiosClient.put("/users/me/profile", {
        fullname: res.fullname,
        email: res.email,
      });

      console.log(response);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error: any) {
      if (error.data) {
        setIsError(true);
        setErrorMessage(error.data.message);
      } else {
        console.log("Error update profile: ", error);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Success
        isSuccess={isSuccess}
        title="Cập nhật thông tin thành công"
        message="Đang chuyển tiếp đến thông tin cá nhân."
      ></Success>
      <Error
        isError={isError}
        title="Cập nhật thông tin thất bại"
        message={ErrorMessage}
      ></Error>

      <div className="object-scale-down">
        <img className="h-16 w-16" src="/logo.png" alt="logo"></img>
      </div>
      <h1 className="text-center p-5 font-mono text-5xl font-bold uppercase align-middle">
        Thông tin cá nhân
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-md shadow-md"
      >
        <p className="text-sm text-gray-600 mb-6">
          Dùng tài khoản email mà bạn có thể nhận mail.
        </p>

        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="full-name"
              className="text-sm font-medium text-gray-900"
            >
              Họ và tên
            </label>
            <input
              type="text"
              name="fullname"
              id="full-name"
              value={res.fullname}
              onChange={(e) => inputChangeHandler(e)}
              className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Địa chỉ email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={res.email}
              onChange={(e) => inputChangeHandler(e)}
              className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => setIsCancel(!isCancel)}
          >
            Hủy
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}
