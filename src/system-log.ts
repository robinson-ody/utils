import { DateTime } from 'luxon';
import { random_chalk } from './random-chalk';

const get_date = () => DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');

interface SystemLogParams {
  message: string;
  log_key: string;
}

const system_log = (params: SystemLogParams) => {
  random_chalk(`${get_date()} | ${params.log_key} | ${params.message}`);
};

export { system_log };
