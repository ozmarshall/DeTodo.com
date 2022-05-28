export function AreaText(props) {
  const { children = "", className = "", rows = "", onChange = () => {} } = props;

  return (
    <textarea
    onChange={onChange}
      
      rows={rows}
      className={`text-gray-900  border border-gray-400 rounded-2xl focus:outline-none focus:border-gray-900 text-center text-inherit mb-10 w-full ${className}`}
    >
      {children}
    </textarea>
  );
}


