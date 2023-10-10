import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const { data, isPending, error } = useFetch(
    "https://glow-spring-elf.glitch.me/recipes"
  );

  return (
    <div className="align-element">
      {isPending && <h2 className="textl-3xl font-bold">Loading</h2>}
      {error && <h2 className="textl-3xl font-bold">{error}</h2>}
      {data && (
        <ul className="py-20 grid grid-cols-3 gap-3">
          {data.map((item) => {
            return (
              <li
                key={item.id}
                className="card w-96 bg-base-100 shadow-xl max-w-[310px]"
              >
                <figure>
                  <img srcSet={item.img} alt="Recepie Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.method.substring(0, 100)}...</p>
                  <div className="card-actions justify-end">
                    <Link to={`${item.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;
