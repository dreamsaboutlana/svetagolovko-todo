import { Form } from '../../component/form/Form';

import './main.scss';

export const Main = () => (
  <div className="wrapper">
    <Form
      exclude={['firstname']}
      disabled={['email']}
    />
  </div>
);
