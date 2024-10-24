const num = (p: number, n: number): string => {
  return '0'
  // return String(n).padStart(p, "0")
};
const random = ():string => {
  let r = ''
  for (let i = 0; i < 3; i++) {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    r = r + String(a > b ? Math.floor(Math.random() * (a - b + 1)) + b : Math.floor(Math.random() * (b - a + 1)) + a);
  }
  return r
};

const code = (): string => {
  const datenow = Date.now();
  const newdate = new Date(datenow);
  const year = newdate.getFullYear();
  const month = newdate.getMonth() + 1;
  const day = newdate.getDate();
  const hours = newdate.getHours();
  const minutes = newdate.getMinutes();
  const seconds = newdate.getSeconds();
  const milliseconds = newdate.getMilliseconds();
  return `${num(4, year)}${num(2, month)}${num(2, day)}${num(2, hours)}${num(2, minutes)}${num(2, seconds)}${num(4, milliseconds)}${num(4, datenow)}${random()}`;
};

export default code;





































