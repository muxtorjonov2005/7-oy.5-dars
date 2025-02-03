import React from 'react';
import useUserAuth from '../store/useUserAuth';

function UserAuth() {
  const { user, login, logout } = useUserAuth()

  return (
    <div>
      <h1>Avtorizatsiya Ilovasi</h1>
      {user ? (
        <div>
          <p>Xush kelibsiz, {user.name}!</p>
          <button onClick={logout}>Chiqish</button>
        </div>
      ) : (
        <div>
          <button onClick={() => login({ name: 'Foydalanuvchi' })}>Kirish</button>
        </div>
      )}
    </div>
  );
}

export default UserAuth
