import axios from "axios";

const base = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
});

class Endpoints {
  /**
   * Create a new shop user
   *
   * @param email The user's email
   * @param firstName The user's first name
   * @param password The user's password
   * @returns The response from the server
   */
  static registerShopUser = async ({
    email,
    firstName,

    password,
  }: {
    email: string;
    firstName: string;

    password: string;
  }) => {
    const payload = {
      email,
      firstName,

      password,
    };
    console.log(payload);
    try {
      const response = await base.post(`/user/auth/register`, payload);
      console.log(response?.status);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Error registering user:", error);
        // return error.response.data;
        throw new Error(error.response.data.message || "registration failed");
      } else {
        // return error;
        throw new Error(error);
      }
    }
  };

  static updateShop = async ({
    shopId,
    packageName,
    name,
    logo,
    coverImage,
    about,
    theme,
    address,
    openingHours,
    keyFeatures,
    subscriptionDeals,
    loyaltyDeal,
  }: {
    shopId: string;
    packageName: string | null;
    name: string | null;
    logo: string | null;
    coverImage: string | null;
    about: string | null;
    theme: string | null;
    address: AddressType | null;
    openingHours: OpeningHour[] | null;
    keyFeatures: string[] | null;
    subscriptionDeals: SubscriptionDeal[] | null;
    loyaltyDeal: LoyaltyDeal | null;
  }) => {
    const payload: any = {};

    if (packageName !== null) payload.packageName = packageName;
    if (name !== null) payload.name = name;
    if (logo !== null) payload.logo = logo;
    if (coverImage !== null) payload.coverImage = coverImage;
    if (about !== null) payload.about = about;
    if (theme !== null) payload.theme = theme;
    if (address !== null) payload.address = address;
    if (openingHours !== null) payload.openingHours = openingHours;
    if (keyFeatures !== null) payload.keyFeatures = keyFeatures;
    if (subscriptionDeals !== null)
      payload.subscriptionDeals = subscriptionDeals;
    if (loyaltyDeal !== null) payload.loyaltyDeal = loyaltyDeal;

    try {
      const response = await base.patch(`/shop/${shopId}`, payload);
      console.log(response?.status);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Error registering user:", error);
        throw new Error(error.response.data.message || "registration failed");
      } else {
        throw new Error(error);
      }
    }
  };
}

type AddressType = {
  addressLine1: string | null;
  country: string | null;
  city: string | null;
  postcode: string | null;
};

type OpeningHour = {
  day: string | null;
  isOpen: boolean | null;
  openingTime: string | null;
  closingTime: string | null;
};

type SubscriptionDeal = {
  variant: string | null;
  drinksAllowance: number | null;
  price: number | null;
  frequency: string | null;
  coffeeTypes: string[] | null;
};

type LoyaltyDeal = {
  reward: string | null;
  stampGoal: number | null;
};

export default Endpoints;
