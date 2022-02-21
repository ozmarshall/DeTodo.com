import { Input } from "ui/input/input";
import { Button } from "antd";

export function Login() {
  return (
    <div className="page-login text-center">
      <h1 className="mb-8">LOGIN</h1>
      <form
        className="w-80 mx-auto text-center"
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submit!!!!");
        }}
      >
        <Input placeholder="Usuario / alias" className="w-full mb-8" />
        <Input type="password" placeholder="Password" className="w-full mb-8" />
        <Input type="password" placeholder="Comfirme Password" className="w-full mb-8" />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          onClick={() => {
            console.log("click!!!");
          }}
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}
