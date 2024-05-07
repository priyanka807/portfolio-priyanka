export default function BarGraph({ name, percent }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-[90%] px-6 text-lg  ">
        <h2>{name}</h2>
        <h2>{percent}%</h2>
      </div>
      <div
        class=" md:w-[90%] bg-neutral-200 h-4
     rounded-full  "
      >
        <div
          class="bg-blue-600 h-4 text-center  font-medium leading-none text-black rounded-full "
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
