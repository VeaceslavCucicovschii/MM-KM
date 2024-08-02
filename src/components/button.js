export function Button({ variant, text }) {
    if (variant === "secondary") {
        return (
            <button className="flex px-7 py-3 bg-transparent border border-gray-600">
                <p className="text-gray-600 uppercase font-krub">{text}</p>
            </button>
        )
    }

    return (
        <>
            <button className="flex px-7 py-3 bg-gradient-to-r from-[#5495BD] to-[#306994] shadow-xl shadow-[#275680]/20">
                <p className="text-white uppercase font-krub">{text}</p>
            </button>
        </>
    )
}