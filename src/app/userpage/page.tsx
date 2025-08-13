"use client";

import TabMenu from "@/components/common/TabMenu";
import ProfileTab from "@/components/profile/ProfileTab";
import { Badge } from "@/components/ui/badge";
import { POSITION } from "@/constants/position";

import Image from "next/image";
import { useState } from "react";
import ApplicationsTab from "./components/UserApplicationsTab";
import UserReviewListTab from "./components/UserReviewListTab";

const tabMenuItems = [
  { label: "자기 소개", value: "profileTab" },
  { label: "신청한 목록", value: "userapplicationsTab" },
  { label: "후기", value: "userreviewlistTab" },
];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("profileTab");

  const handleTabMenuClick = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="max-w-[1280px] mx-auto pt-12 pb-20">
      <section className="w-[928px] h-[220px] mx-auto flex justify-center items-center gap-11 py-12 px-[58px] mb-[52px] rounded-lg bg-white card-shadow">
        <div className="rounded-full">
          <Image
            src="/images/default-user-image.svg"
            alt="유저프로필이미지"
            width={124}
            height={124}
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="h2-b text-black">병알이</h2>
          <div className="flex justify-between items-center gap-[255px] mb-4">
            <p className="body-large-r text-gray-40">
              안녕하세요. 2년차 프론트엔드 개발자입니다 :)
            </p>
          </div>
          <ul className="flex gap-[15px] mb-[10px]">
            {POSITION.slice(0, 3).map((position) => (
              <li key={position}>
                <Badge variant="position">{position}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="max-w-[1120px] mx-auto rounded-lg bg-white card-shadow">
        <div className="mb-11">
          <TabMenu
            tabMenuListItem={tabMenuItems}
            selectedTab={selectedTab}
            onTabClick={handleTabMenuClick}
          />
        </div>
        <div>
          <div className=" bg-white shadow rounded">
            {selectedTab === "profileTab" && (
              <div className="mt-6 p-4 px-10">
                <ProfileTab />
              </div>
            )}
            {selectedTab === "userapplicationsTab" && (
              <div className="mt-5 px-6 pb-10">
                <ApplicationsTab />
              </div>
            )}
            {selectedTab === "userreviewlistTab" && (
              <div className="mt-6 p-4">{<UserReviewListTab />}</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
