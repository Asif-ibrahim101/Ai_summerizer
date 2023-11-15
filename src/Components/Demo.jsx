import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from '../assets';
import {useLazyGetSummaryQuery} from '../Services/Article';

function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: ""
  });

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleSubmmit = async (e)=> {
    e.preventDefault();
    const {data} = await getSummary({articleUrl: article.url});

    if(data?.summary) {
      const newArticle = {...article, summary: data.summary };

      setArticle(newArticle);
      console.log(newArticle);
    }

  };

  return (
    <>
      <section className="mt-16 w-full max-w-xl">
        {/* Search */}

        <div className="flex flex-col w-full gap-2">
          <form
            onSubmit={handleSubmmit}
            className="relative flex justify-center items-center"
          >
            <img src={linkIcon} alt="icon" className="absolute left-0 my-2 ml-3 w-5" />

            <input
              className="url_input peer" type="url" placeholder="Enter a url"
              value={article.url}
              onChange={(e) => setArticle({
                ...article, url: e.target.value
              })}
              required
            />

            <button className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700" type="submmit">
              <p>↵</p>
            </button>
          </form>

          {/* Browse URL History */}

        </div>

        {/* Display result */}
      </section>
    </>
  )
}

export default Demo