// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Container, Heading } from '../components/utility';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const result = login(email, password);
    
    if (result.success) {
      toast.success('Login successful!');
      navigate('/admin');
    } else {
      toast.error(result.error);
    }
  };

  return (
    <Container className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <Heading className="text-center mb-8 text-3xl">Admin Login</Heading>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-baseColor focus:outline-none transition-colors"
                placeholder="admin@portfolio.com"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-baseColor focus:outline-none transition-colors pr-12"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-12 text-gray-500 hover:text-baseColor"
              >
                {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-baseColor text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Demo Credentials:</strong><br />
              Email: admin@portfolio.com<br />
              Password: Admin@123
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;