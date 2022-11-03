import { UsuarioLogin } from "./usuario";

export interface Sesion {
    sesionActiva: boolean;
    usuarioActivo?: UsuarioLogin;
}