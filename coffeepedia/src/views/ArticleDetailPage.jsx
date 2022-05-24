import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { GET_ARTICLE } from "../queries/articles";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: {
      id: id,
    },
  });
  const navigate = useNavigate()
  const [bookmark, setBookmark] = useState(false);
  const backBtnHandler = () => {
    navigate(-1)
  };

  const bookmarkBtnHandler = () => {
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  };

  return (
    <div className="max-w-screen h-screen flex-col overflow-y-auto bg-s-light">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="relative">
            <svg
              onClick={() => backBtnHandler()}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5 left-3 h-12 w-12 fill-s-light hover:fill-p-dark"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              onClick={() => bookmarkBtnHandler()}
              xmlns="http://www.w3.org/2000/svg"
              className={
                bookmark
                  ? "absolute top-5 right-3 h-12 w-12 fill-s-light stroke-p-dark stroke-1"
                  : "absolute top-5 right-3 h-12 w-12 stroke-1"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="#EFEAD8"
            >
              <path
                className="round"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <img
              className="h-[320px] w-full object-cover shadow-md"
              src={data.getArticleById.imageUrl}
              alt=""
            />
          </div>
          <div className="bg-primary py-4 px-3 shadow-md">
            <div className="flex flex-wrap">
              {data.getArticleById.tag.map(tag => (<p key={tag} className="rounded-xl bg-grey-300 px-2 py-[2px] text-[10px] font-medium text-grey-600 mr-2 mb-2">
                {tag}
              </p>))}
              
            </div>
            <p className="mb-2 text-2xl font-bold text-s-light">
              {data.getArticleById.title}
            </p>
            <div className="flex">
              <p className="mr-1 text-xs text-p-light">Created at {data.getArticleById.createdAt}</p>
              <p className="text-xs text-p-light">by {data.getArticleById.author}</p>
            </div>
          </div>
          <div className="px-3 py-2">
            <pre className="whitespace-pre-wrap font-sans text-justify">{data.getArticleById.content.split('\n').join('\n\n')}</pre>
          </div>
        </>
      )}
    </div>
  );
}
