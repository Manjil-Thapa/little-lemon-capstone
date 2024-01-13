import { render } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

describe('Main Component', () => {
  let result;

  beforeEach(() => {
    result = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
    expect(result.container).toBeDefined();
  });

  it('initializes availableTimes with default values', () => {
    const { container } = result;
    const availableTimes = container.querySelector('.availableSlot');
    expect(availableTimes).toBeDefined();
  });

  it('updates availableTimes based on selected date', () => {
    const { container } = result;
    const updateTimesButton = container.querySelector('.availableSlot');
  });
});
