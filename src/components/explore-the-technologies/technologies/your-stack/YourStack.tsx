import type { TechnologiesType } from "../../../../assets/types/type";
import YourStackCard from "./YourStackCard";

export interface YourStackProps {
    addedTech: TechnologiesType[];
}

export default function YourStack({ addedTech }: YourStackProps) {

    return (
        <div className="lg:col-span-3 h-fit p-5 rounded-2xl border border-[#f1f5f9] shadow-md">
            <div className="text-center lg:text-left space-y-1">
                <h4 className="inter font-bold text-[#0f172a]">Your Stack</h4>
                <p className="text-[#94A3B8] text-xs">
                    {
                        addedTech.length === 0 ? 'No technologies selected yet.' : `${addedTech.length} Technology Selected`
                    }
                </p>
            </div>

            <div className="mt-4 space-y-1.5">
                {
                    addedTech.length === 0
                        ?
                        <div className="text-sm text-[#94a3b8] text-center p-6 rounded-xl border border-[#E2E8F0] border-dashed">
                            <span>Your stack is empty.</span>
                        </div>
                        :
                        addedTech.map(tech =>
                            <YourStackCard
                                key={tech.id}
                                tech={tech}
                            ></YourStackCard>)
                }




            </div>
        </div>
    )
}