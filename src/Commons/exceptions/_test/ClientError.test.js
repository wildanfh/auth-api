const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('should throw error when dirctly use it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});