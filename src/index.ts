import { Sleep } from './sleep';

export default Sleep;

/*
(async () => {

  let sleepOneSecond = Sleep.createSleeper(1000);
  console.log('Before sleep');
  await Sleep.sleep(1000);
  await sleepOneSecond();
  console.log('After sleep');

})();
*/