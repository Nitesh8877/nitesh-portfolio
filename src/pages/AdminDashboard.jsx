import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Container, Heading } from '../components/utility';
import { HiUpload, HiLogout, HiTrash } from 'react-icons/hi';
import { AiOutlineFileImage, AiOutlineFilePdf } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const [existingImage, setExistingImage] = useState(null);
  const [existingResume, setExistingResume] = useState('');
  const [loading, setLoading] = useState(false);

  // Load existing files on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    const savedResume = localStorage.getItem('resumeFileName');
    
    if (savedImage) {
      setExistingImage(savedImage);
    }
    if (savedResume) {
      setExistingResume(savedResume);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file only');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Resume size should be less than 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setResume(reader.result);
      setResumeFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveImage = async () => {
    if (!profileImage) {
      toast.error('Please select an image first');
      return;
    }

    setLoading(true);
    try {
      localStorage.setItem('profileImage', profileImage);
      setExistingImage(profileImage);
      setImagePreview(null);
      setProfileImage(null);
      toast.success('✅ Profile image uploaded and saved successfully!');
    } catch (error) {
      toast.error('Failed to save image');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveResume = async () => {
    if (!resume) {
      toast.error('Please select a resume first');
      return;
    }

    setLoading(true);
    try {
      localStorage.setItem('resumeUrl', resume);
      localStorage.setItem('resumeFileName', resumeFileName);
      setExistingResume(resumeFileName);
      setResume(null);
      setResumeFileName('');
      toast.success('✅ Resume uploaded and saved successfully!');
    } catch (error) {
      toast.error('Failed to save resume');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = () => {
    localStorage.removeItem('profileImage');
    setExistingImage(null);
    toast.success('✅ Profile image removed');
  };

  const handleDeleteResume = () => {
    localStorage.removeItem('resumeUrl');
    localStorage.removeItem('resumeFileName');
    setExistingResume('');
    toast.success('✅ Resume removed');
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <Container className="min-h-[80vh] py-8 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-12"
      >
        <Heading className="text-3xl">Admin Dashboard</Heading>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold shadow-lg"
        >
          <HiLogout size={20} />
          Logout
        </motion.button>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Profile Image Upload Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AiOutlineFileImage className="text-green-500 text-3xl" />
            Profile Picture
          </h2>

          {/* Upload Area */}
          <div className="border-3 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              disabled={loading}
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <HiUpload className="text-6xl text-gray-400 mb-3" />
              <p className="text-gray-700 font-semibold">Click to upload image</p>
              <p className="text-sm text-gray-500 mt-2">JPG, PNG, WebP • Max 5MB</p>
            </label>
          </div>

          {/* Preview */}
          {imagePreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={handleSaveImage}
                disabled={loading}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg disabled:opacity-50"
              >
                {loading ? 'Saving...' : '✅ Save Image'}
              </motion.button>
            </motion.div>
          )}

          {/* Existing Image */}
          {existingImage && !imagePreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="bg-green-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BsCheckCircle className="text-green-500 text-2xl" />
                  <span className="text-gray-700 font-semibold">Image uploaded</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleDeleteImage}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <HiTrash size={20} />
                </motion.button>
              </div>
              <img
                src={existingImage}
                alt="Current"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Resume Upload Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AiOutlineFilePdf className="text-red-500 text-3xl" />
            Resume/CV
          </h2>

          {/* Upload Area */}
          <div className="border-3 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors mb-6">
            <input
              type="file"
              accept=".pdf"
              onChange={handleResumeUpload}
              className="hidden"
              id="resume-upload"
              disabled={loading}
            />
            <label
              htmlFor="resume-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <HiUpload className="text-6xl text-gray-400 mb-3" />
              <p className="text-gray-700 font-semibold">Click to upload PDF</p>
              <p className="text-sm text-gray-500 mt-2">PDF only • Max 10MB</p>
            </label>
          </div>

          {/* Preview */}
          {resumeFileName && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-gray-900">📄 {resumeFileName}</p>
                <p className="text-sm text-gray-600 mt-1">Ready to upload</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={handleSaveResume}
                disabled={loading}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg disabled:opacity-50"
              >
                {loading ? 'Saving...' : '✅ Save Resume'}
              </motion.button>
            </motion.div>
          )}

          {/* Existing Resume */}
          {existingResume && !resumeFileName && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="bg-green-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BsCheckCircle className="text-green-500 text-2xl" />
                  <div>
                    <span className="text-gray-700 font-semibold block">Resume uploaded</span>
                    <span className="text-sm text-gray-600">{existingResume}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleDeleteResume}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <HiTrash size={20} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Instructions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-900">📋 Instructions</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Profile Picture:</strong> Upload a JPG/PNG image (max 5MB) to replace your profile photo on the homepage</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Resume:</strong> Upload your CV in PDF format (max 10MB) for visitors to download</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Changes:</strong> Updates appear immediately across all pages</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Storage:</strong> Files are securely stored in your browser's local storage</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Delete:</strong> Click the trash icon to remove any uploaded file</span>
          </li>
        </ul>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-6 mt-8"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-5xl mb-2">🖼️</div>
          <p className="text-gray-600 mb-2">Profile Picture Status</p>
          <p className="text-2xl font-bold text-green-500">
            {existingImage ? '✅ Uploaded' : '⏳ Default'}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-5xl mb-2">📄</div>
          <p className="text-gray-600 mb-2">Resume Status</p>
          <p className="text-2xl font-bold text-green-500">
            {existingResume ? '✅ Uploaded' : '⏳ Default'}
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default AdminDashboard;