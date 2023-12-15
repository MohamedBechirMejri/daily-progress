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
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[100svh] w-full">
      <div className="row-span-5">
        <h1>History</h1>
        <div>
          {history.map(h => (
            <div key={h.id}>{h.name}</div>
          ))}
        </div>
      </div>
      <div className="col-span-4 row-span-4">
        <h1>{current?.name}</h1>
        <div>
          {current?.tasks.map((task: any) => {
            const details = task.lifespan.at(-1);
            return <div key={task.id}>{details.task}</div>;
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
