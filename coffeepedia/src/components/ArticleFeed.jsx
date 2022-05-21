import ArticleList from "./ArticleList";

export default function ArticleFeed() {
  return (
    <section className="min-h-screen bg-s-light">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-p-dark shadow-md">
        <nav className="flex justify-between py-2 px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </nav>
      </header>

      <section className="bg-s-light px-6 py-4">
        {/* Headcrumbs */}
        <div className="mb-4 inline-flex space-x-4">
          <span className="cursor-pointer text-lg font-bold text-p-dark">
            Popular
          </span>
          <span className="cursor-pointer text-lg font-semibold text-grey-700">
            Trending
          </span>
          <span className="cursor-pointer text-lg font-semibold text-grey-700">
            Recent
          </span>
        </div>

        {/* Banner */}
        <div className="mb-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute bottom-0 bg-p-dark bg-opacity-70 py-4 px-4">
              <h1 className="text-3xl font-semibold text-white">
                Hello World!
              </h1>
              <p className="text-p-light">
                Lorem impsum, lorem ipsum lorem ipsum. Dolor sit amet lorem
                ipsum.
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777"
              alt="banner"
              className="h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article List */}
      <ArticleList />
    </section>
  );
}
