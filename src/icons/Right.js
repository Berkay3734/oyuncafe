import React from "react";

const Right = ({ onClick }) => {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nO2VQQqAIBAA177QPwv9SuEhHzshBS106bArRc4DZmRXVOTtAKOXOAArB7OHPHMRvU5e2YChy0PrsYSfyytAUvJsKj8D0TtQR7S43JwesdpJabGT8ulIVpFkGpD7UzKZB1TI59N/yg4FY5GKin6iqwAAAABJRU5ErkJggg=="
      alt="Right icon"
      style={{ transform: "rotate(180deg)", cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

export default Right;
