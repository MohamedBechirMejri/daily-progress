"use client";

import { useState } from "react";

import p from "~/data/placeholders.json";

export default function Home() {
  const [projects, setProjects] = useState(p);
  const [project, setProject] = useState(projects[0]);
  const [history, setHistory] = useState(project.history);
  const [current, setCurrent] = useState(project.history[0]);
  const [tasks, setTasks] = useState(current.tasks);

  return (
    <div className="grid grid-cols-[1fr,6fr] gap-4 h-[100svh] w-full p-3">
      <div className="border border-black rounded-2xl">
        <h1>History</h1>
        <div>
          {history.map(h => (
            <div key={h.id}>{h.name}</div>
          ))}
        </div>
      </div>
      <div className="border border-black rounded-2xl grid grid-rows-[auto,1fr,auto] overflow-hidden">
        <h1>{current?.name}</h1>
        <div>
          {current?.tasks.map((task: any) => {
            const details = task.lifespan.at(-1);
            return <div key={task.id}>{details.task}</div>;
          })}
        </div>
        <div className="w-full flex p-4 gap-4">
          <input type="text" className="w-full border p-4 rounded-2xl" />
          <button className="p-4 border rounded-2xl px-8">s</button>
        </div>
      </div>
    </div>
  );
}
