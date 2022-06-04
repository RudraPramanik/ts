type MyBool = true | false;

type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const obj = {
  name: 'rudra',
};
function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}
console.log(wrapInArray);
