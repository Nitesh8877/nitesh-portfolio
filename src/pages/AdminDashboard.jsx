// src/pages/AdminDashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Container, Heading } from '../components/utility';
import { HiUpload, HiLogout } from 'react-icons/hi';
import { AiOutlineFileImage, AiOutlineFilePdf } from 'react-icons/ai';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        toast.error('Please upload a PDF file');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Resume size should be less than 10MB');
        return;
      }
      setResume(file);
    }
  };

  const handleSaveImage = () => {
    if (profileImage) {
      sessionStorage.setItem('profileImage', imagePreview);
      toast.success('Profile image uploaded successfully!');
      setProfileImage(null);
      setImagePreview(null);
    }
  };

  const handleSaveResume = () => {
    if (resume) {
      const reader = new FileReader();
      reader.onloadend = () => {
        sessionStorage.setItem('resumeUrl', reader.result);
        toast.success('Resume uploaded successfully!');
        setResume(null);
      };
      reader.readAsDataURL(resume);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <Container className="min-h-[80vh] py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <Heading className="text-3xl">Admin Dashboard</Heading>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <HiLogout size={20} />
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile Image Upload */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AiOutlineFileImage className="text-baseColor" />
            Upload Profile Image
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-baseColor transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <HiUpload className="text-5xl text-gray-400 mb-2" />
                <p className="text-gray-600">Click to upload image</p>
                <p className="text-sm text-gray-400 mt-1">Max size: 5MB</p>
              </label>
            </div>

            {imagePreview && (
              <div className="space-y-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  onClick={handleSaveImage}
                  className="w-full bg-baseColor text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Save Image
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AiOutlineFilePdf className="text-baseColor" />
            Upload Resume
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-baseColor transition-colors">
              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <HiUpload className="text-5xl text-gray-400 mb-2" />
                <p className="text-gray-600">Click to upload PDF</p>
                <p className="text-sm text-gray-400 mt-1">Max size: 10MB</p>
              </label>
            </div>

            {resume && (
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">{resume.name}</p>
                  <p className="text-sm text-gray-600">
                    Size: {(resume.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={handleSaveResume}
                  className="w-full bg-baseColor text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Save Resume
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Instructions:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Upload a profile image to replace the current one on the homepage</li>
          <li>Upload your latest resume in PDF format</li>
          <li>Changes will be visible immediately on the public pages</li>
          <li>Files are stored in browser session (will reset on browser close)</li>
        </ul>
      </div>
    </Container>
  );
};

export default AdminDashboard;