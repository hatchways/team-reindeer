import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { Profile, ProfileApiData } from '../interface/Profile';
import { fetchSitters } from '../helpers/APICalls/profile';
import { useSnackBar } from './useSnackbarContext';

interface ProfileContext {
  sitters: ProfileApiData['success'];
  sitterSearchResults: ProfileApiData['success'] | null | undefined;
  updateSearch: (searchTerm: string) => void;
}

export const ProfileContext = createContext<ProfileContext>({
  sitters: [],
  sitterSearchResults: null,
  updateSearch: () => null,
});

export const ProfileProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [sitters, setSitters] = useState<ProfileApiData['success']>([]);
  const { updateSnackBarMessage } = useSnackBar();
  const [sitterSearchResults, setSitterSearchResults] = useState<ProfileApiData['success'] | null | undefined>();

  useEffect(() => {
    const checkFetchSitters = async () => {
      await fetchSitters()
        .then((data) => {
          if (data.success) {
            setSitters(data.success);
            setSitterSearchResults(data.success);
          }
          if (data.error) {
            updateSnackBarMessage('Unable to connect to server. Please try again');
          }
        })
        .catch((e) => {
          updateSnackBarMessage(e.message);
        });
    };
    checkFetchSitters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSitters]);

  const updateSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setSitterSearchResults(sitters);
    }

    if (searchTerm) {
      const updatedSitterList =
        sitters &&
        sitters.filter((sitter: Profile) => {
          return sitter.address && sitter.address.toLowerCase().includes(searchTerm.toLowerCase());
        });
      setSitterSearchResults(updatedSitterList);
    }
  };

  return (
    <ProfileContext.Provider value={{ sitters, updateSearch, sitterSearchResults }}>{children}</ProfileContext.Provider>
  );
};

export function useProfile(): ProfileContext {
  return useContext(ProfileContext);
}
