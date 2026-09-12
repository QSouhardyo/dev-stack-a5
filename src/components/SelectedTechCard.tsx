import { FaXmark } from "react-icons/fa6";
import type { TechnologyType } from "../type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export interface SelectedTechCardProps {
    tech: TechnologyType;
    selectedTech: TechnologyType[]
    setSelectedTech: Dispatch<SetStateAction<TechnologyType[]>>
}

const SelectedTechCard = ({ tech, selectedTech, setSelectedTech }: SelectedTechCardProps) => {

    const handleDelete = (tech: TechnologyType) => {
        const restTech = selectedTech.filter(singleTech => singleTech.id !== tech.id)

        setSelectedTech(restTech)

        toast.error(`${tech.name} is deleted`, {
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
        <div className="flex items-center gap-3 border rounded-lg p-3">

            <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
            />

            <div className="flex-1">
                <h3 className="text-sm font-semibold">
                    {tech.name}
                </h3>

                <p className="text-xs text-gray-500">
                    {tech.category}
                </p>
            </div>

            <button
                onClick={() => handleDelete(tech)}
                className="text-red-500 hover:text-red-700"
            >
                <FaXmark size={18} />
            </button>

        </div>
    );
};

export default SelectedTechCard;