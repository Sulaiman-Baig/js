const d = new Date(2023, 10, 9, 7, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is Febuary');
    break;
  case 3:
    console.log('It is March');
    break;

  default:
    console.log('It is not Jan,Feb or March');
}

switch (true) {
  case hour < 12:
    console.log('Good Mornning');
    break;
  case hour < 18:
    console.log('Good AfterNoon');
    break;
  default:
    console.log('Good Night');
}
