// src/utils/dataStorage.js

/**
 * FORM SUBMISSIONS STORAGE
 * Stores contact form submissions in localStorage as JSON
 */

// Get all contact form submissions
export const getContactFormSubmissions = () => {
  try {
    const data = localStorage.getItem('contactFormSubmissions');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading form submissions:', error);
    return [];
  }
};

// Save contact form submission
export const saveContactFormSubmission = (formData) => {
  try {
    const submissions = getContactFormSubmissions();
    const newSubmission = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      ...formData,
    };

    submissions.push(newSubmission);
    localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));

    return newSubmission;
  } catch (error) {
    console.error('Error saving form submission:', error);
    return null;
  }
};

// Get total contact form submissions count
export const getContactFormSubmissionsCount = () => {
  return getContactFormSubmissions().length;
};

// Get contact form submissions by email
export const getSubmissionsByEmail = (email) => {
  return getContactFormSubmissions().filter(
    (submission) => submission.email === email
  );
};

// Delete contact form submission
export const deleteContactFormSubmission = (id) => {
  try {
    const submissions = getContactFormSubmissions();
    const filtered = submissions.filter((s) => s.id !== id);
    localStorage.setItem('contactFormSubmissions', JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting submission:', error);
    return false;
  }
};

// Export contact submissions as CSV
export const exportContactSubmissionsAsCSV = () => {
  const submissions = getContactFormSubmissions();
  let csv =
    'ID,Timestamp,First Name,Last Name,Email,Phone,Subject,Message\n';

  submissions.forEach((submission) => {
    csv += `${submission.id},"${submission.timestamp}","${submission.name}","${submission.lastname}","${submission.email}","${submission.phone}","${submission.subject}","${submission.query}"\n`;
  });

  return csv;
};

// Download contact submissions as file
export const downloadContactSubmissionsAsFile = () => {
  const csv = exportContactSubmissionsAsCSV();
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
  );
  element.setAttribute('download', `contact-submissions-${Date.now()}.csv`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

// Export contact submissions as JSON
export const downloadContactSubmissionsAsJSON = () => {
  const submissions = getContactFormSubmissions();
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:application/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(submissions, null, 2))
  );
  element.setAttribute('download', `contact-submissions-${Date.now()}.json`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * EMAIL SUBSCRIPTIONS STORAGE
 * Stores newsletter subscriber emails in localStorage
 */

// Get all subscribed emails
export const getSubscribedEmails = () => {
  try {
    const data = localStorage.getItem('newsletterSubscribers');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading subscribed emails:', error);
    return [];
  }
};

// Subscribe email to newsletter
export const subscribeEmail = (email) => {
  try {
    const subscribers = getSubscribedEmails();

    // Check if email already exists
    if (subscribers.some((sub) => sub.email === email)) {
      return {
        success: false,
        message: 'This email is already subscribed',
        duplicate: true,
      };
    }

    const newSubscriber = {
      id: Date.now(),
      email: email,
      subscribedAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      status: 'active',
    };

    subscribers.push(newSubscriber);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));

    return {
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscriber: newSubscriber,
    };
  } catch (error) {
    console.error('Error subscribing email:', error);
    return { success: false, message: 'Error subscribing email' };
  }
};

// Unsubscribe email
export const unsubscribeEmail = (email) => {
  try {
    const subscribers = getSubscribedEmails();
    const filtered = subscribers.filter((sub) => sub.email !== email);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(filtered));
    return { success: true, message: 'Successfully unsubscribed' };
  } catch (error) {
    console.error('Error unsubscribing:', error);
    return { success: false, message: 'Error unsubscribing' };
  }
};

// Get total subscribers count
export const getSubscribersCount = () => {
  return getSubscribedEmails().length;
};

// Check if email is subscribed
export const isEmailSubscribed = (email) => {
  return getSubscribedEmails().some((sub) => sub.email === email);
};

// Export emails as CSV
export const exportEmailsAsCSV = () => {
  const subscribers = getSubscribedEmails();
  let csv = 'ID,Email,Subscribed Date,Status\n';

  subscribers.forEach((sub) => {
    csv += `${sub.id},"${sub.email}","${sub.subscribedAt}","${sub.status}"\n`;
  });

  return csv;
};

// Download emails as file
export const downloadEmailsAsFile = () => {
  const csv = exportEmailsAsCSV();
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
  );
  element.setAttribute('download', `newsletter-subscribers-${Date.now()}.csv`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

// Download emails as JSON
export const downloadEmailsAsJSON = () => {
  const subscribers = getSubscribedEmails();
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:application/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(subscribers, null, 2))
  );
  element.setAttribute('download', `newsletter-subscribers-${Date.now()}.json`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * STATISTICS
 */

export const getDataStatistics = () => {
  const submissions = getContactFormSubmissions();
  const subscribers = getSubscribedEmails();

  return {
    contactSubmissions: {
      total: submissions.length,
      lastSubmission:
        submissions.length > 0
          ? submissions[submissions.length - 1].timestamp
          : null,
      avgSubmissionsPerDay:
        submissions.length > 0
          ? (submissions.length / getDaysSinceFirstSubmission(submissions)).toFixed(2)
          : 0,
    },
    newsletter: {
      totalSubscribers: subscribers.length,
      lastSubscribed:
        subscribers.length > 0
          ? subscribers[subscribers.length - 1].subscribedAt
          : null,
      avgSubscriptionsPerDay:
        subscribers.length > 0
          ? (subscribers.length / getDaysSinceFirstSubscription(subscribers)).toFixed(2)
          : 0,
    },
    generatedAt: new Date().toISOString(),
  };
};

// Helper function to calculate days since first submission
const getDaysSinceFirstSubmission = (submissions) => {
  if (submissions.length === 0) return 1;
  const firstDate = new Date(submissions[0].timestamp);
  const today = new Date();
  const diffTime = Math.abs(today - firstDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
};

// Helper function to calculate days since first subscription
const getDaysSinceFirstSubscription = (subscribers) => {
  if (subscribers.length === 0) return 1;
  const firstDate = new Date(subscribers[0].subscribedAt);
  const today = new Date();
  const diffTime = Math.abs(today - firstDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
};

// Clear all data (use with caution)
export const clearAllData = () => {
  try {
    localStorage.removeItem('contactFormSubmissions');
    localStorage.removeItem('newsletterSubscribers');
    return { success: true, message: 'All data cleared' };
  } catch (error) {
    console.error('Error clearing data:', error);
    return { success: false, message: 'Error clearing data' };
  }
};

// Export all data as single JSON file
export const downloadAllDataAsJSON = () => {
  const allData = {
    contactSubmissions: getContactFormSubmissions(),
    newsletterSubscribers: getSubscribedEmails(),
    statistics: getDataStatistics(),
    exportedAt: new Date().toISOString(),
  };

  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:application/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(allData, null, 2))
  );
  element.setAttribute('download', `portfolio-data-backup-${Date.now()}.json`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};