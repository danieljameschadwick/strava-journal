interface Activity {}

interface Props {
  activities: Activity[];
}

export const Journal: React.FC<Props> = ({ activities }) => {
  return (
    <>
      <div className="flex flex-col">
        {activities.map((activity) => {
          return (
            <div className="text-white">
              {activity.id}, {activity.name}, {activity.distance},{" "}
              {activity.start_date}
            </div>
          );
        })}
      </div>
    </>
  );
};
