import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { ProfileApiData } from '../interface/Profile';
import { fetchSitters, fetchSittersBySearch } from '../helpers/APICalls/profile';
import { useSnackBar } from './useSnackbarContext';

interface ProfileContext {
  sitters: ProfileApiData['success'];
  searchSitters: (searchByCity: string | null) => void;
}

export const ProfileContext = createContext<ProfileContext>({
  sitters: [],
  searchSitters: () => null,
});

export const ProfileProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [sitters, setSitters] = useState<ProfileApiData['success']>([]);
  const { updateSnackBarMessage } = useSnackBar();

  useEffect(() => {
    const checkFetchSitters = async () => {
      await fetchSitters()
        .then((data) => {
          if (data.success) {
            setSitters(data.success);
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
  }, []);

  const searchSitters = async (searchQuery: string | null) => {
    await fetchSittersBySearch(searchQuery)
      .then((data) => {
        if (data.success) {
          setSitters(data.success);
        }
        if (data.error) {
          updateSnackBarMessage('Unable to connect to server. Please try again');
        }
      })
      .catch((e) => {
        updateSnackBarMessage(e.message);
      });
  };

  return <ProfileContext.Provider value={{ sitters, searchSitters }}>{children}</ProfileContext.Provider>;
};

export function useProfile(): ProfileContext {
  return useContext(ProfileContext);
}
