import { use } from "react";
import type { TechnologiesType } from "../../assets/types/type";
// import Technologies from "./technologies/Technologies";


export interface ExploreTheTechnologiesProps {
    technologiesPromise: Promise<TechnologiesType[]>
}

export default function ExploreTheTechnologies({ technologiesPromise }: ExploreTheTechnologiesProps) {
    const technologiesData = use(technologiesPromise);
    return (
        <>
            <div
                className="container mx-auto px-4 pb-32 lg:px-8 mt-4 lg:mt-28 space-y-5 lg:space-y-10">

                <div
                    className="space-y-1 lg:space-y-2">
                    <h2
                        className="inter font-bold lg:font-extrabold text-center lg:text-left text-2xl lg:text-4xl ">Explore the <span
                            className="text-transparent bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text inter">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-xs text-[#6B7280] leading-4 lg:text-[16px] lg:leading-6 text-center lg:text-left">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8">

                </div>
            </div>
        </>
    )
}