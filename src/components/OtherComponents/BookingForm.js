import { useState } from 'react';

const BookingForm = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    props.dispatch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.submitForm(event);
  };

  return (
    <section className='form-section'>
      <form onSubmit={handleSubmit}>
        <fieldset className='form-container'>
          <div className='form-top'>
            <div>
              <div>
                <label htmlFor='name'>Name *</label>
                <input
                  id='name'
                  value={formData.name}
                  onChange={event => {
                    handleChange('name', event.target.value);
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor='email'>Email *</label>
                <input
                  id='email'
                  value={formData.email}
                  onChange={event => handleChange('email', event.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor='guests'>Number of guests *</label>
                <input
                  id='guests'
                  type='number'
                  min='1'
                  max='10'
                  placeholder='1'
                  value={formData.guests}
                  onChange={e => handleChange('guests', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor='res-date'>Choose Date *</label>
                <input
                  id='res-date'
                  value={formData.date}
                  type='date'
                  onChange={event => {
                    handleChange('date', event.target.value);
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor='res-time'>Choose Time *</label>
                <select
                  id='res-time'
                  value={formData.time}
                  onChange={e => handleChange('time', e.target.value)}
                  required
                >
                  <option value=''>Select Time</option>
                  {props.availableTimes.availableTimes.map(availableTimes => {
                    return <option key={availableTimes}>{availableTimes}</option>;
                  })}
                </select>
              </div>

              <div>
                <label htmlFor='occasion'>Occasion</label>
                <select
                  id='occasion'
                  key={formData.occasion}
                  value={formData.occasion}
                  onChange={e => handleChange('occasion', e.target.value)}
                >
                  <option></option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>
            </div>
          </div>

          <div className='form-btm'>
            <div>
              <label htmlFor='requests'>Special Requests</label>
              <textarea
                id='requests'
                name='requests'
                placeholder='Dietary restrictions or allergies?'
                rows='15'
              ></textarea>
            </div>

            <div className='btnReceive'>
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
