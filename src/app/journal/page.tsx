import { ExportToGPXButton } from "@journal/feature/journal/ExportToGPXButton";
import { Journal } from "@journal/feature/journal/Journal";

const getActivities = async () => {
  // @TODO: add API_URL to .env
  const response = await fetch("http://localhost:3000/api/activities");
  const data = response.json();

  return data;
};

const JournalPage: React.FC = async () => {
  const activities = await getActivities();

  return (
    <>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Strava Journal
        </h1>

        <ExportToGPXButton />

        <Journal activities={activities} />
      </main>
    </>
  );
};

export default JournalPage;
