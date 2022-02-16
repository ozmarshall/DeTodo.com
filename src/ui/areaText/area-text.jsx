export function AreaText(props) {
  const { children = "", className = "", cols = "", rows = "" } = props;

  return (
    <textarea
      cols={cols}
      rows={rows}
      className={`text-gray-900  border border-gray-400 rounded-2xl focus:outline-none focus:border-gray-900 text-center text-inherit mb-10 ${className}`}
    >
      {children}
    </textarea>
  );
}


