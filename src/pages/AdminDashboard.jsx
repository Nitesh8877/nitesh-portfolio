import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Container, Heading } from '../components/utility';
import { 
  HiUpload, 
  HiLogout, 
  HiTrash, 
  HiPhotograph,
  HiDocument,
  HiCloudUpload,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi';
import { 
  BsCheckCircle, 
  BsFileEarmarkPdf,
  BsImage
} from 'react-icons/bs';
import { 
  FiSettings,
  FiUser,
  FiFileText,
  FiDatabase
} from 'react-icons/fi';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const [existingImage, setExistingImage] = useState(null);
  const [existingResume, setExistingResume] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('uploads');

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
      toast.error('Please upload a valid image file (JPG, PNG, WebP)');
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem('profileImage', profileImage);
      setExistingImage(profileImage);
      setImagePreview(null);
      setProfileImage(null);
      toast.success('🎉 Profile image uploaded successfully!');
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem('resumeUrl', resume);
      localStorage.setItem('resumeFileName', resumeFileName);
      setExistingResume(resumeFileName);
      setResume(null);
      setResumeFileName('');
      toast.success('🎉 Resume uploaded successfully!');
    } catch (error) {
      toast.error('Failed to save resume');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = () => {
    localStorage.removeItem('profileImage');
    setExistingImage(null);
    toast.success('🗑️ Profile image removed');
  };

  const handleDeleteResume = () => {
    localStorage.removeItem('resumeUrl');
    localStorage.removeItem('resumeFileName');
    setExistingResume('');
    toast.success('🗑️ Resume removed');
  };

  const handleLogout = () => {
    logout();
    toast.success('👋 Logged out successfully');
    navigate('/login');
  };

  // Stats data
  const stats = [
    {
      title: 'Profile Picture',
      status: existingImage ? 'Uploaded' : 'Not Uploaded',
      icon: '🖼️',
      color: existingImage ? 'text-green-500' : 'text-yellow-500',
      bgColor: existingImage ? 'bg-green-50' : 'bg-yellow-50',
      borderColor: existingImage ? 'border-green-200' : 'border-yellow-200'
    },
    {
      title: 'Resume/CV',
      status: existingResume ? 'Uploaded' : 'Not Uploaded',
      icon: '📄',
      color: existingResume ? 'text-green-500' : 'text-yellow-500',
      bgColor: existingResume ? 'bg-green-50' : 'bg-yellow-50',
      borderColor: existingResume ? 'border-green-200' : 'border-yellow-200'
    }
  ];

  return (
    <Container className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-8 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4"
      >
        <div>
          <Heading className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Admin Dashboard
          </Heading>
          <p className="text-gray-600 mt-2">
            Welcome back, <span className="font-semibold text-gray-800">{user?.name || 'Admin'}</span>! 👋
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/data-viewer')}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-colors font-semibold shadow-lg shadow-blue-500/25"
          >
            <FiDatabase size={18} />
            Data Viewer
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition-colors font-semibold shadow-lg shadow-red-500/25"
          >
            <HiLogout size={18} />
            Logout
          </motion.button>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-sm w-fit">
        {[
          { id: 'uploads', label: 'File Uploads', icon: <HiCloudUpload size={18} /> },
          { id: 'stats', label: 'Statistics', icon: <FiSettings size={18} /> }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.icon}
            {tab.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'uploads' && (
          <motion.div
            key="uploads"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Upload Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Profile Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <HiPhotograph className="text-blue-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Profile Picture</h3>
                      <p className="text-gray-600">JPG, PNG, WebP • Max 5MB</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Upload Area */}
                  <label
                    htmlFor="image-upload"
                    className="group cursor-pointer block"
                  >
                    <div className="border-3 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all hover:border-blue-400 hover:bg-blue-50/50 group-hover:scale-[1.02]">
                      <HiCloudUpload className="text-5xl text-gray-400 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                      <p className="text-gray-700 font-semibold text-lg mb-2">Click to upload image</p>
                      <p className="text-sm text-gray-500">or drag and drop</p>
                    </div>
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                      disabled={loading}
                    />
                  </label>

                  {/* Image Preview */}
                  <AnimatePresence>
                    {imagePreview && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 space-y-4"
                      >
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-white font-semibold">Preview</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setImagePreview(null);
                              setProfileImage(null);
                            }}
                            className="flex-1 bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition-colors font-semibold"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveImage}
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all font-semibold shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                          >
                            {loading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <HiCheckCircle size={20} />
                                Save Image
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Existing Image */}
                  {existingImage && !imagePreview && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 space-y-4"
                    >
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BsCheckCircle className="text-green-500 text-2xl" />
                          <div>
                            <p className="font-semibold text-green-800">Image uploaded successfully</p>
                            <p className="text-sm text-green-600">Visible on your portfolio</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleDeleteImage}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete image"
                        >
                          <HiTrash size={20} />
                        </motion.button>
                      </div>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={existingImage}
                          alt="Current Profile"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Resume Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <HiDocument className="text-purple-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Resume / CV</h3>
                      <p className="text-gray-600">PDF only • Max 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Upload Area */}
                  <label
                    htmlFor="resume-upload"
                    className="group cursor-pointer block"
                  >
                    <div className="border-3 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all hover:border-purple-400 hover:bg-purple-50/50 group-hover:scale-[1.02]">
                      <HiCloudUpload className="text-5xl text-gray-400 mx-auto mb-4 group-hover:text-purple-500 transition-colors" />
                      <p className="text-gray-700 font-semibold text-lg mb-2">Click to upload PDF</p>
                      <p className="text-sm text-gray-500">or drag and drop</p>
                    </div>
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf"
                      className="hidden"
                      onChange={handleResumeUpload}
                      disabled={loading}
                    />
                  </label>

                  {/* Resume Preview */}
                  <AnimatePresence>
                    {resumeFileName && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 space-y-4"
                      >
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <BsFileEarmarkPdf className="text-red-500 text-2xl" />
                            <div>
                              <p className="font-semibold text-blue-800">{resumeFileName}</p>
                              <p className="text-sm text-blue-600">Ready to save</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setResumeFileName('');
                              setResume(null);
                            }}
                            className="flex-1 bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition-colors font-semibold"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveResume}
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all font-semibold shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                          >
                            {loading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <HiCheckCircle size={20} />
                                Save Resume
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Existing Resume */}
                  {existingResume && !resumeFileName && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6"
                    >
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BsCheckCircle className="text-green-500 text-2xl" />
                          <div>
                            <p className="font-semibold text-green-800">Resume uploaded successfully</p>
                            <p className="text-sm text-green-600">{existingResume}</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleDeleteResume}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete resume"
                        >
                          <HiTrash size={20} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Instructions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <HiExclamationCircle className="text-blue-500" />
                Quick Guide
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">1</span>
                    </div>
                    <p className="text-gray-700"><strong>Profile Picture:</strong> Upload a professional headshot (JPG/PNG, max 5MB)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">2</span>
                    </div>
                    <p className="text-gray-700"><strong>Resume/CV:</strong> Upload your latest resume in PDF format (max 10MB)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">3</span>
                    </div>
                    <p className="text-gray-700"><strong>Instant Updates:</strong> Changes appear immediately across your portfolio</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">4</span>
                    </div>
                    <p className="text-gray-700"><strong>Secure Storage:</strong> Files are stored locally in your browser</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'stats' && (
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${stat.bgColor} border ${stat.borderColor} rounded-2xl p-6 text-center shadow-lg`}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{stat.title}</h4>
                  <p className={`text-lg font-bold ${stat.color}`}>{stat.status}</p>
                </motion.div>
              ))}
              
              {/* Additional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="font-semibold text-gray-800 mb-2">Last Updated</h4>
                <p className="text-lg font-bold text-blue-600">Just now</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-3">💾</div>
                <h4 className="font-semibold text-gray-800 mb-2">Storage Used</h4>
                <p className="text-lg font-bold text-green-600">
                  {existingImage || existingResume ? '< 1MB' : '0MB'}
                </p>
              </motion.div>
            </div>

            {/* Activity Log */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Activity</h3>
              <div className="space-y-3">
                {existingImage && (
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                    <BsCheckCircle className="text-green-500 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">Profile picture uploaded</p>
                      <p className="text-sm text-gray-600">Visible on your portfolio</p>
                    </div>
                  </div>
                )}
                {existingResume && (
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <BsCheckCircle className="text-blue-500 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-800">Resume uploaded</p>
                      <p className="text-sm text-gray-600">{existingResume}</p>
                    </div>
                  </div>
                )}
                {!existingImage && !existingResume && (
                  <div className="text-center py-8 text-gray-500">
                    <HiExclamationCircle className="text-4xl mx-auto mb-3 text-gray-400" />
                    <p>No recent activity</p>
                    <p className="text-sm">Upload files to see activity here</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AdminDashboard;