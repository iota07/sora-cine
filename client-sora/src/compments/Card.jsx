//available props {image, title, alt}
function Card(props) {
  return (
    <div
      className="flex cursor-pointer"
      onClick={() => props.onClick(props.youtube)}
    >
      <figure className="relative block w-28">
        <img className="w-screen" src={props.image} alt={props.title} />
        {/* Overlay 
          <figure className="svg-container absolute top-1 right-1 sm:top-3 sm:right-2 w-5 h-5 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </figure>

          <figure className="svg-container absolute top-8 right-1 sm:top-10 sm:right-2 w-5 h-5 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </figure>
          */}

        {/* Title */}
        <h1 className="p-1 text-xs text-slate-50">{props.title}</h1>
      </figure>
    </div>
  );
}

export default Card;
