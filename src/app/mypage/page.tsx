"use client";

import TabMenu from "@/components/common/TabMenu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { POSITION } from "@/constants/position";
import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileTab from "../../components/profile/ProfileTab";
import MyPostsTab from "./components/MypostsTab";
import MyApplicationsTab from "./components/MyApplicationsTab";
import FavoritesTab from "./components/FavoritesTab";
import PositionBadge from "@/components/common/PositionBadge";

const tabMenuItems = [
  { label: "내 정보", value: "profileTab" },
  { label: "작성한 모집글", value: "myPostsTab" },
  { label: "내가 신청한 목록", value: "myapplicationsTab" },
  { label: "찜 목록", value: "favoritesTab" },
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
            <Button className="w-[101px] h-[30px] py-[6px] rounded-sm px-3 caption-r text-white bg-primary-1 cursor-pointer">
              <Link href="/mypage/edit" className="flex items-center gap-[6px]">
                <Settings width={13} height={13} className="text-white" />
                프로필 수정
              </Link>
            </Button>
          </div>
          <PositionBadge className="flex gap-[15px] mb-[10px]" />
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
            {selectedTab === "myPostsTab" && (
              <div className="mt-6 p-4">
                <MyPostsTab />
              </div>
            )}
            {selectedTab === "myapplicationsTab" && (
              <div className="mt-5 px-6 pb-10">
                <MyApplicationsTab />
              </div>
            )}
            {selectedTab === "favoritesTab" && (
              <div className="mt-11 pb-10">
                <FavoritesTab />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
