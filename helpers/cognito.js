import React from 'react';
import { Auth } from 'aws-amplify';

import withAmplify from './withAmplify';

const CognitoContext = React.createContext({ user: null, setUser: () => {} });
export { CognitoContext };

const CognitoProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const fetchUser = async () => setUser(await Auth.currentAuthenticatedUser());
  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <CognitoContext.Provider value={{ user }}>
      {children}
    </CognitoContext.Provider>
  );
};
export default withAmplify(CognitoProvider);
