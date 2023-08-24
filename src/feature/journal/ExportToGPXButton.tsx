"use client";

export const ExportToGPXButton = () => {
  const handleExportToGPX = () => {
    // const response = getActivitiesGPX();
  };

  return (
    <div className="mb-2">
      <button className="text-white" onClick={handleExportToGPX}>
        Export activities to GPX
      </button>
    </div>
  );
};
