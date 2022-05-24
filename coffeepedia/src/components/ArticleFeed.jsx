import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ARTICLES } from "../queries/articles";
import ArticleList from "./ArticleList";
import DropdownMenu from "./DropdownMenu";
import Loading from "./Loading";

export default function ArticleFeed() {
  const { loading, error, data } = useQuery(GET_ARTICLES);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-s-light">
      {/* Header */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <DropdownMenu />
          <header className="bg-p-dark pt-6 shadow-md">
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

          <section className="bg-s-light py-4">
            {/* Headcrumbs */}
            <div className="mb-4 inline-flex space-x-4 px-6">
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
            <section className="flex snap-x snap-mandatory gap-6 overflow-x-auto pl-6 after:w-2/5">
              {data.getAllArticle.slice(0, 3).map((article) => (
                <div
                  key={article._id}
                  onClick={() => navigate(`/articles/${article._id}`)}
                  className="mb-6 inline-block w-4/5 shrink-0 cursor-pointer snap-center "
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute bottom-0 w-full bg-p-dark bg-opacity-60 py-4 px-4">
                      <span className="rounded-xl bg-s-light px-2 py-[2px] text-[10px] font-medium text-grey-600">
                        {article.tag[0]}
                      </span>

                      <h1 className="text-2xl font-semibold text-white">
                        {article.title}
                      </h1>

                      <span className="ml-2 text-xs text-white">
                        by {article.author}
                      </span>
                    </div>

                    <img
                      src={article.imageUrl}
                      alt="banner"
                      className="h-[380px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </section>
          </section>

          {/* Article List */}
          <ArticleList articles={data.getAllArticle.slice(3)} />
        </>
      )}
    </section>
  );
}
