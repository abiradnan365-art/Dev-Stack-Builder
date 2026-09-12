
import { FaStar } from "react-icons/fa";
import type ITechnology from "../../type/Technology";
import {  type Dispatch, type SetStateAction } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { toast } from "react-toastify";


interface TechnologyCardProps {
    technologies : ITechnology[],
    addedTechnologies: ITechnology[],
    setAddedTechnologies:Dispatch<SetStateAction<ITechnology[]>>
}


function TechnologyCard({technologies, addedTechnologies, setAddedTechnologies}:TechnologyCardProps) {
    
     
                const handleAddTechnology = (technology: ITechnology) => {

                    if (addedTechnologies.some(item => item.id === technology.id)) {
                        toast.error(`${technology.name} already added`, {
                            position: "bottom-right"
                        });
                        return;
                    }

                     setAddedTechnologies([...addedTechnologies, technology]);

                     toast.success(`${technology.name} added to stack`, {
                         position: "bottom-right"
                     });
                }                   

    return (
        <div className="grid grid-cols-3 gap-4 mb-50">
            {
                technologies.map((technologies) => {
                     const isAdded = addedTechnologies.some(
                     item => item.id === technologies.id
                     );
                   
                    return (
                         
                    <div className="  items-start p-4 gap-4  border-2 rounded-2xl border-gray-200 shadow-sm"
                    key={technologies.id}>
                        <div className="flex justify-between ">
                          <img  className="w-11 h-11 text-left  " src={technologies.icon} alt="" />
                          <button className="bg-blue-50 p-2 rounded-3xl text-blue-700">{technologies.badge}</button>
                        </div>
                        
                        <div className="card-body ">
                             <h2 className="font-bold my-4 text-xl">{technologies.name}</h2>
                            <p className="mb-8">{technologies.description}</p>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-gray-200 px-3 rounded-3xl">{technologies.category}</button>
                            <p className="text-gray-600">{technologies.difficulty}</p>
                            <p className="flex items-center"> <FaStar /> {technologies.rating}</p>
                        </div>
                        <button 
                        onClick={() => handleAddTechnology(technologies)}
                        className={` ${isAdded  ? "bg-pink-50 text-black border border-pink-400" : "bg-black text-white"} px-20 py-2 mt-9 rounded-2xl
                         cursor-pointer flex justify-center `}
                         
                         >
                            {isAdded === true ? (<>
                            <MdOutlineCheck /> <span>{"Added to Stack"}</span>
                            </>) : "Add to Stack"}
                            </button>
                           
                    </div>
                    )
                })
            }
        </div>
    );
}

export default TechnologyCard;