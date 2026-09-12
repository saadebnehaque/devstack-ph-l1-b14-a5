import type { TechnologiesType } from "../../../assets/types/type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
    technologiesData: TechnologiesType[];
}

export default function Technologies({ technologiesData }: TechnologiesProps) {

    return (
        <>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3.5 lg:gap-5">
                {
                    technologiesData.map(technology => <TechnologyCard key={technology.id} technology={technology}></TechnologyCard>)
                }
            </div>
        </>
    )
}