import { useState } from "react";

export default function ArticleDetailPage() {
  const [bookmark, setBookmark] = useState(false)
  const string =
    "      Lorem ipsum dolor \n \n sit amet, consectetur adipiscing elit. Phasellus id aliquet arcu, sit amet malesuada risus. Nulla facilisi. Sed vitae elit non lorem sagittis aliquet. Integer gravida ut tellus sed bibendum. Ut consequat justo ac consectetur efficitur. Praesent nibh ex, laoreet quis lorem quis, tincidunt luctus massa. Donec egestas turpis quis urna accumsan venenatis. Integer condimentum ligula eu porttitor volutpat. Maecenas viverra varius magna a posuere. Vestibulum fringilla blandit turpis id facilisis. Cras accumsan egestas magna. Proin blandit volutpat augue at vestibulum. Morbi tempus risus sollicitudin ultrices commodo. Vestibulum ut elit nisi. Aliquam ultrices ex id tellus tincidunt tincidunt. Etiam tincidunt, sem ut malesuada dignissim, eros quam iaculis sem, ut fermentum ligula enim a ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean congue ligula in lectus efficitur commodo. Aliquam erat volutpat. \n Nam lacinia non ligula at tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam fermentum eget lorem et consectetur. Integer laoreet diam eu dignissim facilisis. Sed accumsan efficitur commodo. Sed rutrum dapibus nisi, pellentesque consectetur tellus faucibus at. Sed nec diam justo. Cras placerat urna nec nisl mattis dictum. Quisque feugiat lectus ut orci interdum, in finibus sapien vehicula. Mauris tellus lacus, faucibus at pulvinar eu, gravida sagittis magna. Suspendisse eu lorem hendrerit, auctor urna sed, accumsan odio. Sed iaculis a massa non volutpat. Ut quis libero nec odio aliquet feugiat. Duis quis metus in magna bibendum condimentum eu nec metus. Praesent interdum nibh nisi, in pellentesque mi luctus et. Etiam tellus massa, sagittis in quam at, commodo pulvinar purus. ";

    const backBtnHandler = () => {
      console.log('Hit hit hit')
    }

    const bookmarkBtnHandler = () => {
      if(bookmark) {
        setBookmark(false)
      } else {
        setBookmark(true)
      }
    }

  return (
    <div className="max-w-screen h-screen flex-col overflow-y-auto bg-s-light">
      <div className="relative">
        <svg
          onClick={() => backBtnHandler()}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-5 left-3 h-12 w-12 hover:fill-p-dark"
          viewBox="0 0 20 20"
          fill="#EFEAD8"
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
          className={bookmark ? "absolute top-5 right-3 h-12 w-12 stroke-1" : "absolute top-5 right-3 h-12 w-12 stroke-1 fill-s-light stroke-p-dark"}
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
          src="https://majalah.ottenstatic.com/uploads/2016/05/62.jpg"
          alt=""
        />
      </div>
      <div className="bg-primary py-4 px-3 shadow-md">
        <div className="flex">
          <p className="text-md mb-2 mr-2 w-fit rounded-lg bg-p-dark px-2 py-0.5 font-semibold text-p-light">
            Tags
          </p>
          <p className="text-md mb-2 mr-2 w-fit rounded-lg bg-p-dark px-2 py-0.5 font-semibold text-p-light">
            Tags
          </p>
          <p className="text-md mb-2 mr-2 w-fit rounded-lg bg-p-dark px-2 py-0.5 font-semibold text-p-light">
            Tags
          </p>
        </div>
        <p className="mb-2 text-3xl font-bold text-s-light">
          Membuat Kopi Jahe dengan Alat Kopi
        </p>
        <div className="flex">
          <p className="mr-1 text-xs text-p-light">Created at Date</p>
          <p className="text-xs text-p-light">by Author</p>
        </div>
      </div>
      <div className="px-3 py-2">
        <pre className="whitespace-pre-wrap font-sans">{string}</pre>
      </div>
    </div>
  );
}
