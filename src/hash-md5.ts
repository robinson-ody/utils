import crypto from 'crypto';

const hash_md5 = (string: string): string => crypto.createHash('md5').update(string).digest('hex');

export default hash_md5;
