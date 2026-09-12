import logo from "../assets/logo-text.png"

function Footer() {
    return (
        <div className="mb-15">
            <hr className="text-gray-200 mb-15"/>
           <div className="container max-w-6xl mx-auto flex justify-between mb-15">
            <div>
                <img src={logo} alt="" />
                <p className="text-gray-500 mt-2">Curated tools, technologies, and resources for developers building <br />
                    modern software.</p>
                <div className="flex gap-4 mt-4">
                    <a href="">GitHub</a>
                    <a href="">Twitter</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-lg">PRODUCT</h4>
                <div className="flex flex-col text-gray-500">
                    <a href="">Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-lg">COMPANY</h4>
                <div className="flex flex-col text-gray-500">
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Careers</a>
                </div>

            </div>
            <div>
                <h4 className="font-bold text-lg">LEGAL</h4>
                <div className="flex flex-col text-gray-500">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                </div>
            </div>
        </div>
         <hr className="text-gray-200 mb-15"/>

        <div className="container max-w-6xl mx-auto flex justify-between mb-15 ">
            <p className="text-gray-500">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex flex-row text-gray-500 gap-4">
                <a href="">Privacy</a>
                <a href="">Terms</a>
            </div>
        </div>

         </div>
           
            
    );
}

export default Footer;