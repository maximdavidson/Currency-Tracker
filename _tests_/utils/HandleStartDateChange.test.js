import { handleStartDateChange } from '@utils/handleStartDateChange';
import { checkDateDifference } from '@utils/checkDateDifference';

jest.mock('@utils/CheckDateDifference');

describe('handleStartDateChange', () => {
  let state;
  let setState;
  let clearMessages;
  let event;

  beforeEach(() => {
    state = {
      startDate: new Date('2023-07-01'),
      endDate: new Date('2023-08-01'),
      dateError: null,
    };
    setState = jest.fn();
    clearMessages = jest.fn();
    event = { target: { value: '2023-07-15' } };
  });

  it('should set new start date and clear dateError if date difference is valid', () => {
    checkDateDifference.mockReturnValue(true);

    const handleChange = handleStartDateChange(state, setState, clearMessages);
    handleChange(event);

    expect(setState).toHaveBeenCalledWith({
      startDate: new Date(event.target.value),
      dateError: null,
    });
    expect(clearMessages).not.toHaveBeenCalled();
  });

  it('should set dateError and call clearMessages if date difference is invalid', () => {
    checkDateDifference.mockReturnValue(false);

    const handleChange = handleStartDateChange(state, setState, clearMessages);
    handleChange(event);

    expect(setState).toHaveBeenCalledWith({
      dateError:
        'The difference between the start date and the current date must be no less than 30 days and no more than 50 days',
    });
    expect(clearMessages).toHaveBeenCalled();
  });
});
