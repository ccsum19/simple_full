import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/users');

        const responseData = await response.json();

        if (!response.ok) {
          console.log(responseData.message);
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
    };
    sendRequest();
  }, []);
  
  return (
    <React.Fragment>
      {loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>);
};

  // const USERS = [
  //   {
  //     id: 'u1',
  //     name: 'Buzz Lightyear',
  //     image:
  //       'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/58675136_10156465562673020_8357413523680133120_n.png?_nc_cat=104&ccb=1-7&_nc_sid=973b4a&_nc_ohc=_Ve8rbOv39QAX-0Inm8&_nc_ht=scontent-atl3-2.xx&oh=00_AfDYuQmOG-0r_Wiupevlk3G-f2EboRWSdk3hJmIRN9FsJQ&oe=638A9AA6',
  //     places: 1
  //   },
  //   {
  //     id: 'u2',
  //     name: 'Woody',
  //     image:
  //       'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/58442613_10157322613570555_1070693750134538240_n.png?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=vlbC9Lkkfe4AX8STZDM&_nc_ht=scontent-atl3-2.xx&oh=00_AfAgrKFyXljfP_kMkQnizMuqlfl-luz4xTB8g1Dr1xRqWQ&oe=638A885E',
  //     places: 1
  //   }
  // ];

//   return <UsersList items={USERS} />;
// };

export default Users;
