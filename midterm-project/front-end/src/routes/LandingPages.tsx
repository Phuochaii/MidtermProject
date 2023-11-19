import { Link } from "react-router-dom";



export default function LandingPage(){
    return(
        <div className={`bg-[url('/LandingPage.jpg')] bg-center bg-cover w-auto h-screen relative`}>
            <nav className="absolute left-1/2  top-[4%] transform -translate-x-1/2 lg:-translate-x-0">
                <ul className="flex flex-row space-x-10 p-5">
                    <li>
                        <Link to={`/homepage`} className="text-white text-xl lg:text-2xl font-bold">HOMEPAGE</Link>
                    </li>
                    <li>
                        <a className="text-white text-xl lg:text-2xl font-bold">ABOUT</a>
                    </li>
                    <li>
                        <a className="text-white text-xl lg:text-2xl font-bold">CONTACT</a>
                    </li>
                </ul>
            </nav>

            <div className="absolute top-[5%] left[5%] max-[800px]:hidden ">
                <img className="max-h-[30vh]" src ="/logo.png"alt="logo"></img>
            </div>

            <div className="absolute left-[5%] top-2/3 transform -translate-y-1/2 lg:max-w-[40%] flex flex-col space-y-10 max-[800px]:items-center p-4">
                <div className="min-[800px]:hidden">
                    <img className="max-w-[80vw]" src ="/logo.png"alt="logo"></img>
                </div>

                <div className="uppercase lg:text-6xl text-4xl text-green-500 font-bold">
                    Welcome to <p>Smart Classroom</p>
                </div>

                <div>
                    <Link to={`/auth/register`}><button className="uppercase text-white bg-neutral-500 py-2 px-4 rounded-full">Đăng ký ngay</button></Link>
                </div>

                <div className="text-gray-400 text-m">
                    Chúng tôi không chỉ cung cấp một môi trường học tập tiện ích mà còn kích thích sự tò mò và sáng tạo. Với sự tích hợp của các giải pháp công nghệ hàng đầu, Smart Classroom cam kết mang đến trải nghiệm học tập đa chiều, tương tác và linh hoạt
                </div>
            </div>
            

        </div>
    )
}