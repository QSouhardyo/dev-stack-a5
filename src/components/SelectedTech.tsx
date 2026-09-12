import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../type";
import SelectedTechCard from "./SelectedTechCard";
import { Bounce, toast } from "react-toastify";

export interface SelectedTechProps {
    selectedTech: TechnologyType[]
    setSelectedTech: Dispatch<SetStateAction<TechnologyType[]>>

}

const SelectedTech = ({ selectedTech, setSelectedTech }: SelectedTechProps) => {

    console.log(selectedTech, setSelectedTech);

    const handleRemove = () => {
        setSelectedTech([])

        toast.error(`All the data is deleted`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


    return (
        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm sticky top-24">

            {/* Heading */}
            <div className="flex items-center justify-between">

                <div>
                    <h2 className="text-xl font-bold">
                        Your Stack
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        {selectedTech.length > 0 ? `${selectedTech.length} Technology Selected` : "No technologies selected yet"}
                    </p>
                </div>

            </div>

            {/* Empty State */}

            {
                selectedTech.length > 0 ? (
                    <div className="mt-5 space-y-3">
                        {
                            selectedTech.map(tech => <SelectedTechCard
                                key={tech.id}
                                tech={tech}
                                selectedTech={selectedTech}
                                setSelectedTech={setSelectedTech}
                            ></SelectedTechCard>)
                        }
                        {/* Remove All */}
                        <button
                            onClick={handleRemove}
                            className="w-full border border-red-200 text-red-500 py-2 rounded-md text-sm hover:bg-red-50"
                        >
                            Remove All
                        </button>
                    </div>
                )
                    :
                    (<div className="text-center py-10">

                        <p className="text-gray-400 text-xs mt-2">
                            Your Stack is Empty
                        </p>

                    </div>)
            }


        </div>
    )
}

export default SelectedTech;