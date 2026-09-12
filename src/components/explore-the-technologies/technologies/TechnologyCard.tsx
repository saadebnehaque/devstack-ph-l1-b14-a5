import type { TechnologiesType } from "../../../assets/types/type";

export interface TechnologyCardProps {
    technology: TechnologiesType;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {

    return (
        <>
            <div className="p-4 lg:p-5 rounded-xl lg:rounded-2xl shadow hover:shadow-lg shadow-black/5 space-y-2.5 lg:space-y-4 border border-[#F3F4F6] lg:border-[#F1F5F9] transition-all duration-200 ease-in-out">
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
                    <p className=" mt-2.5 lg:mt-1.5 text-[#485563] lg:text-[#64748B] text-xs lg:text-sm leading-[19.5px] lg:leading-6 ">{technology.description}</p>
                </div>
                {/* ------------- */}
                <div className="flex flex-col gap-2.5 lg:gap-4">
                    <div className="flex items-center justify-between pt-3 lg:pt-2">
                        <span className="px-2 py-0.5 bg-[#F1F5F9] text-[#475569] font-medium text-xs rounded">{technology.category}</span>
                        <p className="text-[#6B7280] lg:text-[#64748B] text-xs font-medium "> {technology.difficulty}</p>
                        <p className="font-semibold text-[#F59E0B] text-xs">★ {technology.rating}</p>
                    </div>
                    <button className="btn rounded-lg bg-[#111827] text-white text-xs lg:text-sm inter">Add to Stack</button>
                </div>
            </div>
        </>
    )
}