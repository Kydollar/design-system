export default function Home() {
  const result = 10 * 2;

  return (
    <>
      {[...Array(result)].map((_, index) => (
        <>
          <div key={index} className="flex flex-col items-center justify-between p-10">
            HOME
          </div>
        </>
      ))}
    </>
  );
}
