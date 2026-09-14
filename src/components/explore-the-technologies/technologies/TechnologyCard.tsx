import { GiCheckMark } from "react-icons/gi";
import type { TechnologiesType } from "../../../assets/types/type";

export interface TechnologyCardProps {
    technology: TechnologiesType;
    handleAddedToStack: (addedTech: TechnologiesType) => void;
    isAdded: boolean;
}

export default function TechnologyCard({ technology, handleAddedToStack, isAdded }: TechnologyCardProps) {

    return (
        <>
            <div
                className={`p-4 lg:p-5 rounded-xl lg:rounded-2xl shadow hover:shadow-lg space-y-2.5 lg:space-y-4 border transition-all duration-200 ease-in-out ${isAdded ? 'border-secondary shadow-secondary-content' : 'border-[#F3F4F6] lg:border-[#F1F5F9] shadow-black/5'} flex flex-col justify-between`}
            >
                <div>
                    <div className="flex justify-between items-start">
                        <div className="flex lg:flex-col items-center lg:items-start gap-3">
                            <div className={` max-w-10 max-h-10 ${technology.badgeStyle} p-2 rounded-lg`}>
                                <img src={technology.icon} alt={technology.alt} className=" w-full" />
                            </div>
                            <h4
                                className="inter font-bold lg:text-[18px] text-[#111827] lg:text-[#0F172A]">
                                {technology.name}
                            </h4>
                        </div>
                        <span
                            className={`${technology.badgeStyle} px-2 py-0.5  lg:px-[10.4] lg:pb-[2.16px] rounded-full inter font-bold lg:font-semibold text-[10.4px] lg:text-xs`}>
                            {technology.badge}
                        </span>
                    </div>
                    <p className=" mt-2.5 lg:mt-1.5 text-gray-500 text-xs lg:text-sm leading-[19.5px] lg:leading-6 ">{technology.description}</p>
                </div>
                {/* ------------- */}
                <div className="flex flex-col gap-2.5 lg:gap-4">
                    <div className="flex items-center justify-between pt-3 lg:pt-2">
                        <span className="px-2 py-0.5 bg-base-300 text-gray-600 font-medium text-xs rounded">{technology.category}</span>
                        <p className="text-gray-500  text-xs font-medium "> {technology.difficulty}</p>
                        <p className="font-semibold text-warning text-xs">★ {technology.rating}</p>
                    </div>
                </div>
                <div onClick={() => handleAddedToStack(technology)}>
                    <button
                        disabled={isAdded ? true : false}
                        className={`btn w-full rounded-lg text-xs lg:text-sm inter ${isAdded ? 'bg-secondary-content text-secondary ' : ' bg-[#111827] text-white'}`}
                    >
                        {
                            isAdded ? <><GiCheckMark></GiCheckMark> Added to Stack</> : ' Add to Stack'
                        }
                    </button>
                </div>
            </div>
        </>
    )
}