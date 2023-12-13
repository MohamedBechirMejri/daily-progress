export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[100svh] w-full">
      <div className="row-span-5">1</div>
      <div className="col-span-4 row-span-4">2</div>
      <div className="col-span-4 col-start-2 row-start-5">3</div>
    </div>
  );
}
