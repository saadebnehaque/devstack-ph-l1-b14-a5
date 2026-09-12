import { RxCross1 } from "react-icons/rx";
import type { TechnologiesType } from "../../../../assets/types/type";

export interface YourStackCardProps {
    tech: TechnologiesType;
    handleRemove: (a: TechnologiesType) => void;
}

export default function YourStackCard({ tech, handleRemove }: YourStackCardProps) {

    return (
        <div className="hover:shadow py-1.25 px-2.5 rounded-lg border border-[#E2E8F0] flex items-center justify-between transition-all duration-150 ease-in-out">
            <div className="flex items-center gap-1">

                <img src={tech.icon} alt="" className="h-8 min-w-8 p-2 box-content" />

                <div>
                    <h4 className=" text-[#0F172A] font-bold text-sm mb-1">{tech.name}</h4>
                    <p className=" text-[#94A3B8] font-bold text-[10px]">{tech.category}</p>
                </div>
            </div>
            <span
                onClick={() => handleRemove(tech)}
                className="btn btn-ghost btn-error"
            >
                <RxCross1></RxCross1>
            </span>
        </div>
    )
}