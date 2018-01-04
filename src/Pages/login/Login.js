import { Form } from '../../component/form/Form';

import './login.scss';

export const Login = (props) => (
  props.isLoading ? <div className="loader"></div> :
    <div>
      <Form
        exclude={['firstname', 'secondname', 'repeat password']}
        submit={props.login}
      />
    </div>
);
