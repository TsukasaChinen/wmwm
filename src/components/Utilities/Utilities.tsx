export const resultMin = (
  assignWat: number,
  assignMin: number,
  assignSec: number,
  useWat: number,
  result: 'min' | 'sec'
): number => {
  const convertSec: number = (assignWat * (assignMin * 60 + assignSec)) / useWat;

  const min: number = Math.floor(convertSec / 60);

  const sec: number = Math.floor(convertSec % 60);

  return result === 'min' ? min : sec;
};
