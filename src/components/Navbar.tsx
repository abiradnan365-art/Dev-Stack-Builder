import logo from "../assets/logo-text.png"

function Navbar() {
    return (
        <nav className="bg-white" >
            <div className="flex justify-between container mx-auto max-w-6xl my-2">
                <img className="h-full" src={logo} alt="" />
                <div className="flex gap-6 items-center cursor-pointer">
                    <a className="text-pink-500 hover:text-pink-700" href="/">Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div >
                    <button className="mx-4 hover:text-gray-500 cursor-pointer">Sign In</button>
                    <button className="bg-pink-500 p-2 rounded-2xl text-white cursor-pointer hover:bg-pink-600">Sign Up</button>
                </div>
            </div>
            <hr className="text-gray-100 mt-4"/>
        </nav>
    );
}

export default Navbar;