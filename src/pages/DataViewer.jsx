// src/pages/DataViewer.jsx - NEW FILE
import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Container, Heading } from '../components/utility';
import {
  getContactFormSubmissions,
  getSubscribedEmails,
  getDataStatistics,
  deleteContactFormSubmission,
  unsubscribeEmail,
  downloadContactSubmissionsAsFile,
  downloadEmailsAsFile,
  downloadAllDataAsJSON,
} from '../components/utility/dataStorage';
import { motion } from 'framer-motion';
import { HiDownload, HiTrash, HiArrowLeft } from 'react-icons/hi';
import { MdRefresh } from 'react-icons/md';
import { useNavigate as useNav } from 'react-router-dom';
import toast from 'react-hot-toast';

const DataViewer = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNav();
  const [submissions, setSubmissions] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState('submissions');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    loadData();
  }, [isAuthenticated, navigate]);

  const loadData = () => {
    setLoading(true);
    try {
      setSubmissions(getContactFormSubmissions());
      setSubscribers(getSubscribedEmails());
      setStats(getDataStatistics());
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Error loading data');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubmission = (id) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      deleteContactFormSubmission(id);
      toast.success('Submission deleted');
      loadData();
    }
  };

  const handleUnsubscribe = (email) => {
    if (confirm(`Unsubscribe ${email} from newsletter?`)) {
      unsubscribeEmail(email);
      toast.success('Email unsubscribed');
      loadData();
    }
  };

  return (
    <Container className="min-h-[80vh] py-8 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <Heading className="text-3xl">📊 Data Management</Heading>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={loadData}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            <MdRefresh size={20} />
            Refresh
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
          >
            <HiArrowLeft size={20} />
            Back
          </motion.button>
        </div>
      </motion.div>

      {/* Statistics Cards */}
      {stats && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <p className="text-gray-700 font-semibold">📝 Form Submissions</p>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {stats.contactSubmissions.total}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Avg: {stats.contactSubmissions.avgSubmissionsPerDay}/day
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-700 font-semibold">📧 Newsletter Subscribers</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {stats.newsletter.totalSubscribers}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Avg: {stats.newsletter.avgSubscriptionsPerDay}/day
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <p className="text-gray-700 font-semibold">💾 Total Data</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {stats.contactSubmissions.total + stats.newsletter.totalSubscribers}
            </p>
            <p className="text-sm text-gray-600 mt-2">Combined records</p>
          </div>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b-2 border-gray-200">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveTab('submissions')}
          className={`px-6 py-3 font-bold transition-all ${
            activeTab === 'submissions'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📝 Form Submissions ({submissions.length})
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveTab('subscribers')}
          className={`px-6 py-3 font-bold transition-all ${
            activeTab === 'subscribers'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📧 Subscribers ({subscribers.length})
        </motion.button>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={downloadContactSubmissionsAsFile}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold"
        >
          <HiDownload size={18} />
          Download Forms (CSV)
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={downloadEmailsAsFile}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          <HiDownload size={18} />
          Download Emails (CSV)
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={downloadAllDataAsJSON}
          className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
        >
          <HiDownload size={18} />
          Download All Data (JSON)
        </motion.button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Loading data...</p>
        </div>
      ) : activeTab === 'submissions' ? (
        // Form Submissions
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {submissions.length === 0 ? (
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <p className="text-gray-600 text-lg">No form submissions yet</p>
            </div>
          ) : (
            submissions.map((submission, idx) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {submission.name} {submission.lastname}
                    </h3>
                    <p className="text-sm text-gray-600">
                      📧 {submission.email} | 📱 {submission.phone}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(submission.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleDeleteSubmission(submission.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <HiTrash size={24} />
                  </motion.button>
                </div>

                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">📌 {submission.subject}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{submission.query}</p>
                </div>

                <div className="flex gap-2">
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    ID: {submission.id}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      ) : (
        // Subscribers
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {subscribers.length === 0 ? (
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <p className="text-gray-600 text-lg">No newsletter subscribers yet</p>
            </div>
          ) : (
            subscribers.map((subscriber, idx) => (
              <motion.div
                key={subscriber.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-bold text-gray-900">📧 {subscriber.email}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Subscribed: {new Date(subscriber.subscribedAt).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Status: <span className="font-semibold text-green-600">{subscriber.status}</span>
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleUnsubscribe(subscriber.email)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <HiTrash size={24} />
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      )}
    </Container>
  );
};

export default DataViewer;