import { inspect } from 'util';

const deepLog = (log: any) => {
  console.log(
    inspect(log, {
      showHidden: false,
      depth: null,
      colors: true,
      maxArrayLength: 1000,
    }),
  );
};

export default deepLog;
