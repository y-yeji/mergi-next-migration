"use client";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

interface NotificationProps {
  onClose: () => void;
}

interface Notification {
  id: number;
  usernickName: string;
  postTitle: string;
  notificationType: string;
  created_at: string;
}

const mockNotificationData: Notification[] = [
  {
    id: 1,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 참가 신청을 했습니다.",
    created_at: "방금전",
  },
  {
    id: 2,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 참가 신청을 했습니다.",
    created_at: "방금전",
  },
  {
    id: 3,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 참가 신청을 했습니다.",
    created_at: "방금전",
  },
  {
    id: 4,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 참가 신청을 했습니다.",
    created_at: "방금전",
  },
  {
    id: 5,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 댓글을 남겼습니다.",
    created_at: "방금전",
  },
  {
    id: 6,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 댓글을 남겼습니다.",
    created_at: "방금전",
  },
  {
    id: 7,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 댓글을 남겼습니다.",
    created_at: "방금전",
  },
  {
    id: 8,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 댓글을 남겼습니다.",
    created_at: "방금전",
  },
  {
    id: 9,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 참가 신청을 했습니다.",
    created_at: "방금전",
  },
  {
    id: 10,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 참가 신청을 했습니다.",
    created_at: "방금전",
  },
  {
    id: 11,
    usernickName: "병알이다요",
    postTitle: "멘토링 관련 프로젝트",
    notificationType: "에 댓글을 남겼습니다.",
    created_at: "방금전",
  },
];

const Notification = ({ onClose }: NotificationProps) => {
  const [activeNotiTab, setActiveNotiTab] = useState<"전체" | "미확인">("전체");

  return (
    <article className="relative w-[526px] h-[591px] p-10 rounded-[20px] bg-secondary-2">
      <div>
        <h2 className="h2-b text-gray-80">알림 목록</h2>
        <button className="cursor-pointer" onClick={onClose}>
          <X
            className="absolute top-5 right-5 text-gray-50"
            width={28}
            height={28}
          />
        </button>
      </div>
      <div className="mb-2">
        <nav className="flex justify-between items-center">
          <div className="flex gap-2">
            <span>
              <button
                onClick={() => {
                  setActiveNotiTab("전체");
                }}
                className={`body-b cursor-pointer ${
                  activeNotiTab === "전체"
                    ? "text-primary-3 border-b-2 border-primary-3"
                    : "text-gray-50 border-b-2 border-transparent"
                }`}
              >
                전체
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  setActiveNotiTab("미확인");
                }}
                className={`body-b cursor-pointer ${
                  activeNotiTab === "미확인"
                    ? "text-primary-3 border-b-2 border-primary-3"
                    : "text-gray-50 border-b-2 border-transparent"
                }`}
              >
                미확인
              </button>
            </span>
          </div>
          <span>
            <button className="caption-m text-gray-50 cursor-pointer">
              모두 읽음
            </button>
          </span>
        </nav>
      </div>
      <div>
        <ul className="notification-list w-[446px] h-[424px] flex flex-col gap-2 overflow-y-scroll overflow-x-hidden">
          {mockNotificationData.map((notification) => (
            <Link href="/">
              <li
                key={notification.id}
                className="w-[436px] h-10 flex justify-between items-center py-2 px-[18px] text-gray-80 bg-white rounded-lg input-shadow hover:bg-secondary-1 cursor-pointer"
              >
                <p className="truncate body-m">
                  <span className="text-primary-3">
                    {notification.usernickName}
                  </span>
                  님이
                  <span className="ml-1 text-primary-3">
                    {notification.postTitle}
                  </span>
                  {notification.notificationType}
                </p>
                <span className="caption-m text-primary-4">
                  {notification.created_at}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default Notification;
