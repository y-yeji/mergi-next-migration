"use client";

import PostSideBar from "./components/PostSideBar";
import Comments from "./components/Comments";
import { useState } from "react";
import ApplicantList from "./components/ApplicantList";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";

const Page = () => {
  const [showApplicantList, setShowApplicantList] = useState(false);
  return (
    <div className="w-[1120px] mx-auto pt-[50px] flex gap-8">
      <div className="mx-auto w-[738px]">
        <PostHeader />
        {showApplicantList ? (
          <ApplicantList
            onBack={() => setShowApplicantList(false)}
            onShowApplicantList={() => setShowApplicantList(true)}
          />
        ) : (
          <>
            <PostContent />
            <Comments />
          </>
        )}
      </div>
      <PostSideBar
        showApplicantList={showApplicantList}
        onShowApplicantList={() => setShowApplicantList(true)}
        onBack={() => setShowApplicantList(false)}
      />
    </div>
  );
};

export default Page;
