
import { FaStar } from "react-icons/fa";
import type ITechnology from "../../type/Technology";

interface TechnologyCardProps {
    technologies : ITechnology[],
}


function TechnologyCard({technologies}:TechnologyCardProps) {
    return (
        <div className="grid grid-cols-3 gap-4 ">
            {
                technologies.map((technologies) => {
                    return (
                    <div className="  items-start p-4 gap-4  border-2 rounded-2xl border-gray-200 shadow-sm">
                        <div className="flex justify-between ">
                          <img  className="w-11 h-11 text-left  " src={technologies.icon} alt="" />
                          <button className="bg-blue-50 p-2 rounded-3xl text-blue-700">{technologies.badge}</button>
                        </div>
                        

                        <div className="card-body ">
                             <h2 className="card-title font-bold my-4 text-xl">{technologies.name}</h2>
                            <p className="mb-8">{technologies.description}</p>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-gray-200 px-3 rounded-3xl">{technologies.category}</button>
                            <p className="text-gray-600">{technologies.difficulty}</p>
                            <p className="flex items-center"> <FaStar /> {technologies.rating}</p>
                        </div>
                        <button className="bg-black px-31 py-2 mt-9 rounded-2xl cursor-pointer text-white flex justify-center  ">Add to Stack</button>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default TechnologyCard;