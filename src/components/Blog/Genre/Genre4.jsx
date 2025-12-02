import React from 'react'
import { Link } from 'react-router-dom'
import bestSeo from '../../../assets/images/best_cms_for_seo_in_2025.png';

function Genre1() {
  return (
    <div>
      <div className="blogBoxMain h-[80vh] w-[100vw] bg-emerald-0">

        <div className="blogBox h-[57vh] w-[100vw] m-auto mt-10 flex justify-around items-center">

          {/* BLOG CARD */}
          <Link to="/Best-CMS-for-seo-in-2025" className="w-[22%]">
            <div className="blog1 h-[92%] w-full flex flex-col justify-between items-center !p-2 hover:scale-105 transition-transform duration-300 ease-in-out">

              <div className="blogImage1 h-[48%] w-full">
                <img className="h-[110%] w-full" src={bestSeo} alt="" />
              </div>

              <div className="blogWriteUps1 h-[50%] w-full flex flex-col justify-around items-start cursor-pointer">
                <p className="font-light text-[0.9rem]">19/11/2025</p>
                <h2 className="font-bold text-[1.5rem]">
                  Best CMS for SEO in 2025 | WordPress, Webflow..
                </h2>
                <p className="font-medium text-[0.8rem]">
                  If you are looking for an ultimate solution for your SEO powered CMS, here’s the truth...
                </p>
              </div>

            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Genre1
