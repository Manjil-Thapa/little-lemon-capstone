import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  it('renders booking form texts', () => {
    render(
      <BookingForm
        availableTimes={['13:00', '13:30']}
        updateTimes={() => {}}
        formSubmit={() => {}}
      />
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
  });

  it('calls updateTimes when date input changes', () => {
    const updateTimesMock = jest.fn();
    render(
      <BookingForm
        availableTimes={['13:00', '13:30']}
        updateTimes={updateTimesMock}
        formSubmit={() => {}}
      />
    );

    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: '2022-01-15' },
    });

    expect(updateTimesMock).toHaveBeenCalledWith(expect.any(Date));
  });

  it('calls formSubmit when form is submitted', () => {
    const formSubmitMock = jest.fn();
    render(
      <BookingForm
        availableTimes={['13:00', '13:30']}
        updateTimes={() => {}}
        formSubmit={formSubmitMock}
      />
    );

    fireEvent.submit(screen.getByTestId('bookingForm'));

    expect(formSubmitMock).toHaveBeenCalled();
  });
});
