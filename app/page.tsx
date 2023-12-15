"use client";

import { useState } from "react";

import p from "~/data/placeholders.json";

export default function Home() {
  const [projects, setProjects] = useState(p);
  const [project, setProject] = useState(projects[0]);
  const [history, setHistory] = useState(project.history);
  const [current, setCurrent] = useState(project.history[0]);

  return (
    <div className="grid grid-cols-[1fr,6fr] gap-4 h-[100svh] w-full p-3">
      <div className="border border-black rounded-2xl p-4">
        <h1 className="text-3xl font-bold">History</h1>
        <div className="pt-8">
          {history.map(h => (
            <button key={h.id} className="border w-full px-2 p-1 rounded-lg">{h.name}</button>
          ))}
        </div>
      </div>
      <div className="border border-black rounded-2xl grid grid-rows-[auto,1fr,auto] overflow-hidden p-4">
        <h1>{current?.name}</h1>
        <div>
          {current?.tasks.map((task: any) => {
            const details = task.lifespan.at(-1);
            return <div key={task.id}>{details.task}</div>;
          })}
        </div>
        <div className="w-full flex gap-4">
          <input type="text" className="w-full border p-4 rounded-2xl" />
          <button className="p-4 border rounded-2xl px-8">s</button>
        </div>
      </div>
    </div>
  );
}
