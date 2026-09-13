import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../type";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export interface TechCardProps {
    tech: TechnologyType
    selectedTech: TechnologyType[]
    setSelectedTech: Dispatch<SetStateAction<TechnologyType[]>>

}

const TechCard = ({ tech, selectedTech, setSelectedTech }: TechCardProps) => {

    // this one for add to cart button
    // const [isSelected, setIsSelected] = useState(false)
    const isSelected = selectedTech.some(
        selected => selected.id === tech.id
    );
    const handleButton = () => {
        // setIsSelected(!isSelected)

        toast.success(`${tech.name} is added`, {
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

        setSelectedTech([...selectedTech, tech])
    }


    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">

            {/* Icon + Badge */}
            <div className="flex items-center justify-between">
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                />



                <span className="text-xs px-2 py-1 rounded-full bg-pink-50 text-pink-500">
                    {tech.badge}
                </span>
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-900 mt-4">
                {tech.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-5 mt-2 min-h-10">
                {tech.description}
            </p>

            {/* Info */}
            <div className="flex items-center justify-between mt-5 text-xs">

                <span className="bg-gray-100 px-2 py-1 rounded">
                    {tech.category}
                </span>

                <span className="text-gray-500">
                    {tech.difficulty}
                </span>

                {/* Rating */}
                <span className="flex items-center gap-1 text-yellow-500 334155">
                    <FaStar size={12} />
                    <span className="text-[#334155]">  {tech.rating}</span>
                </span>

            </div>

            {/* Button */}
            <button

                onClick={handleButton}
                className={`w-full text-white text-sm py-2 rounded-md mt-4 ${isSelected
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#020817] hover:bg-gray-800"
                    }`}
                disabled={isSelected}
            >
                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    )
}

export default TechCard;