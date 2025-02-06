import React from 'react';
import useUserAuth from '../store/useUserAuth';

function UserAuth() {
  const { user, login, logout } = useUserAuth()

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Avtorizatsiya Ilovasi</h1>
      {user ? (
        <div className="text-center">
          <p className="text-lg mb-4">Xush kelibsiz, {user.name}!</p>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={logout}>Chiqish</button>
        </div>
      ) : (
        <div className="text-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => login({ name: 'Foydalanuvchi' })}>Kirish</button>
        </div>
      )}
    </div>
  );
}

export default UserAuth;
