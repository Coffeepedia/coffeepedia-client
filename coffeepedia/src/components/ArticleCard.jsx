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

          <span className="text-xs text-grey-900">{article.author}</span>
        </div>

        <h1 className="basis-1/2 text-lg font-semibold">{article.title}</h1>

        <div className="flex basis-1/4 items-center space-x-1">
          <span className="text-xs text-grey-700">{article.createdAt}</span>
          <span>⸱</span>
          <span className="rounded-xl bg-grey-300 px-2 py-[2px] text-[10px] font-medium text-grey-600">
            {article.tag[0]}
          </span>
        </div>
      </div>

      <div className="basis-1/3 flex justify-end">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-[100px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
