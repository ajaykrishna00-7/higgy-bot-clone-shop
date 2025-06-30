
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Phone, Lock } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const { login, register, user, logout } = useAuth();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const success = await login(loginData.email, loginData.password);
    if (success) {
      onClose();
      setLoginData({ email: '', password: '' });
    } else {
      setError('Invalid email or password');
    }
    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const success = await register(registerData.name, registerData.email, registerData.password, registerData.phone);
    if (success) {
      onClose();
      setRegisterData({ name: '', email: '', password: '', phone: '' });
    } else {
      setError('User already exists or registration failed');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (user) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md vintage-paper aged-border">
          <DialogHeader>
            <DialogTitle className="font-display text-leather-800">Account Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-parchment-100 rounded-lg aged-border">
              <User className="h-5 w-5 text-leather-600" />
              <div>
                <p className="font-serif font-semibold text-leather-800">{user.name}</p>
                <p className="text-sm text-leather-600 font-serif">{user.email}</p>
                {user.phone && <p className="text-sm text-leather-600 font-serif">{user.phone}</p>}
              </div>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline" 
              className="w-full aged-border border-leather-400 text-leather-700 hover:bg-leather-700 hover:text-parchment-50 font-serif"
            >
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md vintage-paper aged-border">
        <DialogHeader>
          <DialogTitle className="font-display text-leather-800">Account</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-parchment-100 aged-border">
            <TabsTrigger value="login" className="font-serif data-[state=active]:bg-leather-600 data-[state=active]:text-parchment-50">Login</TabsTrigger>
            <TabsTrigger value="register" className="font-serif data-[state=active]:bg-leather-600 data-[state=active]:text-parchment-50">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="font-serif text-leather-700">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-leather-500" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="pl-10 aged-border border-leather-300 bg-parchment-50 font-serif"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="login-password" className="font-serif text-leather-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-leather-500" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="pl-10 aged-border border-leather-300 bg-parchment-50 font-serif"
                    required
                  />
                </div>
              </div>
              
              {error && <p className="text-red-600 text-sm font-serif">{error}</p>}
              
              <Button 
                type="submit" 
                className="w-full leather-texture text-parchment-50 hover:bg-leather-600 font-serif"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name" className="font-serif text-leather-700">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-leather-500" />
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Your Name"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    className="pl-10 aged-border border-leather-300 bg-parchment-50 font-serif"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-email" className="font-serif text-leather-700">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-leather-500" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="your@email.com"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    className="pl-10 aged-border border-leather-300 bg-parchment-50 font-serif"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-phone" className="font-serif text-leather-700">Phone (Optional)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-leather-500" />
                  <Input
                    id="register-phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                    className="pl-10 aged-border border-leather-300 bg-parchment-50 font-serif"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-password" className="font-serif text-leather-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-leather-500" />
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    className="pl-10 aged-border border-leather-300 bg-parchment-50 font-serif"
                    required
                  />
                </div>
              </div>
              
              {error && <p className="text-red-600 text-sm font-serif">{error}</p>}
              
              <Button 
                type="submit" 
                className="w-full leather-texture text-parchment-50 hover:bg-leather-600 font-serif"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AccountModal;
