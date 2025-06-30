
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('higginbothams_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = async (name: string, email: string, password: string, phone?: string): Promise<boolean> => {
    try {
      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem('higginbothams_users') || '[]');
      
      // Check if user already exists
      if (existingUsers.find((u: any) => u.email === email)) {
        return false; // User already exists
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        phone
      };

      // Save user credentials
      const userCredentials = {
        ...newUser,
        password // In real app, this should be hashed
      };

      existingUsers.push(userCredentials);
      localStorage.setItem('higginbothams_users', JSON.stringify(existingUsers));

      // Log user in
      setUser(newUser);
      localStorage.setItem('higginbothams_user', JSON.stringify(newUser));

      return true;
    } catch (error) {
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('higginbothams_users') || '[]');
      const userCredentials = existingUsers.find((u: any) => u.email === email && u.password === password);

      if (userCredentials) {
        const { password: _, ...userWithoutPassword } = userCredentials;
        setUser(userWithoutPassword);
        localStorage.setItem('higginbothams_user', JSON.stringify(userWithoutPassword));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('higginbothams_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
