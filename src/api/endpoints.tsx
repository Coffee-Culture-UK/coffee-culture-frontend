import axios from "axios";

const base = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

class Endpoints {
  /**
   * Create a new shop user
   *
   * @param email The user's email
   * @param firstName The user's first name
   * @param lastName The user's last name
   * @param role The user's role eg: employee/owner/manager
   * @param password The user's password
   * @returns The response from the server
   */
  static registerShopUser = async ({
    email,
    firstName,
    lastName,
    role,
    password,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    password: string;
  }) => {
    const payload = {
      email,
      firstName,
      lastName,
      role,
      password,
    };
    console.log(payload)
    try {
        const response = await base.post(`/shop/auth/register`, payload, );
        console.log(response?.status)
        return response?.data;
      } catch (error: any) {
        if (error.response) {
          console.error("Error registering user:", error);
          return error.response.data;
        } else {
          return error;
        }
      }
  };
}

export default Endpoints;
