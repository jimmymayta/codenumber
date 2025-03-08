const num = (n: number, d: number): string => {
  return ('0'.repeat(Math.abs(n - d.toString().length)) + d).slice(-n);
};

const randomnumber = (): string => {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return String(a > b ? Math.floor(Math.random() * (a - b + 1)) + b : Math.floor(Math.random() * (b - a + 1)) + a);
}

const random = (n: number): string => {
  let r = ''
  for (let i = 0; i < n; i++) {
    r += randomnumber();
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
  return `${num(4, year)}${num(2, month)}${num(2, day)}${num(2, hours)}${num(2, minutes)}${num(2, seconds)}${num(4, milliseconds)}${num(13, datenow)}${random(3)}`;
};

export default code;

