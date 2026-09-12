import { use, useState,} from "react";
import type ITechnology from "../../type/Technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
    technologiesPromise: Promise<ITechnology[]>;

}
function Technologies({technologiesPromise,}: TechnologiesProps) {
    const technologies = use(technologiesPromise);
    // console.log(technologies)
    const [addedTechnologies, setAddedTechnologies] = useState<ITechnology[]>([]);


    return (
        <div className="container max-w-6xl mx-auto  ">
            <div className="my-9 ">
                <h1 className="text-4xl font-bold ">Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span> </h1>
                <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="flex gap-5 items-start">

             <div className="flex-1">
                <TechnologyCard technologies={technologies} addedTechnologies = {addedTechnologies} setAddedTechnologies = {setAddedTechnologies} />
            </div>

   
       <div>
        <YourStack technologies = {technologies} addedTechnologies = {addedTechnologies} setAddedTechnologies = {setAddedTechnologies}></YourStack>
       </div>

        </div>
     </div>
    );
}

export default Technologies;