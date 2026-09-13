import { use, useState } from "react";
import type { TechnologyType } from "../type";
import TechCard from "./TechCard";
import SelectedTech from "./SelectedTech";


export interface TechnologiesProps {
    devPromises: Promise<TechnologyType[]>
}

const Technologies = ({ devPromises }: TechnologiesProps) => {

    const techs = use(devPromises)

    const [selectedTech, setSelectedTech] = useState<TechnologyType[]>([])




    return (
        <section>

            {/* Heading */}
            <div>
                <h1 className="text-3xl font-bold">

                    Explore the{" "}

                    <span className="bg-brand-gradient text-transparent bg-clip-text">
                        Technologies
                    </span>

                </h1>

                <p className="text-sm text-gray-500 mt-2">
                    Pick technologies to build your ideal development stack.
                </p>
            </div>


            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

                {/* Technology Cards */}
                <div className="lg:col-span-9">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {techs.map((tech) => (

                            <TechCard
                                key={tech.id}
                                tech={tech}
                                selectedTech={selectedTech}
                                setSelectedTech={setSelectedTech}

                            />

                        ))}

                    </div>

                </div>


                {/* Your Stack */}
                <div className="lg:col-span-3">

                    <SelectedTech
                        selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech}

                    ></SelectedTech>

                </div>

            </div>

        </section>
    )
}

export default Technologies;