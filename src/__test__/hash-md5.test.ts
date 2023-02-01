import hashMD5 from '../hash-md5';

it('should return a hash', () => {
  const hash = hashMD5('test');
  expect(hash).toBe('098f6bcd4621d373cade4e832627b4f6');
});
