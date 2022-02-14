export function Input(props) {
  const {
    placeholder = "",
    type = "text",
    className = "",
    onChange = () => {},
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`text-gray-900 px-4 py-4 border border-gray-400 rounded-2xl focus:outline-none focus:border-gray-900 ${className}`}
      onChange={onChange}
    />
  );
}
