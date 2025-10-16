import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', apiUrl);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Workouts</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Workout</th>
              <th>Duration (min)</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{workout.user}</td>
                <td>{workout.workout}</td>
                <td>{workout.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workouts;
