KNOWN BUg IS THAT TOAST RENDERS TWICE IN HOME PAGE

FRONTEND INSTLLED IN THE SEVER DIRECTORY BY MISTAKE. WORKS WELL, JUST LOOKS A LITTLE BIT MESSY

to make the app working well, we have to connect with mong in terminal first
below is script from package json to use.

 "start-mongo": "cd /d D:/MongoDb/bin/ && mongod.exe",

 after that connection shoulb be established. and one sees a message:
 
 MongoDB Compass connected

  //mongo error server E11000 is for duplicated ekey in collection 



npm i react-use-cookie
A React hook for managing cookies with no dependencies.
  import { useCookies } from 'react-cookie';

    const [cookies, setCookie, removeCookie] = useCookies([]);

    const verifyUser = async () => {
      if (!cookies.jwt) {
        //if thers no cookiesJWT go to login
        navigate('/login');
      } else {
        const { data } = await axios.post(
          'http://localhost:4000',
          {}, // empty {} because we dont want to send any data
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

  IMPORT ZDJEC W REACT DO KOMPONENTOW
  importujesz
  
import image from '../../src/pages/weapons.jpg';


i dajesz gdzie ma buyc
   <div className="private" style={{ backgroundImage: `url(${image})` }}>

