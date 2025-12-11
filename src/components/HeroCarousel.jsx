export default function HeroCarousel() {
  const slides = [
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/7bcca488-870c-4111-b694-f78e6973a3aa___2de7669eb48538c76b380d469c9dda02.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/405e824b-1bdb-4a4f-b758-0096d0356bcc___9116c6da8e0018b193308f809ec73128.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/d9e4e3d9-7ef9-49c0-81f1-9afeddc4c318___11f4794da263bac877e810a68e547236.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/5a17d236-a82c-4ddd-80a6-6a6e3b7f36d0___ee2bd42a9ecc40102daaac574cfd99be.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/c9e6be1d-3b5a-484c-8c55-03dcab29ca33___ed42cc85dcb4db8a3e0cdbd10b5e5dd9.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/b52bbe0d-e2c1-48ff-a94b-48e28f6e963c___7805b2fa3e152b24857a550dca0f9c25.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/b54c2484-b10c-4f9d-9d75-c3a0c95e4675___344cd8c4abc6f6425bd4c45ec023d590.png",
    "https://puppis.vtexassets.com/assets/vtex.file-manager-graphql/images/36eac80b-96b0-4681-a607-ee1f46e77735___2708053f8bb453b6748942da59f097df.png"
  ];

  return (
    <div className="container mt-3">

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >

        {/* indicadores */}
        <div className="carousel-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : "false"}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((src, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={src}
                className="d-block w-100 rounded-4"
                alt={`Slide ${index + 1}`}
                style={{ objectFit: "cover", maxHeight: "350px" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

      </div>
    </div>
  );
}
