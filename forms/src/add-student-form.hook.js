import { useState } from "react";

export function useAddStudentForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");

  return {
    name,
    setName,
    from,
    setFrom,
  };
}
