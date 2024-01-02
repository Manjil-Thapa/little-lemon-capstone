import './AppContainer.css'; // Import your stylesheet

const AppContainer = ({ children }) => {
  return <div className='app-grid'>{children}</div>;
};

export default AppContainer;
