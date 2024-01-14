import { useEffect, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../bookingAPI';
import { useNavigate } from 'react-router-dom';
import Routing from '../../Routing';

const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimesReducer, []);

  useEffect(() => {
    const fetchInitialData = () => {
      const output = fetchAPI(new Date());
      dispatch({ type: 'SET_TIMES', payload: output });
    };

    fetchInitialData();
  }, []);

  const updateTimes = date => {
    const output = fetchAPI(date);
    dispatch({ type: 'SET_TIMES', payload: output });
  };

  const navigate = useNavigate();
  const formSubmit = formData => {
    if (submitAPI(formData)) {
      navigate('/booking-success');
    }
  };

  return (
    <main className='main'>
      <Routing
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        formSubmit={formSubmit}
      />
    </main>
  );
};

export default Main;
