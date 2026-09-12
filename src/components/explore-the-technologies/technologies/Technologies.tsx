import type { TechnologiesType } from "../../../assets/types/type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
    technologiesData: TechnologiesType[];
    handleAddedToStack: (addedTechnology: TechnologiesType) => void;
    addedTech: TechnologiesType[];
}

export default function Technologies({ technologiesData, handleAddedToStack, addedTech }: TechnologiesProps) {

    return (

        <div className=" lg:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-3.5 lg:gap-5">
            {
                technologiesData.map(technology =>
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        handleAddedToStack={handleAddedToStack}
                        isAdded={addedTech.some(tech => tech.id === technology.id)}
                    ></TechnologyCard>)
            }
        </div>

    )
}