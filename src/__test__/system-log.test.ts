import { system_log } from '../system-log';
import { random_chalk } from '../random-chalk';

// Mock the random_chalk function
jest.mock('../random-chalk', () => {
  return {
    random_chalk: jest.fn(),
  };
});

describe('system_log', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call random_chalk with formatted log message', () => {
    // Arrange
    const log_params = {
      message: 'Test message',
      log_key: 'TEST',
    };

    // Act
    system_log(log_params);

    // Assert
    expect(random_chalk).toHaveBeenCalledTimes(1);
    expect(random_chalk).toHaveBeenCalledWith(
      expect.stringMatching(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \| TEST \| Test message$/),
    );
  });

  it('should include the correct log key in the message', () => {
    // Arrange
    const log_params = {
      message: 'Another message',
      log_key: 'DEBUG',
    };

    // Act
    system_log(log_params);

    // Assert
    expect(random_chalk).toHaveBeenCalledWith(expect.stringContaining('| DEBUG |'));
  });
});
