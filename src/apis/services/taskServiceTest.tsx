// import apiConfig from "../apiConfig";
// const taskService = {
//   getSearchTest: function (name) {
//     try {
//       return apiConfig.get(
//         `task?search=${name}`,
//         {},
//         process.env.NEXT_PUBLIC_PORT_TARGET
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
//   getScanTargetTest: function () {
//     try {
//       return apiConfig.get(
//         "scanTargetsList",
//         {},
//         process.env.NEXT_PUBLIC_PORT_TARGET
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
//   deleteTest: function (id) {
//     try {
//       return apiConfig.delete(
//         `task/${id}`,
//         {},
//         process.env.NEXT_PUBLIC_PORT_TARGET
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
//   postTest: function (payload) {
//     try {
//       return apiConfig.post(
//         "task",
//         { payload: payload },
//         process.env.NEXT_PUBLIC_PORT_TARGET
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
//   putTest: function (id, payload) {
//     try {
//       return apiConfig.put(
//         `task/${id}`,
//         { payload: payload },
//         process.env.NEXT_PUBLIC_PORT_TARGET
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
//   putStarTest: function (id) {
//     try {
//       return apiConfig.put(
//         `control/start/${id}`,
//         {},
//         process.env.NEXT_PUBLIC_PORT_TARGET
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
// };

// export default taskService;
