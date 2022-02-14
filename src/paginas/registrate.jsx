import { Input } from "ui/input/input";
export function Registrate() {
  return (
    <div className="page-register text-center">
      <h1 className="mb-8">REGISTRATE</h1>
      <form className="w-80 mx-auto text-center">
        <Input placeholder="Usuario" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <button className="p-4 bg-primary rounded">REGISTRARSE</button>
      </form>
    </div>
  );
}
