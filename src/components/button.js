import button_cloud_img_1 from "../images/button_cloud_img_1.png"
import button_cloud_img_2 from "../images/button_cloud_img_2.png"

export function Button({ variant, text }) {
    if (variant === "secondary") {
        return (
            <button className="flex px-7 py-3 bg-transparent border text-gray-600 border-gray-600 duration-300 hover:bg-gray-600 hover:shadow-xl hover:text-white">
                <p className="uppercase font-krub">{text}</p>
            </button>
        )
    }

    return (
        <>
            <button className="overflow-hidden relative group flex px-7 py-3 bg-gradient-to-r from-[#5495BD] to-[#306994] shadow-xl shadow-[#275680]/20">
                <img src={button_cloud_img_1} className="absolute brightness-110 -left-full -top-20 duration-300 group-hover:-left-24 group-hover:-top-14"></img>
                <img src={button_cloud_img_2} className="absolute brightness-110 -right-full -bottom-20 duration-300 group-hover:-right-16 group-hover:-bottom-14"></img>
                <p className="text-white uppercase font-krub">{text}</p>
            </button>
        </>
    )
}