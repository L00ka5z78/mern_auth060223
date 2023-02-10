import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import image from '../../src/pages/weapons.jpg';

export const Cards = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        //if thers no cookiesJWT go to login
        navigate('/login');
      } else {
        const { data } = await axios.post(
          'http://localhost:4000',
          {},                        // empty {} because we dont want to send any data
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          // if no data, clear cookies and go to login
          removeCookie('jwt');
          navigate('/login');
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: 'dark',
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie('jwt');
    navigate('/login');
  };

  return (
    <>
      <div className="private" style={{ backgroundImage: `url(${image})` }}>
        <h1>Home page</h1>
        <button onClick={logOut}>Log out</button>
      </div>
      <ToastContainer />
    </>
  );
};
