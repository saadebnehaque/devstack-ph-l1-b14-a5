import { use, useState } from "react";
import type { TechnologiesType } from "../../assets/types/type";
import Technologies from "./technologies/Technologies";
import YourStack from "./technologies/your-stack/YourStack";
import { toast } from "react-toastify";

export interface ExploreTheTechnologiesProps {
    technologiesPromise: Promise<TechnologiesType[]>
}

export default function ExploreTheTechnologies({ technologiesPromise }: ExploreTheTechnologiesProps) {

    const technologiesData = use(technologiesPromise);

    const [addedTech, setAddedTech] = useState<TechnologiesType[]>([])



    // event handlers:
    const handleAddedToStack = (addedTechnology: TechnologiesType): void => {

        const isAlreadyAdded = addedTech.some(tech => tech.id === addedTechnology.id);

        if (!isAlreadyAdded) {
            setAddedTech([...addedTech, addedTechnology]);
            toast.success(`${addedTechnology.name} is added to Stack`)

        } else {
            toast.error(`${addedTechnology.name} is already added to Stack`)
        }

    }

    // -----------------
    const handleRemove = (technology: TechnologiesType): void => {
        const updatedStack = addedTech.filter(tech => tech.id !== technology.id);
        setAddedTech(updatedStack);
        toast.warning(`${technology.name} is removed from Stack`);
    }

    // ----------------


    const handleRemoveAll = (): void => {
        setAddedTech([]);
        toast.warning('All technologies removed from Stack');
    }




    return (
        <section className=" container mx-auto p-4 lg:p-8 mt-10 lg:mt-28 space-y-5 lg:space-y-10">
            <div>
                <h4 className="inter text-[#111827] text-2xl lg:text-4xl font-bold lg:font-extrabold text-center lg:text-left mb-1 lg:mb-2">Explore the <span className="inter bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text ">Technologies</span></h4>
                <p className=" text-center lg:text-left text-gray-500  text-xs lg:text-[16px] ">Pick one technology per category to build your ideal stack.</p>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
                <Technologies
                    technologiesData={technologiesData}
                    handleAddedToStack={handleAddedToStack}
                    addedTech={addedTech}
                ></Technologies>
                <YourStack
                    addedTech={addedTech}
                    handleRemove={handleRemove}
                    handleRemoveAll={handleRemoveAll}
                ></YourStack>
            </div>
        </section>
    )
}