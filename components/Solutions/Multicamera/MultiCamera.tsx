import React from "react";
import MulticameraSolution from "./MulticameraSolution";
import DesignedSports from "./designedSports";
import MulticameraBanner from "./multicameraBanner";

const MultiCamera: React.FC = () => {
  return (
    <div>
      <MulticameraBanner />
      <MulticameraSolution />
      <DesignedSports />
    </div>
  );
};

export default MultiCamera;