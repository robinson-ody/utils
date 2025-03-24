import { DateTime } from 'luxon';
import { random_chalk } from './random-chalk';

const get_date = () => {
  return DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
};

interface SystemLogParams {
  message: string;
  log_key: string;
  user?: string;
}

const system_log = (params: SystemLogParams) => {
  const { message, log_key, user } = params;
  const user_str = user ? `${user}` : 'system';
  random_chalk(`${get_date()} | ${user_str} | ${log_key} | ${message}`);
};

export { system_log };
