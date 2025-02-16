const bgColors = {
    red: "bg-(--color-red)/20",
    yellow: "bg-(--color-yellow)/20",
    green: "bg-(--color-green)/20",
    blue: "bg-(--color-blue)/20",
}

const textColors = {
    red: "text-(--color-red)",
    yellow: "text-(--color-yellow)",
    green: "text-(--color-green)",
    blue: "text-(--color-blue)",
}

export function Card({ imgUrl, title, score, color }) {
    return (
        <div className={`p-2 flex justify-between ${bgColors[color]} rounded`} >
            <div className="category flex gap-2">
                <img src={import.meta.env.BASE_URL + imgUrl} alt="" />
                <p className={textColors[color]}>{title}</p>
            </div>
            <p className="text-darkGrayBlue/40">
                <span className="text-darkGrayBlue">{score}</span> / 100
            </p>
        </div>
    )
}