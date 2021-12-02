import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const editProfile = async (
  firstName: string,
  lastName: string,
  description: string,
  gender: string,
  email: string,
  address: string,
  phoneNumber: string,
  dateOfBirth: Date,
  availability: [Date],
  photo: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName,
      lastName,
      description,
      gender,
      email,
      address,
      phoneNumber,
      dateOfBirth,
      availability,
      photo,
    }),
    credentials: 'include',
  };
  return await fetch(`/profile/edit`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
