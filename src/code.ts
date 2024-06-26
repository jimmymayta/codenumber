const zeronumber = (numbersize: number, number: number): string => {
  const numberstring = String(number);
  return numberstring.padStart(numbersize, "0");
};

const code = (): string => {
  const datenow = Date.now();
  const newdate = new Date(datenow);
  const year = zeronumber(4, newdate.getFullYear());
  const month = zeronumber(2, newdate.getMonth() + 1);
  const day = zeronumber(2, newdate.getDate());
  const hours = zeronumber(2, newdate.getHours());
  const minutes = zeronumber(2, newdate.getMinutes());
  const seconds = zeronumber(2, newdate.getSeconds());
  const milliseconds = zeronumber(4, newdate.getMilliseconds());
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${datenow}`;
};

export default code;
