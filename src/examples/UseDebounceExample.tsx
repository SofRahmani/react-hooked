import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function UseDebounceExample() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const debounced = () => {
    setDebouncedValue(value);
  };

  const [isReady, cancel] = useDebounce(debounced, 1000, [value]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-ctp-text">
      <p>The input value will be debounced after 1 second. </p>
      <p>Use the cancel button to cancel the debounced function.</p>
      <p>Is ready: {isReady() ? "Yes" : "No"}</p>
      <p>
        isReady will return true if the function has been called within the
        specified delay, or null if the delay has not yet started.
      </p>
      <input
        className="bg-ctp-surface1 p-2 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <button
        className="bg-ctp-blue text-ctp-base py-2 px-4 rounded"
        onClick={() => cancel()}
      >
        Cancel
      </button>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}
