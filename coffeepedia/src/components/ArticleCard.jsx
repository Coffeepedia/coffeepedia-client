import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/articles/${article._id}`)}
      className="mb-8 flex h-[100px] w-full cursor-pointer justify-between"
    >
      <div className="flex basis-2/3 flex-col">
        <div className="basis-1/4 space-x-2">
          <span className="text-xs text-grey-900">by {article.author}</span>
        </div>

        <h1 className="basis-1/2 text-lg font-semibold">{article.title}</h1>

        <div className="items-center flex basis-1/4 space-x-1">
          <span className="text-xs text-grey-700">{article.createdAt}</span>
          <span>⸱</span>
          <span className="rounded-xl bg-grey-300 px-2 py-[2px] text-[10px] font-medium text-grey-600">
            {article.tag[0]}
          </span>
        </div>
      </div>

      <div className="flex basis-1/3 justify-end">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-[100px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
