import { useState } from 'react';

const BookingForm = props => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleChange = event => {
    setDate(event);
    props.dispatch(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.submitForm(event);
  };
  return (
    <section className='form-section'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor='res-date'>Choose Date</label>
            <input
              id='res-date'
              value={date}
              type='date'
              onChange={event => {
                handleChange(event.target.value);
              }}
              required
            />
          </div>

          <div>
            <label htmlFor='res-time'>Choose Time</label>
            <select
              id='res-time'
              value={time}
              onChange={e => setTime(e.target.value)}
            >
              <option value=''>Select Time</option>
              {props.availableTimes.availableTimes.map(availableTimes => {
                return <option key={availableTimes}>{availableTimes}</option>;
              })}
            </select>
          </div>

          <div>
            <label htmlFor='guests'>Number of garlicuests</label>
            <input
              id='guests'
              type='number'
              min='1'
              max='10'
              placeholder='1'
              value={guests}
              onChange={e => setGuests(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='occasion'>Occasion</label>
            <select
              id='occasion'
              key={occasion}
              value={occasion}
              onChange={e => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className='btnReceive'>
            <input
              aria-label='On Click'
              type='submit'
              value='Make Your Reservation'
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
