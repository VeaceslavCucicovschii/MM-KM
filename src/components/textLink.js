export function TextLink({ text }) {
    return (
        <a class="group text-gray-600 transition-all duration-300 ease-in-out" href="#">
            <span class="bg-left-bottom bg-gradient-to-r from-gray-600 to-gray-600 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                {text}
            </span>
        </a>
    )
}