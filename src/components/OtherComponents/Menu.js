import Swal from 'sweetalert2';

const recipes = [
  {
    id: 1,
    title: 'Greek salad',
    price: '$12.99',
    image: 'https://i.ibb.co/68c9bLv/greek-salad.jpg',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons',
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: '$5.99',
    image: 'https://i.ibb.co/317GqZv/Bruchetta.png',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$4.99',
    image: 'https://i.ibb.co/sm6MfcH/desert.jpg',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Menu = () => {
  const handleOrder = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm order',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Order success',
          text: 'Your order has been added',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This week's specials!</h2>
        <button>View Full Menu</button>
      </div>

      <div className='menu-cards'>
        {recipes.map(recipe => (
          <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt={recipe.title} />
            <div className='menu-content'>
              <div className='menu-title'>
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
