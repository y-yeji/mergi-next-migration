"use client";

import React, { useEffect, useState } from "react";
import FilterSelectbox from "@/components/common/FilterSelectbox";
import CommonPagination from "@/components/common/CommonPagination";
import Postcard from "@/components/common/Postcard";
import {
  MODE_TYPE,
  RECRUITMENT_STATUS,
  REGION,
} from "@/constants/filterOptions";
import { POSITION } from "@/constants/position";
import { Search } from "lucide-react";
import SkillsFillterSelectbox from "@/components/[category]/SkillsFilterSelectbox";

const postList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

const Page = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenFilter(null);
    if (openFilter) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [openFilter]);

  return (
    <div className="max-w-[1200px] pt-[50px] mx-auto">
      <section className="flex items-center justify-between mb-[20px]">
        <article className="flex gap-[13px]">
          <SkillsFillterSelectbox
            isOpen={openFilter === "skills"}
            onToggle={(e) => {
              e.stopPropagation();
              setOpenFilter(openFilter === "skills" ? null : "skills");
            }}
          />
          <FilterSelectbox
            filterSelectType="short"
            filterTitle="모집 포지션"
            filterList={POSITION}
          />
          <FilterSelectbox
            filterSelectType="short"
            filterTitle="지역"
            filterList={REGION}
          />
          <FilterSelectbox
            filterSelectType="short"
            filterTitle="진행 방식"
            filterList={MODE_TYPE}
          />
          <FilterSelectbox
            filterSelectType="short"
            filterTitle="모집 상태"
            filterList={RECRUITMENT_STATUS}
          />
        </article>
        <article>
          <div className="relative flex items-center group">
            <input
              type="search"
              value=""
              placeholder="제목 또는 내용을 검색하세요"
              className="w-[258px] h-[37px] py-2 pl-4 pr-3 rounded-lg body-r text-gray-40 input-shadow focus:placeholder-transparent focus:border border-primary-3 transition duration-100"
            />
            <button className="absolute left-[225px] cursor-pointer ">
              <Search
                className="text-gray-30 group-focus-within:text-primary-3 transition-colors duration-100"
                width={20}
                height={20}
              />
            </button>
          </div>
        </article>
      </section>
      <section className="flex justify-between flex-wrap gap-[30px] mb-12">
        {postList.map((item) => (
          <Postcard key={item.id} />
        ))}
      </section>
      <div className="pb-12">
        <CommonPagination />
      </div>
    </div>
  );
};

export default Page;
