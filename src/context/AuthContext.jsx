import React, { createContext, useContext, useReducer, useEffect } from "react";

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

// Action types
const ACTION_TYPES = {
  SET_LOADING: "SET_LOADING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOADING:
      return { ...state, loading: action.payload, error: null };

    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    case ACTION_TYPES.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user from localStorage on app start
  useEffect(() => {
    const loadStoredUser = () => {
      try {
        const storedUser = localStorage.getItem("podvibeUser");
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData.token) {
            dispatch({
              type: ACTION_TYPES.LOGIN_SUCCESS,
              payload: {
                user: userData,
                token: userData.token,
              },
            });
          } else {
            dispatch({ type: ACTION_TYPES.SET_LOADING, payload: false });
          }
        } else {
          dispatch({ type: ACTION_TYPES.SET_LOADING, payload: false });
        }
      } catch (error) {
        console.error("Error loading stored user:", error);
        localStorage.removeItem("podvibeUser");
        dispatch({ type: ACTION_TYPES.SET_LOADING, payload: false });
      }
    };

    loadStoredUser();
  }, []);

  // Login function
  const login = (userData) => {
    try {
      localStorage.setItem("podvibeUser", JSON.stringify(userData));
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: {
          user: userData,
          token: userData.token,
        },
      });
    } catch (err) {
      console.error("Error saving user data:", err);
      dispatch({
        type: ACTION_TYPES.SET_ERROR,
        payload: "Failed to save user data",
      });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("podvibeUser");
    dispatch({ type: ACTION_TYPES.LOGOUT });
  };

  // Set error function
  const setError = (error) => {
    dispatch({
      type: ACTION_TYPES.SET_ERROR,
      payload: error,
    });
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
  };

  // Set loading function
  const setLoading = (loading) => {
    dispatch({
      type: ACTION_TYPES.SET_LOADING,
      payload: loading,
    });
  };

  const value = {
    ...state,
    login,
    logout,
    setError,
    clearError,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
