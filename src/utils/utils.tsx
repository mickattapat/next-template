type SortText = "lower" | "upper";

export const toNumber = (value: any) => {
  const number = Number(value);
  return isNaN(number) ? 0 : number;
};

export const toString = (value: any) => {
  const stringValue = String(value);
  return stringValue;
};

export const converterText = (text: any, sort: SortText): string => {
  const newTest = String(text);
  if (sort === "upper") {
    return newTest.toUpperCase();
  } else {
    return newTest.toLowerCase();
  }
};

// users.sort(function (a, b) {
//   if (a.firstname < b.firstname) {
//     return -1;
//   }
//   if (a.firstname > b.firstname) {
//     return 1;
//   }
//   return 0;
// });
