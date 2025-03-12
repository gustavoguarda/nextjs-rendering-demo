"use client";

import { useState, useEffect, memo } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time.toLocaleString()}</span>;
};

export default memo(CurrentTime);
