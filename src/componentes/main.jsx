export function Main(props) {
  const {
    children
  } = props;
  return (
    <main className="mainM">
      <section>
        <input type="text" placeholder="Ubicación ?" />
        <input type="text" placeholder="Que buscas ?" />
        {children}
      </section>
      
    </main>
  );
}


