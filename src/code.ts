const random = (): number => {
  const data: number[] = [
    Math.round(Math.random() * (9 - 1)) + 1,
    Math.round(Math.random() * (9 - 1)) + 1,
  ].sort();
  return Math.round(Math.random() * (data[1] - data[0])) + data[0];
};

const num = (n: number, d: number): string => {
  return ('0'.repeat(Math.abs(n - d.toString().length)) + d).slice(-n);
};

const number_random = (n: number): string => {
  return Array.from({ length: n }, random).join('');
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
  return `${num(4, year)}-${num(2, month)}-${num(2, day)} ${num(2, hours)}:${num(2, minutes)}:${num(2, seconds)}.${num(4, milliseconds)} ${num(13, datenow)} ${number_random(3)}`;
};

export default code;
