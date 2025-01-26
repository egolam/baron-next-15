"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "react";
import { currentCart } from "@wix/ecom";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const wixClient = createClient({
  modules: {
    products,
    collections,
    currentCart,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export const WixClientContext = createContext(wixClient);

export const WixClientContextProvider = ({ children }) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
