"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (email: string, pass: string, displayName?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const DEMO_USER: any = {
  uid: "demo-admin-uid",
  email: "admin@demopilates.com",
  displayName: "Administrador Demo",
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: "",
  tenantId: null,
  phoneNumber: "+54 9 11 1234-5678",
  photoURL: null,
  providerId: "demo",
};

const AuthContext = createContext<AuthContextType>({
  user: DEMO_USER,
  loading: false,
  loginWithEmail: async () => {},
  registerWithEmail: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(DEMO_USER);
  const [loading] = useState(false);

  const loginWithEmail = async () => {
    setUser(DEMO_USER);
  };

  const registerWithEmail = async () => {
    setUser(DEMO_USER);
  };

  const logout = async () => {
    setUser(DEMO_USER);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithEmail,
        registerWithEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
