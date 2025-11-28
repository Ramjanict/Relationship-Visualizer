import { useEffect, useState } from "react";
import { usePersonStore } from "../usePersonStore";

export default function TextEditor() {
  const [text, setText] = useState(`{
  id: 1,
  name: "রহিম উদ্দিন",
  age: 35,
  relations: [
    { id: 2, relation: "স্ত্রী" },
    { id: 3, relation: "ছেলে" }
  ]
}
{
  id: 2,
  name: "সাবিনা আক্তার",
  age: 30,
  relations: [
    { id: 1, relation: "স্বামী" },
    { id: 3, relation: "ছেলে" }
  ]
}
{
  id: 3,
  name: "আরিফ রহমান",
  age: 20,
  relations: [
    { id: 1, relation: "পিতা" },
    { id: 2, relation: "মাতা" }
  ]
}`);

  const setPersons = usePersonStore((s) => s.setPersons);

  useEffect(() => {
    setPersons(text);
  }, []);

  return (
    <textarea
      className="w-full h-full p-4 font-mono text-sm border rounded-lg outline-none bg-gray-50"
      value={text}
      placeholder="Type or paste person objects..."
      onChange={(e) => {
        setText(e.target.value);
        setPersons(e.target.value);
      }}
    />
  );
}
