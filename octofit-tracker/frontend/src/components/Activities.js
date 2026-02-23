import { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        console.log('Activities endpoint:', endpoint);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch activities: ${response.status}`);
        }

        const data = await response.json();
        console.log('Activities fetched data:', data);

        const normalizedData = Array.isArray(data)
          ? data
          : Array.isArray(data?.results)
            ? data.results
            : [];

        setActivities(normalizedData);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity.id}>
            {activity.user?.username || 'Unknown user'} - {activity.activity_type} ({activity.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;