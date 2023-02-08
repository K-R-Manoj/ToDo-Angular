import { environment } from "src/environments/environment";

export class API {
    public static INTERMEDIATE_SERVER_URL = environment.intermediate_server_url;
    public static BACKEND_SERVER_URL = environment.backend_server_url;

    // Authenticate
    public static INTERMEDIATE_SERVER_LOGIN = `${API.INTERMEDIATE_SERVER_URL}/authenticate`;

    //  Notes
    public static GET_NOTES     = `${API.BACKEND_SERVER_URL}/notes`;
    public static ADD_NOTE      = `${API.BACKEND_SERVER_URL}/notes`;
    public static PATCH_NOTE    = `${API.BACKEND_SERVER_URL}/notes`;
    public static DELETE_NOTE   = (_id:string) => `${API.BACKEND_SERVER_URL}/notes/${_id}`;

    // Trash
    public static GET_TRASH     = `${API.BACKEND_SERVER_URL}/trash`;
    public static RETRIVE_NOTE = `${API.BACKEND_SERVER_URL}/trash`;
    public static DELETE_TRASH  = (_id:string) => `${API.BACKEND_SERVER_URL}/trash/${_id}`;
}