import "./main.scss";

export function Main(props) {
  const { children } = props;
  return <main className="mainM p-6">{children}</main>;
}
