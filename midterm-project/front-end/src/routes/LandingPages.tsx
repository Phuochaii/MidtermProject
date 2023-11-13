


export default function LandingPage(){
    return(
        <div className={`bg-[url('/LandingPage.jpg')] bg-center bg-cover w-auto h-screen relative`}>
            <nav className="absolute left-1/2  top-[4%]">
                <ul className="flex flex-row space-x-10 p-5">
                    <li>
                        <a className="text-white text-2xl font-bold">HOMEPAGE</a>
                    </li>
                    <li>
                        <a className="text-white text-2xl font-bold">ABOUT</a>
                    </li>
                    <li>
                        <a className="text-white text-2xl font-bold">CONTACT</a>
                    </li>
                </ul>
            </nav>

            <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 max-w-[40%] flex flex-col space-y-10">
                <div className="uppercase text-6xl text-green-500 font-bold">
                    Welcome to <p>Smart Classroom</p>
                </div>

                <div>
                    <button className="uppercase text-white bg-neutral-500 py-2 px-4 rounded-full">Đăng ký ngay</button>
                </div>

                <div className="text-gray-400 text-m">
                    Chúng tôi không chỉ cung cấp một môi trường học tập tiện ích mà còn kích thích sự tò mò và sáng tạo. Với sự tích hợp của các giải pháp công nghệ hàng đầu, Smart Classroom cam kết mang đến trải nghiệm học tập đa chiều, tương tác và linh hoạt
                </div>
            </div>
            

        </div>
    )
}