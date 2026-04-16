import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (data) => {
    setTimeline(prev => [data, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addToTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;