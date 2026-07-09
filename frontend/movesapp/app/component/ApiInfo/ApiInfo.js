"use client";

import { useEffect, useState } from "react";

export default function ApiInfo() {

  const [info, setInfo] = useState(null);

  useEffect(() => {

    fetch("/api/info")
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(console.error);

  }, []);

  if (!info) {
    return (
      <p className="text-center text-white">
        Loading infrastructure status...
      </p>
    );
  }

  return (
    <div
      className="text-white"
      style={{
        textAlign: "center",
        marginTop: "20px",
        opacity: 0.8
      }}
    >
      <h3>Infrastructure Status</h3>

      <p>API : {info.api}</p>

      <p>Container : {info.hostname}</p>

      <p>PostgreSQL : {info.database}</p>

      <p>Redis : {info.redis}</p>

      <p>{new Date(info.time).toLocaleString()}</p>

    </div>
  );
}
