const BASE_URL = 'https://6864ae0f5b5d8d03397de22c.mockapi.io/api/v1';
const SERVICES_URL = `${BASE_URL}/services`;
const PRODUCTS_URL = `${BASE_URL}/products`;
const USERS_URL = `${BASE_URL}/users`;

export const fetchServices = async () => {
  const response = await fetch(SERVICES_URL);
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

export const registerUser = async ({firstName, lastName, phone, password}) => {
  const checkRes = await fetch(
    `${USERS_URL}?phone=${encodeURIComponent(phone)}`,
  );
  const users = await checkRes.json();
  const existingUsers = users.filter(u => u.phone === phone);
  if (existingUsers.length > 0) {
    throw new Error('A user with this phone number already exists');
  }
  const createRes = await fetch(USERS_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({firstName, lastName, phone, password}),
  });
  if (!createRes.ok) {
    throw new Error('Failed to create user');
  }
  return await createRes.json();
};

export const loginUser = async ({phone, password}) => {
  const res = await fetch(`${USERS_URL}?phone=${encodeURIComponent(phone)}`);
  const users = await res.json();
  if (!users.length) {
    throw new Error('User not found');
  }
  const user = users.find(u => u.password === password);
  if (!user) {
    throw new Error('Incorrect password');
  }
  return user;
};
