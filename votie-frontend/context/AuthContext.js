import * as React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const AuthContext = React.createContext();

function AuthContextProvider(props) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "RESTORE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
        break;

      case "SIGN_IN":
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
        break;

      case "SIGN_OUT":
        return {
          ...prevState,
          isSignout: true,
          userToken: action.token,
        };
    }
  };

  const [state, dispatch] = React.useReducer(
    reducer,
    // initial state
    {
      isLoading: true,
      isSignout: true,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootStrapAsync = async () => {
      let userToken;

      try {
        // load the token from async storage
        userToken = await SecureStore.getItemAsync("user-token");
      } catch (err) {
        console.error(err);
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootStrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },

      signOut: async () => {
        dispatch({ type: "SIGN_OUT", token: "dummy-auth-tokeb" });
      },
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      getState: () => state,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
