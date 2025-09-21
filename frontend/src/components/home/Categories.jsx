import React, { useEffect, useState } from "react";

function Categories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shop by category
          </h2>

          <a
            href="#"
            title=""
            className="flex items-center text-base font-medium text-blue-700 hover:underline dark:text-gray-500"
          >
            See more categories
            <svg
              className="ms-1 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data.map((category) => (
            <a
              key={category.id}
              href="#"
              className="flex items-center rounded-lg border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors cursor-pointer "
            >
              <img
                src={
                  category.image && !category.image.includes("placeimg.com")
                    ? category.image
                    : `https://placehold.co/48x48/cccccc/666666?text=${encodeURIComponent(
                        category.name.substring(0, 2).toUpperCase()
                      )}`
                }
                alt={category.name}
                className="w-12 h-12 object-cover rounded-md mr-3"
                onError={(e) => {
                  e.target.src = `https://placehold.co/48x48/cccccc/666666?text=${encodeURIComponent(
                    category.name.substring(0, 2).toUpperCase()
                  )}`;
                }}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
