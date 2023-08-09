import { IParams } from "@/models/api.model";
import axios, { AxiosResponse } from "axios";

const APICaller = (params: IParams) => {
  let token: string = "";
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token") || "";
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
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error: Error) => error);

    case "POST":
      return api
        .post(path, payload)
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error: Error) => error);

    case "PUT":
      return api
        .put(path, payload)
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error: Error) => error);

    case "DELETE":
      return api
        .delete(path, { data: payload })
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error: Error) => error);

    default:
      return "[API_CALLER]: Missing params.";
  }
};

const methodAPI = {
  get: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "GET", path, port }),
  post: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "POST", path, port }),
  put: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "PUT", path, port }),
  delete: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "DELETE", path, port }),

  getBaseURL: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "GET", path, port }),
  postBaseURL: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "POST", path, port }),
  putBaseURL: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "PUT", path, port }),
  deleteBaseURL: (path: string, params: IParams, port: string) =>
    APICaller({ ...params, method: "DELETE", path, port }),
};

export default methodAPI;
