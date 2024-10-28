import { ChangeEvent, useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Enter some text"
      />
      <p>{text}</p>
    </div>
  );
};

export default TextInput;
