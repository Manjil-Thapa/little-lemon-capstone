import { Routes, Route } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';
import Hero from '../sections/Hero';
import Routing from '../../Routing';

const Main = () => {
  // const [availableTimes, dispatchAvailableTimes] = useReducer(
  //   availableTimesReducer,
  //   []
  // );

  // const updateTimes = async selectedDate => {
  //   try {
  //     const timesForSelectedDate = await fetchAPI(selectedDate);
  //     dispatchAvailableTimes({ type: 'SET_TIMES', payload: timesForSelectedDate });
  //   } catch (error) {
  //     console.error('Error fetching available times:', error);
  //   }
  // };

  // useEffect(() => {
  //   const initializeTimes = async () => {
  //     try {
  //       const initialTimes = await fetchAPI(new Date());
  //       dispatchAvailableTimes({ type: 'SET_TIMES', payload: initialTimes });
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   initializeTimes();
  // }, []);

  return (
    <main className='main'>
      <Routing />
    </main>
  );
};

export default Main;

// const seedRandom = function (seed) {
//   const m = 2 ** 35 - 31;
//   const a = 185882;
//   let s = seed % m;
//   return function () {
//     return (s = (s * a * a) % m) / m;
//   };
// };

// const submitAPI = function (formData) {
//   return true;
// };

// const fetchAPI = function (date) {
//   let result = [];
//   let random = seedRandom(date.getDate());
//   for (let i = 13; i <= 20; i++) {
//     if (random() < 0.5) {
//       result.push(i + ':00');
//     }
//     if (random() > 0.5) {
//       result.push(i + ':30');
//     }
//   }
//   return result;
// };

// const Main = () => {
//   const initialState = { availableTimes: fetchAPI(new Date()) };
//   const [state, dispatch] = useReducer(updateTimes, initialState);

//   function updateTimes(state, date) {
//     return {
//       availableTimes: fetchAPI(new Date()),
//     };
//   }

//   const navigate = useNavigate();

//   function submitForm(formData) {
//     if (submitAPI(formData)) {
//       navigate('/confirmed');
//     }
//   }

//   return (
//     <main className='main'>
//       <Routes>
//         <Route path='/' element={<Header />} />
//         <Route
//           path='/booking'
//           element={
//             <BookingForm
//               availableTimes={state}
//               dispatch={dispatch}
//               submitForm={submitForm}
//             />
//           }
//         />
//         <Route path='/confirmed' element={<BookingConfirm />} />
//       </Routes>

//       <Menu />
//       <Testimonials />
//       <About />
//     </main>
//   );
// };

// export default Main;

// const fetchAPI = date => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//       resolve(availableTimes);
//     }, 500);
//   });
// };

// const availableTimesReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_TIMES':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const Main = () => {
// const [availableTimes, dispatchAvailableTimes] = useReducer(
//   availableTimesReducer,
//   []
// );

// const updateTimes = async selectedDate => {
//   try {
//     const timesForSelectedDate = await fetchAPI(selectedDate);
//     dispatchAvailableTimes({ type: 'SET_TIMES', payload: timesForSelectedDate });
//   } catch (error) {
//     console.error('Error fetching available times:', error);
//   }
// };

// useEffect(() => {
//   const initializeTimes = async () => {
//     try {
//       const initialTimes = await fetchAPI(new Date());
//       dispatchAvailableTimes({ type: 'SET_TIMES', payload: initialTimes });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   initializeTimes();
// }, []);

// return (
//  <main className='main'>
/* <Routes>
        <Route path='/' element={<Hero />} />
        <Route
          path='/booking'
          element={
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
          }
        />
      </Routes> */
//  <Routing />
//</main>
//);
//};

// export default Main;
