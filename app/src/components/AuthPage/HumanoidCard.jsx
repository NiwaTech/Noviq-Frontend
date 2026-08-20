export default function HumanoidCard() {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-violet-500/30 blur-3xl -z-0 translate-y-4 " />
            <img
                src="/Humanoid.png"
                alt="Humanoid"
                className="relative z-50 "
            />
        </div>
    )
}