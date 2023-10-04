let d;

d = new Date();
d = d.toString();
d = new Date(2023, 0, 10, 12, 30, 0);
d = new Date('2023-07-10T12:30:00');
d = new Date('07/10/2023 12:30:00');
d = new Date('2024-09-30');
d = new Date('07-10-2024');

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1666969745);

d = Math.floor(Date.now() / 1000);
  
console.log(d);