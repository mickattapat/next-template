type SortText = "lower" | "upper";
type dateLangType = "th" | 'en'

export const fileAccept = "image/png, image/jpeg, image/webp"

export const toNumber = (value: unknown) => {
  const number = Number(value);
  return isNaN(number) ? 0 : number;
};

export const toString = (value: unknown) => {
  const stringValue = String(value);
  return stringValue;
};

export const converterText = (text: unknown, sort: SortText): string => {
  const newTest = String(text);
  if (sort === "upper") {
    return newTest.toUpperCase();
  } else {
    return newTest.toLowerCase();
  }
};

// diff date ago
export const calculateDateTimeAgo = (date: string, lang: dateLangType) => {
  const pastDate: any = new Date(date || '2023-09-29T17:45:38+07:00');
  const currentDate: any = new Date();
  const diffInMilliseconds = currentDate - pastDate;
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  if (diffInDays >= 30) {
    const diffInMonths = diffInDays / 30; // ใช้ 30 วันเป็นหลักประมาณจำนวนเดือน
    return `${Math.floor(diffInMonths)} ${lang !== 'en' ? 'เดือนที่แล้ว' : 'month ago'}`
  } else if (diffInDays >= 1) {
    return `${Math.floor(diffInDays)} ${lang !== 'en' ? 'วันที่แล้ว' : 'days ago'}`
  } else if (diffInHours >= 1) {
    return `${Math.floor(diffInHours)} ${lang !== 'en' ? 'ชั่วโมงที่แล้ว' : 'hour ago'}`
  } else if (diffInMinutes >= 1) {
    return `${Math.floor(diffInMinutes)} ${lang !== 'en' ? 'นาทีที่แล้ว' : 'minute ago'}`
  } else {
    // return `${Math.floor(diffInSeconds)} วินาทีที่แล้ว`
    return `${lang !== 'en' ? 'เมื่อสักครู่' : 'just now'}`
  }
}

export const dateRandomTime = (currentDate: Date) => {
  // สุ่มชั่วโมง นาที และวินาที
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);
  const randomSecond = Math.floor(Math.random() * 60);
  // ตั้งค่าชั่วโมง นาที และวินาที ลงในวัตถุ Date ปัจจุบัน
  currentDate.setHours(randomHour);
  currentDate.setMinutes(randomMinute);
  currentDate.setSeconds(randomSecond);
  // แปลงวัตถุ Date ให้เป็นสตริงรูปแบบ ISO
  const randomCurrentDateTime = currentDate.toISOString();

  return randomCurrentDateTime
}

export const dashToWhiteSpace = (text: string): string => {
  if (!text) {
    return ''
  }
  return text.replace(/-/g, ' ');
}

export const whiteSpaceToDash = (text: string): string => {
  if (!text) {
    return ''
  }
  return text.replace(/\s/g, '-');
}

// ตัดช่องว่าง
export const formatText = (text: string) => {
  if (!text) {
    return 'ไม่พบบทความ'
  }
  return text.replace(/\/|\s|\?/g, "")
}

// users.sort(function (a, b) {
//   if (a.firstname < b.firstname) {
//     return -1;
//   }
//   if (a.firstname > b.firstname) {
//     return 1;
//   }
//   return 0;
// });
