import { IParams } from "@/models/api.interface.model";
import axios from "axios";

const APICaller = (params: IParams) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    var token: any = localStorage.getItem("token") || "";
  }
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_END_POINT}${
      params.port ? `:${params.port}` : ""
    }`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${token}`,
    },
  });

  const method = params.method ? params.method : "GET";
  const path = params.path ? params.path : "";
  const payload = params.payload ? params.payload : {};

  switch (method) {
    case "GET":
      return api
        .get(path)
        .then((response: any) => ({ ...response }))
        .catch((error: any) => error.response);

    case "POST":
      return api
        .post(path, payload)
        .then((response: any) => ({ ...response }))
        .catch((error: any) => error.response);

    case "PUT":
      return api
        .put(path, payload)
        .then((response: any) => ({ ...response }))
        .catch((error: any) => error.response);

    case "DELETE":
      return api
        .delete(path, { data: payload })
        .then((response: any) => ({ ...response }))
        .catch((error: any) => error.response);

    default:
      return "[API_CALLER]: Missing params.";
  }
};

const methodAPI = {
  get: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "GET", path, port }),
  post: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "POST", path, port }),
  put: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "PUT", path, port }),
  delete: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "DELETE", path, port }),

  getBaseURL: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "GET", path, port }),
  postBaseURL: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "POST", path, port }),
  putBaseURL: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "PUT", path, port }),
  deleteBaseURL: (path: string, params: IParams, port: any) =>
    APICaller({ ...params, method: "DELETE", path, port }),
};

export default methodAPI;
