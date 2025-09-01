import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function AwardList() {
  const [awards, setAwards] = useState([]);

  const fetchAwards = () => {
    api.get("awards/")
      .then((res) => setAwards(res.data))
      .catch((err) => console.error("Error fetching awards:", err));
  };

  useEffect(() => {
    fetchAwards();
  }, []);

  const deleteAward = (id) => {
    api.delete(`awards/${id}/`)
      .then(() => fetchAwards())
      .catch((err) => console.error("Error deleting award:", err));
  };

  return (
    <div>
      <h2>Awards</h2>
      <Link to="/awards/new">+ Add Award</Link>
      <ul>
        {awards.map((a) => (
          <li key={a.id}>
            {a.title} - {a.organization} ({a.year})
            <br />
            <Link to={`/awards/edit/${a.id}`}>Edit</Link>{" "}
            <button onClick={() => deleteAward(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AwardList;
