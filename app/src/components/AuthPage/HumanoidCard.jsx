import Image from "next/image";

export default function HumanoidCard() {
    return (
        <figure className="relative">
            <div className="absolute inset-0 bg-violet-500/30 blur-3xl -z-0 translate-y-4 " />
            <Image
                src="/Humanoid.png"
                alt="Humanoid"
                width={420}
                height={420}
                className="relative z-50"
            />
        </figure>
    )
}