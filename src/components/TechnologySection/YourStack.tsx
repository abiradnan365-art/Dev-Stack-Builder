
import type { Dispatch, SetStateAction } from "react";
import type ITechnology from "../../type/Technology"
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import Technologies from "./Technologies";

interface YourStackProps{
    technologies: ITechnology[],
    addedTechnologies: ITechnology[],
    setAddedTechnologies:Dispatch<SetStateAction<ITechnology[]>>
}

function YourStack({ addedTechnologies, setAddedTechnologies}:YourStackProps) {
    // console.log(addedTechnologies,setAddedTechnologies, )
   const handleRemoveTechnology = (technology: ITechnology) => {
    const restTechnologies = addedTechnologies.filter(
        addedTechnology => addedTechnology.id !== technology.id
    );

    setAddedTechnologies(restTechnologies);
    toast.info(`${technology.name} remove from your stack`,{
        position: "bottom-right"
    })
};
    return (
        <div className="  border-2 border-gray-200 rounded-2xl  p-5 ">
            <h2 className="font-bold text-xl">Your Stack</h2>

            <div className="text-sm text-gray-400 mt-1">
                {addedTechnologies.length === 0 ? "No technologies selected yet." 
                : `${addedTechnologies.length} Technology Selected`
                }
            </div>

            {addedTechnologies.length === 0? (
                <div className="border border-dashed border-gray-300 rounded-lg h-26 mt-6 flex items-center justify-center">
                <p className="text-sm text-gray-400">

                    Your stack is empty.
                </p>
            </div>) : (
                <div className="flex flex-col  gap-3 mt-6">
                 {addedTechnologies.map((technologies) => 
                 
                 (
                    <div className="  border-2 rounded-2xl border-gray-300 px-2 py-2 flex flex-row items-center"
                    key={technologies.id}>
                        <img className="h-9" src={technologies.icon} alt="" />
                    <div>  
                      <p>{technologies.name}</p>
                      <p className="text-sm text-gray-500">{technologies.category}</p>
                    </div> 
                    <span className="ml-auto cursor-pointer text-gray-500 "
                    onClick={() => handleRemoveTechnology(technologies)}>
                        <RxCross2 className="" />
                    </span>

                        
                    
                    </div>
                
                ))}
                <button className="mt-9 border-1 border-red-400 text-red-500 py-2 rounded-2xl cursor-pointer "
                onClick={() =>{setAddedTechnologies([]) ,
                    toast.info("All technologies removed from your stack!",{
                        position: "bottom-right"
                    })
                } }
                
                
                >Remove All</button>
            </div>
               
            )} 
           
            
        </div>
    );
}

export default YourStack;