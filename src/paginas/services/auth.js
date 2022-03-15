import { api } from "paginas/services/api";

export function getLoginServices() {
  return api.get("/registrados");
}
