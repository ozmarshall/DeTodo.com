export function Button(props) {
  const { children = "", className = "", onChange = () => {} } = props;

  return (
    <button
      className={`p-4 bg-primary rounded  text-slate-100 ${className}`}
      onChange={onChange}
    >
      {children}
    </button>
  );
}
