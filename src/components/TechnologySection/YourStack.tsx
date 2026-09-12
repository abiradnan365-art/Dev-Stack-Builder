
import type ITechnology from "../../type/Technology"

interface YourStackProps{
    technologies: ITechnology[],
}

function YourStack({technologies}:YourStackProps) {
    return (
        <div className="  border-2 border-gray-200 rounded-2xl p-5 ">
            <h2 className="font-bold text-xl">Your Stack</h2>

            <p className="text-sm text-gray-400 mt-1">
                No technologies selected yet.
            </p>

            <div className="border border-dashed border-gray-300 rounded-lg h-26 mt-6 flex items-center justify-center">
                <p className="text-sm text-gray-400">
                    Your stack is empty.
                </p>
            </div>
        </div>
    );
}

export default YourStack;