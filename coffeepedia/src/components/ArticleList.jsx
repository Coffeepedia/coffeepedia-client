import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <section className="rounded-t-3xl bg-white px-6 pt-3 shadow">
      {/* Header */}
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Anything about Coffee</h1>
        <span className="curson-pointer cursor-pointer text-sm font-semibold text-p-dark">
          See more
        </span>
      </header>

      {/* Cards */}
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
