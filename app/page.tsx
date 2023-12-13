"use client";

import { useState } from "react";

export default function Home() {
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState<any>(null);
  const [input, setInput] = useState("");
  const [overlay, setOverlay] = useState(null);

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[100svh] w-full">
      <div className="row-span-5">
        <h1>History</h1>
        <div>
          {history.map(h => (
            <div key={h}>{h}</div>
          ))}
        </div>
      </div>
      <div className="col-span-4 row-span-4">
        <h1>{current?.name}</h1>
        <div>
          {current?.tasks.map((task: any) => {
            const details = task.lifespan.at(-1);
            return <div key={task.id}>{details.name}</div>;
          })}
        </div>
      </div>
      <div className="col-span-4 col-start-2 row-start-5">
        <input type="text" />
        <button>submit</button>
      </div>
    </div>
  );
}
