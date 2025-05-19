import React from 'react';

const changeRequest = {
  changeId: 'CHG-001',
  title: 'System Upgrade to Version 2.0',
  description: 'Upgrade the production environment to the latest version of our software platform. This includes database migration, API updates, and security patches. The upgrade will be performed during the maintenance window to minimize impact on users.',
  reportedBy: 'John Smith',
  teamId: 'IT-001',
  startTime: '2024-04-15T10:00',
  endTime: '2024-04-15T12:00',
  totalDownTime: '2 hours',
  impactLevel: 'High',
  potentialRisk: 'System downtime during upgrade process. Potential data synchronization issues between old and new versions. Risk of rollback if upgrade fails.',
  comment: 'All systems will be backed up before upgrade. Team will be on standby during the process. Communication will be sent to all stakeholders.',
  createdAt: '2024-04-14T15:00',
  isBold: 'yes'
};

const fieldLabels = {
  changeId: 'Change ID',
  title: 'Title',
  description: 'Description',
  reportedBy: 'Reported By',
  teamId: 'Team ID',
  startTime: 'Start Time',
  endTime: 'End Time',
  totalDownTime: 'Total Down Time',
  impactLevel: 'Impact Level',
  potentialRisk: 'Potential Risk',
  comment: 'Comment',
  createdAt: 'Created At',
  isBold: 'Is Bold'
};

// Define which columns should have expanded width
const expandedColumns = ['description', 'potentialRisk', 'comment'];

const MainPage = () => (
  <div className="max-w-7xl mx-auto py-20 px-10">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">Change Request Details</h1>
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full border border-gray-200 table-fixed">
        <thead>
          <tr>
            {Object.keys(changeRequest).map((key) => (
              <th
                key={key}
                className="px-4 py-3 bg-gray-100 text-gray-700 font-semibold border-b border-gray-200 text-sm whitespace-nowrap w-[200px]"
              >
                {fieldLabels[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(changeRequest).map((key) => (
              <td 
                key={key} 
                className="px-4 py-3 border-b border-gray-100 text-gray-900 align-top w-[200px]"
              >
                <div className="relative group">
                  <div className="truncate max-w-full">
                    {changeRequest[key] || <span className="text-gray-400">—</span>}
                  </div>
                  {/* Tooltip */}
                  <div className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white p-2 rounded shadow-lg max-w-md mt-1 left-0 transform -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="whitespace-normal break-words">
                      {changeRequest[key] || <span className="text-gray-400">—</span>}
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute bottom-0 left-4 transform translate-y-full">
                      <div className="border-8 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MainPage;
