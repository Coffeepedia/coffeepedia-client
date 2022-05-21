import ArticleCard from "./ArticleCard";

export default function ArticleList() {
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
    <section className="rounded-t-3xl px-6 pt-2 shadow bg-white">
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
