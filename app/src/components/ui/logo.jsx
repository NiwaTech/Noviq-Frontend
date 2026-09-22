import { COLORS } from "@/lib/constants";

export default function Logo( {className=''} ) {
    return (
        <div
            className={`flex size-7 items-center justify-center rounded-full ${className} text-[13px] font-semibold text-white`}
            style={{ backgroundColor: COLORS.primary }}
        >
            N
        </div>
    )
}