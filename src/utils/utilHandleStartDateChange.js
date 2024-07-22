import { checkDateDifference } from './utilCheckDateDifference';

export const handleStartDateChange =
  (state, setState, clearMessages) => (e) => {
    const newStartDate = new Date(e.target.value);
    if (checkDateDifference(newStartDate, state.endDate)) {
      setState({ startDate: newStartDate, dateError: null });
    } else {
      setState({
        dateError:
          'The difference between the start date and the current date must be no less than 30 days and no more than 50 days',
      });
      clearMessages();
    }
  };
