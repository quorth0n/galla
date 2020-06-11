import React from 'react';

import UploadIcon from './UploadIcon';

const Avatar = ({ user }) => {
  const [avatarURL, setAvatarURL] = React.useState();
  return (
    <div className="relative">
      {avatarURL || user.avatar ? (
        <img
          alt={user.username}
          src={avatarURL ?? user.avatar}
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20"
          style={{ maxWidth: '150px' }}
        />
      ) : (
        <i
          className="fas fa-user-circle shadow-xl rounded-full align-middle border-none text-center -mt-12"
          style={{ fontSize: '10rem' }}
        />
      )}
      <UploadIcon
        name="avatar"
        style={{
          top: '-4rem',
          right: '-3.75rem',
        }}
        onChange={(img) => setAvatarURL(img)}
      />
    </div>
  );
};
export default Avatar;
