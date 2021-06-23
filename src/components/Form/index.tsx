import React, { useState } from "react";

export interface FormProps {
  label: string;
}

const Form: React.FC<FormProps> = ({ label }) => {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
        aria-label={label}
      />
    </form>
  );
};

export default Form;
