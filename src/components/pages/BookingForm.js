import { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes, formSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'None',
    request: '',
  });

  const getTimeOptions = () => {
    return availableTimes.map(slot => (
      <option value={slot} key={slot}>
        {slot}
      </option>
    ));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'date') {
      const date = new Date(value);
      updateTimes(date);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    formSubmit();
    console.log(formData);
  }

  return (
    <section className='form-section'>
      <form data-testid='bookingForm' onSubmit={handleSubmit}>
        <fieldset className='form-container'>
          <div className='form-top'>
            <div>
              <label htmlFor='firstName'>Name</label>
              <input
                id='firstName'
                type='text'
                name='firstName'
                value={formData.name}
                onChange={handleInputChange}
                minLength={2}
                required
              />

              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor='guests'>Number of guests</label>
              <input
                type='number'
                placeholder='1'
                min='1'
                max='10'
                id='guests'
                name='guests'
                value={formData.guests}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor='date'>Choose date</label>
              <input
                type='date'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleInputChange}
                required
              />

              <label htmlFor='time'>Choose time</label>
              <select
                id='time'
                name='time'
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                {getTimeOptions()}
              </select>

              <label htmlFor='occasion'>Occasion</label>
              <select
                id='occasion'
                name='occasion'
                value={formData.occasion}
                onChange={handleInputChange}
              >
                <option value='none'>None</option>
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
                <option value='other'>Other</option>
              </select>
            </div>
          </div>

          <div className='form-btm'>
            <div>
              <label htmlFor='request'>Special Requests</label>
              <textarea
                id='request'
                name='request'
                value={formData.request}
                onChange={handleInputChange}
                rows='15'
              ></textarea>
            </div>

            <div className='btn-reservation'>
              <input
                aria-label='On Click'
                type='submit'
                value='Make Your Reservation'
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
