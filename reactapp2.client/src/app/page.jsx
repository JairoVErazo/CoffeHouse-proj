export default function Home() {
  return (
    <div>
      <div className="flex items-center flex-col">
        <div className="flex">
          <div className="w-1/2 px-14 mt-14">
            <h1 className="text-rose-950 text-8xl text-center mb-4 ">
              Coffee House
            </h1>
            <p className="text-lg text-black" style={{ width: "600px" }}>
              "Coffee House" es un café fundado por Lucas, que se inspiró en sus
              viajes por el mundo. Ofrece café de alta calidad en un ambiente
              acogedor y sostenible. Además de café, sirve bocadillos caseros y
              es un lugar de encuentro para la comunidad. Con su enfoque en la
              calidad y la comunidad, "Coffee House" se ha convertido en un
              favorito local.
            </p>
          </div>
          <div className="w-1/2 px-14">
                      <img src="https://localhost:7195/Imagenes/3640c218-17fe-42e4-a3e7-e0f90a1cd19f.jpg" className="h-auto" alt="pastel" />
          </div>
        </div>
        <div className="flex">
          <div className="px-4 ml-12 mb-2">
            <img src="img/2.png" className="h-80" alt="pastel" />
          </div>
          <div className="px-4 ">
            <img src="img/3.png" className="h-80" alt="pastel" />
          </div>
          <div className="px-4">
            <img src="img/4.png" className="h-80" alt="pastel" />
          </div>
          <div className="px-4">
            <img src="img/5.png" className="h-80" alt="pastel" />
          </div>
        </div>
      </div>
    </div>
  );
}
