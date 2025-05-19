import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './Sidebar';

const ChangeUpdateForm = () => {
  const [formData, setFormData] = useState({
    changeId: '',
    title: '',
    description: '',
    reportedBy: '',
    teamId: '',
    startTime: '',
    endTime: '',
    totalDownTime: '',
    impactLevel: '',
    potentialRisk: '',
    comment: '',
    createdAt: '',
    isBold: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      changeId: '',
      title: '',
      description: '',
      reportedBy: '',
      teamId: '',
      startTime: '',
      endTime: '',
      totalDownTime: '',
      impactLevel: '',
      potentialRisk: '',
      comment: '',
      createdAt: '',
      isBold: ''
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-indigo-50">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-8 fixed h-full bg-white shadow-lg">
          <Sidebar />
        </div>
        <div className="flex-1 ml-80 py-20">
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-violet-100 rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-indigo-300 to-indigo-400">
                  <h2 className="text-2xl font-bold text-stone-900">Change Update Form</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Change ID */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Change ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="changeId"
                        value={formData.changeId}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        rows="4"
                        required
                      />
                    </div>

                    {/* Reported By */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Reported By <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="reportedBy"
                        value={formData.reportedBy}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Team ID */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Team ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="teamId"
                        value={formData.teamId}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Time Fields */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Start Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        End Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Total Down Time */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Total Down Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="totalDownTime"
                        value={formData.totalDownTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Impact Level */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Impact Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="impactLevel"
                        value={formData.impactLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      >
                        <option value="">Select Impact Level</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </select>
                    </div>

                    {/* Potential Risk */}
                    <div className="col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Potential Risk <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="potentialRisk"
                        value={formData.potentialRisk}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        rows="3"
                        required
                      />
                    </div>

                    {/* Comment */}
                    <div className="col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Comment <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        rows="3"
                        required
                      />
                    </div>

                    {/* Created At */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Created At <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        name="createdAt"
                        value={formData.createdAt}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                      />
                    </div>

                    {/* Radio Button Group */}
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-700">
                        Is Bold <span className="text-red-500">*</span>
                      </label>
                      <div className="flex space-x-6">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="isBold"
                            value="yes"
                            checked={formData.isBold === 'yes'}
                            onChange={handleChange}
                            className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="isBold"
                            value="no"
                            checked={formData.isBold === 'no'}
                            onChange={handleChange}
                            className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeUpdateForm;
