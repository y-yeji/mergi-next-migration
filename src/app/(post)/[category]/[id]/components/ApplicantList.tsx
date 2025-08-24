"use client";

import React from "react";
import FilterSelectbox from "@/components/common/FilterSelectbox";
import { useState } from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import PositionBadge from "@/components/common/PositionBadge";

const applicantListTabMenuItems = [
  { label: "전체", value: "all" },
  { label: "수락된 참여자", value: "accepted" },
];

interface ApplicantListProps {
  onBack: () => void;
  onShowApplicantList: () => void;
}

const mockApplicantData = [
  { id: 1, userName: "병알이삼사오육칠팔구" },
  { id: 2, userName: "병알이삼사오육칠팔구" },
  { id: 3, userName: "병알이삼사오육칠팔구" },
];

const ApplicantList: React.FC<ApplicantListProps> = ({
  onBack,
  onShowApplicantList,
}) => {
  const [applicantListSelectedTab, setApplicantListSelectedTab] =
    useState("all");

  const [isAccepted, setIsAccepted] = useState(false);
  const [acceptedIds, setAcceptedIds] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [showAcceptedButton, setShowAcceptedButton] = useState(false);

  const handleAcceptedClick = (id: number) => {
    setAcceptedIds((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const filteredApplicants = mockApplicantData.filter((applicant) =>
    applicantListSelectedTab === "all"
      ? true
      : acceptedIds[applicant.id] === true
  );

  return (
    <div className="max-w-[1280px] mt-10 mx-auto">
      <section>
        <div className="flex justify-between items-center gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3">
              {applicantListTabMenuItems.map((tab) => (
                <Button
                  key={tab.value}
                  className={`body-b cursor-pointer transition-none rounded-none px-0 ${
                    applicantListSelectedTab === tab.value
                      ? "text-primary-3 border-b-2 border-primary-3"
                      : "text-gray-50 border-b-2 border-transparent"
                  }`}
                  onClick={() => setApplicantListSelectedTab(tab.value)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <FilterSelectbox
              filterSelectType="short"
              filterTitle="모집 포지션"
              filterList={["백엔드", "프론트엔드", "디자이너"]}
            />
          </div>
        </div>
        <div>
          {mockApplicantData.map((applicantlist) => (
            <ul className="py-[14px] px-4 mb-3 rounded-lg input-shadow">
              <li
                key={applicantlist.id}
                className="flex justify-between items-start"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="/images/default-user-image.svg"
                      className="w-9 h-9 object-cover rounded-full"
                      alt="유저프로필이미지"
                    />
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="body-large-b">병알이삼사오육칠팔구</span>
                      <PositionBadge className="flex items-center gap-3" />
                    </div>
                    <span className="caption-r text-gray-50">
                      신청일 | 2024.01.22
                    </span>
                  </div>
                </div>
                <div>
                  {!acceptedIds[applicantlist.id] ? (
                    <>
                      <Button
                        variant="short"
                        color="primary"
                        className="mr-[6px] caption-r cursor-pointer"
                        onClick={() => handleAcceptedClick(applicantlist.id)}
                      >
                        수락
                      </Button>
                      <Button
                        variant="short"
                        color="secondary"
                        className="caption-r cursor-pointer"
                      >
                        거절
                      </Button>
                    </>
                  ) : (
                    <p className="my-4 caption-r text-primary-3">수락됨</p>
                  )}
                </div>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApplicantList;
