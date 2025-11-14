
const Button = ({ text, width }) => {
    return (
        <button
            style={{ paddingLeft: `${width}px`, paddingRight: `${width}px` }}
            className="bg-[var(--btn-bg)] cursor-pointer hover:bg-[#5a39e0] mt-10 text-white font-semibold py-4 rounded-md shadow-lg transition uppercase"
        >
            {text}
        </button>
    );
};


export default Button