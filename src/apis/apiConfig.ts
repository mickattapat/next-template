import { IParams } from "@/models/api.model";
import axios, { AxiosResponse } from "axios";

const APICaller = (params: IParams) => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    var token: any = localStorage.getItem('jwt_admin')
  }
  const api = axios.create({
    baseURL: params?.thirdpartyURL || `${process.env.NEXT_PUBLIC_END_POINT}${params.port ? `:${params.port}` : ""
      }`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${token}`,
    },
  });

  const apiFormData = axios.create({
    baseURL: params?.thirdpartyURL || `${process.env.NEXT_PUBLIC_END_POINT}${params.port ? `:${params.port}` : ""
      }`,
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8",
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${token}`,
    },
  })

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

    case "POST_FORMDATA":
      return apiFormData
        .post(path, payload)
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error) => error.response)

    case "PUT":
      return api
        .put(path, payload)
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error: Error) => error);

    case "PATCH":
      return api
        .put(path, payload)
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error: Error) => error);

    case "PATCH_FORMDATA":
      return apiFormData
        .patch(path, payload)
        .then((response: AxiosResponse) => ({ ...response }))
        .catch((error) => error.response)

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

  getBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "GET", path, thirdpartyURL }),
  postBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "POST", path, thirdpartyURL }),
  postImgBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "POST_FORMDATA", path, thirdpartyURL }),
  putBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "PUT", path, thirdpartyURL }),
  patchBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "PATCH", path, thirdpartyURL }),
  patchImgBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "PATCH_FORMDATA", path, thirdpartyURL }),
  deleteBaseURL: (path: string, params: IParams, thirdpartyURL?: string) => APICaller({ ...params, method: "DELETE", path, thirdpartyURL }),
};

export default methodAPI;
