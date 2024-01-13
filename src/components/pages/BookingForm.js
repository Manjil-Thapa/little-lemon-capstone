// import { useState } from 'react';

import { useState } from 'react';

// const BookingForm = props => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     date: '',
//     time: '',
//     guests: '',
//     occasion: '',
//   });

//   const handleChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     props.dispatch(value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     props.submitForm(event);
//   };

//   return (
//     <section className='form-section'>
//       <form onSubmit={handleSubmit}>
//         <fieldset className='form-container'>
//           <div className='form-top'>
//             <div>
//               <div>
//                 <label htmlFor='name'>Name *</label>
//                 <input
//                   id='name'
//                   value={formData.name}
//                   onChange={event => {
//                     handleChange('name', event.target.value);
//                   }}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor='email'>Email *</label>
//                 <input
//                   id='email'
//                   value={formData.email}
//                   onChange={event => handleChange('email', event.target.value)}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor='guests'>Number of guests *</label>
//                 <input
//                   id='guests'
//                   type='number'
//                   min='1'
//                   max='10'
//                   placeholder='1'
//                   value={formData.guests}
//                   onChange={e => handleChange('guests', e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <div>
//                 <label htmlFor='res-date'>Choose Date *</label>
//                 <input
//                   id='res-date'
//                   value={formData.date}
//                   type='date'
//                   onChange={event => {
//                     handleChange('date', event.target.value);
//                   }}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor='res-time'>Choose Time *</label>
//                 <select
//                   id='res-time'
//                   value={formData.time}
//                   onChange={e => handleChange('time', e.target.value)}
//                   required
//                 >
//                   <option value=''>Select Time</option>
//                   {props.availableTimes.availableTimes.map(availableTimes => {
//                     return <option key={availableTimes}>{availableTimes}</option>;
//                   })}
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor='occasion'>Occasion</label>
//                 <select
//                   id='occasion'
//                   key={formData.occasion}
//                   value={formData.occasion}
//                   onChange={e => handleChange('occasion', e.target.value)}
//                 >
//                   <option></option>
//                   <option>Birthday</option>
//                   <option>Anniversary</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className='form-btm'>
//             <div>
//               <label htmlFor='requests'>Special Requests</label>
//               <textarea
//                 id='requests'
//                 name='requests'
//                 placeholder='Dietary restrictions or allergies?'
//                 rows='15'
//               ></textarea>
//             </div>

//             <div className='btnReceive'>
//               <input
//                 aria-label='On Click'
//                 type='submit'
//                 value='Make Your Reservation'
//               />
//             </div>
//           </div>
//         </fieldset>
//       </form>
//     </section>
//   );
// };

// export default BookingForm;

// with formik

// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   guests: Yup.number()
//     .min(1, 'Must be at least 1')
//     .required('Number of guests is required'),
// });

// const BookingForm = props => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       guests: '',
//     },
//     validationSchema,
//     onSubmit: async values => {
//       try {
//         await fetch('/api/submit-form', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(values),
//         });
//       } catch (error) {
//         console.error('Error submitting form:', error.message);
//       }
//     },
//   });

//   return (
//     <section className='form-section'>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor='name'>Name:</label>
//         <input
//           type='text'
//           id='name'
//           name='name'
//           onChange={formik.handleChange}
//           value={formik.values.name}
//         />

//         <label htmlFor='email'>Email:</label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />

//         <label htmlFor='guests'>Number of Guests:</label>
//         <input
//           type='number'
//           id='guests'
//           name='guests'
//           onChange={formik.handleChange}
//           value={formik.values.guests}
//         />

//         <button type='submit'>Submit</button>
//       </form>

//       {/* <form>
//         <label>occasion</label>
//         <select>
//           {availableTimes.map(avail => (
//             <option>{avail}</option>
//           ))}
//         </select>
//       </form> */}
//     </section>
//   );
// };

// export default BookingForm;

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    date: '',
    time: '',
    guests: '',
    occasion: 'Birthday',
    request: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'date') {
      updateTimes(value);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <section className='form-section'>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>Name</label>
        <input
          id='firstName'
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          name='date'
          value={formData.date}
          onChange={handleInputChange}
        />

        <label htmlFor='res-time'>Choose time</label>
        <select id='res-time ' onChange={handleInputChange} name='time'>
          {availableTimes.map(slot => (
            <option key={slot}>{slot}</option>
          ))}
        </select>

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
        />

        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          name='occasion'
          value={formData.occasion}
          onChange={handleInputChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <label htmlFor='request'>Special Requests</label>
        <textarea
          id='request'
          name='request'
          value={formData.request}
          onChange={handleInputChange}
        ></textarea>

        <input type='submit' value='Make Your reservation' />
      </form> */}
      FORM
    </section>
  );
};

export default BookingForm;
