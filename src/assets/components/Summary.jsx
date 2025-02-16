import { Card } from "./Card.jsx"

export function Summary() {
    return (
        <div className="p-6 grid gap-4">
            <h3 className="text-(--color-darkGrayBlue)">Summary</h3>
            <Card imgUrl="/icon-reaction.svg" title="Reaction" score={80} color="red"></Card>
            <Card imgUrl="/icon-memory.svg" title="Memory" score={92} color="yellow"></Card>
            <Card imgUrl="/icon-verbal.svg" title="Verbal" score={61} color="green"></Card>
            <Card imgUrl="/icon-visual.svg" title="Visual" score={73} color="blue"></Card>
            <button className="p-3 rounded-full block text-center h-max mt-auto bg-(--color-darkGrayBlue) text-white hover:cursor-pointer hover:bg-gradient-to-b from-(--color-gradientBgStart) to-(--color-gradientBgEnd)">Continue</button>
        </div>
    )
}