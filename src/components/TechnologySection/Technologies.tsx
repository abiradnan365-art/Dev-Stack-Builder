import { use } from "react";
import type ITechnology from "../../type/Technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
    technologiesPromise: Promise<ITechnology[]>;
}
function Technologies({technologiesPromise}: TechnologiesProps) {
    const technologies = use(technologiesPromise);
    console.log(technologies)
    return (
        <div className="container max-w-6xl mx-auto  ">
            <div className="my-9 ">
                <h1 className="text-4xl font-bold ">Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span> </h1>
                <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <TechnologyCard technologies={technologies}></TechnologyCard>
        </div>
    );
}

export default Technologies;