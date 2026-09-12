export interface YourStackProps {
    prop: string
}

export default function YourStack({ prop }: YourStackProps) {

    return (
        <div className="lg:col-span-3 h-fit p-5 rounded-2xl border border-[#f1f5f9] shadow-md">
            <div className="text-center lg:text-left space-y-1">
                <h4 className="inter font-bold text-[#0f172a]">Your Stack</h4>
                <p className="text-[#94A3B8] text-xs">No technologies selected yet.</p>
            </div>

            <div className="mt-4">
                <div className="text-sm text-[#94a3b8] text-center p-6 rounded-xl border border-[#E2E8F0] border-dashed">
                    <span>Your stack is empty.</span>
                </div>

            </div>
        </div>
    )
}