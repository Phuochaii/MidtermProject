import { Routes, Route } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
function Authentication() {
  return (
    <>
      <div className="h-screen bg-cover bg-center bg-[url('./assets/background.jpg')] flex box-border justify-center items-center">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </>
  );
}
export default Authentication;
