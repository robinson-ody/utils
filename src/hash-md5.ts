import crypto from 'crypto';

const hashMD5 = (plainText: string): string => crypto.createHash('md5').update(plainText).digest('hex');

export default hashMD5;
