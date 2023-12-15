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
    <div className="grid grid-cols-7 grid-rows-[repeat(7,minmax(0,1fr))] gap-4 h-[100svh] w-full p-3">
      <div className="[grid-row:span_7/span_7] border-4 border-black">
        <h1>History</h1>
        <div>
          {history.map(h => (
            <div key={h.id}>{h.name}</div>
          ))}
        </div>
      </div>
      <div className="col-span-5 row-span-6 border-4 border-black">
        <h1>{current?.name}</h1>
        <div>
          {current?.tasks.map((task: any) => {
            const details = task.lifespan.at(-1);
            return <div key={task.id}>{details.task}</div>;
          })}
        </div>
      </div>
      <div className="col-span-5 col-start-2 row-start-7 grid grid-cols-[1fr,12rem] gap-4">
        <input type="text" className="border-4 border-black h-full w-full" />
        <button className="border-4 border-black h-full w-full">submit</button>
      </div>

      <div className="[grid-row:span_7/span_7] border-4 border-black">
        <h1>History</h1>
        <div>
          {history.map(h => (
            <div key={h.id}>{h.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
