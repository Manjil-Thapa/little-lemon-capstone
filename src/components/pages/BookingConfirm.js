import { Link } from 'react-router-dom';

const BookingConfirm = () => {
  return (
    <div className='confirm'>
      <h2>Table Reserved</h2>
      <p>
        Thank you for choosing <span>Little Lemon!</span> We look forward to serving
        you a delightful dining experience.
      </p>
      <button>
        <Link to='/'>RETURN HOME</Link>
      </button>
    </div>
  );
};

export default BookingConfirm;
