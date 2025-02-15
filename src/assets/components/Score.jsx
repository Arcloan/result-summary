export function Score() {
    return (
        <div className="text-lavander rounded-bl-4xl p-8 rounded-br-4xl lg:rounded-xl bg-gradient-to-b from-(--color-gradientBgStart) to-(--color-gradientBgEnd) grid gap-8">
            <h3 className="text-(--color-lavander) justify-self-center text-xl">Your Result</h3>
            <div className="justify-self-center max-w-max score p-8 rounded-[50%] bg-gradient-to-b from-(--color-gradientCircleStart) to-(--color-gradientCircleEnd)">
                <p className="finalScore text-5xl text-white">76</p>
                <p>of 100</p>
            </div>
            <p className="text-center max-w-[30ch] justify-self-center"><span className="text-white text-xl block text-center">Great</span>You Scored Higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}