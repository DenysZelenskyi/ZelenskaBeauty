const API_URL = 'https://6864ae0f5b5d8d03397de22c.mockapi.io/api/v1/services';
const PRODUCTS_URL =
  'https://6864ae0f5b5d8d03397de22c.mockapi.io/api/v1/products';

export const fetchServices = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(PRODUCTS_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};
