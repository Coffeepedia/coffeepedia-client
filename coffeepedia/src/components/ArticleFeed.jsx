import { useNavigate } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function ArticleFeed() {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: "Article 1 Title Article 1 Title Article 1 Title",
      content: "Article 1 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 1 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
    {
      id: 2,
      title: "Article 2 Title",
      content: "Article 2 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 2 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
    {
      id: 3,
      title: "Article 3 Title",
      content: "Article 3 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 3 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
    {
      id: 4,
      title: "Article 4 Title",
      content: "Article 4 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 4 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
    {
      id: 5,
      title: "Article 5 Title",
      content: "Article 5 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 5 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
    {
      id: 6,
      title: "Article 6 Title",
      content: "Article 6 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 6 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
    {
      id: 7,
      title: "Article 7 Title",
      content: "Article 7 content",
      imageUrl:
        "https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777",
      author: "Article 7 Author",
      tag: ["Productivity", "Tag 2", "Tag 3"],
      createdAt: new Date().toLocaleDateString("id-ID"),
    },
  ];

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
          {articles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/articles/${article.id}`)}
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

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-5 w-5 rounded-full bg-primary stroke-white p-[2px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="ml-2 text-xs text-white">
                    {article.author}
                  </span>
                </div>

                <img
                  src="https://media.istockphoto.com/photos/a-man-and-a-woman-clinking-coffee-mugs-in-cafe-picture-id1323637777"
                  alt="banner"
                  className="h-[380px] object-cover"
                />
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Article List */}
      <ArticleList articles={articles} />
    </section>
  );
}
