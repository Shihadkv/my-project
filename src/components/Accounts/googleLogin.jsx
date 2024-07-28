import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess, onError }) => {
  const login = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <button
      onClick={() => login()}
      className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton
