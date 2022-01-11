import { AuthApiData } from '../../interface/AuthApiData';

interface FetchOptions {
  method: string;
  body: FormData;
  credentials: RequestCredentials;
}

const upload = async (formData: FormData): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: formData,
    credentials: 'include',
  };

  return await fetch('/upload-images', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default upload;
