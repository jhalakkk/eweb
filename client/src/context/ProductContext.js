import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

// Create context
const AppContext = createContext();

// Define the API endpoint
const API = "your_api_url_here"; // Add your actual API URL here

// Define the initial state
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  limitedEdition: [],
  isSingleLoading: false,
  singleProduct: {},
  singleError: false,
};

const AppProvider = ({ children }) => {
  // Set up useReducer with initial state and reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch products from the API
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" }); // Set loading state
    try {
      const res = await axios.get(url); // Fetch data from API
      const products = await res.data; // Get products data
      dispatch({ type: "SET_API_DATA", payload: products }); // Dispatch the products to the reducer
    } catch (error) {
      dispatch({ type: "API_ERROR" }); // Handle errors
    }
  };

  // my 2nd api call for single Product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" }); // Set loading state
    try {
      const res = await axios.get(url); // Fetch data from API
      const singleProduct = await res.data; // Get products data
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct }); // Dispatch the products to the reducer
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" }); // Handle errors
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    getProducts(API); // Call getProducts with the API endpoint
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the Product Context
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };