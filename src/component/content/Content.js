import { Numbers } from '../numbers/Numbers';
import { Counter } from '../counter/Counter';
import { UsersList } from '../usersList/UsersList';
import { Accordion } from '../accordion/Accordion';

import './content.scss';

export const Content = () => (
  <main className="main">

    <Numbers from={5} to={7} even />
    <Counter />
    <UsersList
      users={
        [
          { name: 'Poul', fname: 'Willson', age: 23 },
          { name: 'Sarah', fname: 'Tomson', age: 18 },
          { name: 'Andrey', fname: 'Jons', age: 56 }
        ]
      }
    />
    <Accordion />

  </main>
);
