export function Container({ children }) {
    return (
        <div className="lg:max-w-[65ch] lg:grid lg:grid-cols-2 lg:rounded-xl bg-white">
            {children}
        </div>
    )
}