const Button = (props) => {
    const { text } = props;
  return (
    <button className="font-dosis font-normal text-xl text-white hover:text-black bg-none hover:bg-white border-2 rounded-xl border-white py-3 px-5 tracking-widest transition">
        {text}
    </button>
  )
}

export default Button