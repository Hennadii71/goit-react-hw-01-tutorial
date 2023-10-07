import { Counter } from 'components/Counter/Counter';
import { Profile } from './components/Profile/Profile';
import { Button } from 'components/Button/Button';

export const App = () => {
  return (
    <div>
      <Profile />
      <Button />
      <Counter />
    </div>
  );
};
