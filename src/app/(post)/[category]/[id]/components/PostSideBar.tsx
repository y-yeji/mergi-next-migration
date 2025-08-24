import React from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PositionSmallButton from "@/components/common/PositionSmallButton";

interface PostSideBarProps {
  showApplicantList: boolean;
  onShowApplicantList: () => void;
  onBack: () => void;
}

const PostSideBar: React.FC<PostSideBarProps> = ({
  onShowApplicantList,
  showApplicantList,
  onBack,
}) => {
  return (
    <aside className="flex-1 h-[100%] px-[28px] pt-6 pb-5 mx-auto rouneded-lg bg-secondary-3 card-shadow">
      <ul className="mb-6 text-gray-80">
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">모집 인원</strong>
          <span className="caption-r">0명 / 3명</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">진행 기간</strong>
          <span className="caption-r">00.00.00 ~ 00.00.00</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">모집 마감일</strong>
          <span className="caption-r">00.00.00</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">포지션</strong>
          <span className="caption-r">프론트엔드 개발자, UX/UI 디자이너</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">스킬</strong>
          <span className="caption-r">react, supabase, Figma</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">모집 지역</strong>
          <span className="caption-r">대구광역시</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">진행 방식</strong>
          <span className="caption-r">온라인</span>
        </li>
        <li className="grid grid-cols-[83px_1fr] mb-2">
          <strong className="caption-b">연락 방법</strong>
          <span className="caption-r">메일 | wl990@naver.com</span>
        </li>
      </ul>
      {/* 작성자가 아닌 경우 */}
      {/* <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="middle"
              color="primary"
              className="body-large-r cursor-pointer"
            >
              참여 신청
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="py-9 px-12 bg-secondary-2 rounded-[20px]">
            <AlertDialogHeader className="mb-4">
              <AlertDialogTitle className="h4-b text-center text-gray-70">
                어떤 포지션으로 신청하시겠어요?
              </AlertDialogTitle>
              <AlertDialogDescription className="capttion-r text-center text-gray-70">
                최대 3개까지 선택할 수 있어요.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <PositionSmallButton className="grid grid-cols-3 gap-3 p-5 bg-white rounded-lg input-shadow" />
            <AlertDialogFooter className="flex justify-center items-center gap-4">
              <AlertDialogCancel className="w-[182px] h-[41px] py-[10px] bg-white body-r text-gray-70 rounded-lg modal-button-shadow cursor-pointer">
                돌아가기
              </AlertDialogCancel>
              <AlertDialogAction className="w-[182px] h-[41px] py-[10px] bg-[#364861]/80 hover:bg-[#364861] body-r text-white rounded-lg modal-button-shadow cursor-pointer">
                완료하기
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div> */}
      {/* 작성자인 경우 */}
      <div className="flex flex-col gap-3">
        {!showApplicantList ? (
          <Button
            onClick={onShowApplicantList}
            variant="middle"
            color="primary"
            className="body-large-r cursor-pointer"
          >
            참여 신청자 목록 조회
          </Button>
        ) : (
          <Button
            onClick={onBack}
            variant="middle"
            color="primary"
            className="body-large-r cursor-pointer"
          >
            게시글로 돌아가기
          </Button>
        )}
        <Button
          variant="middle"
          color="secondary"
          className="body-large-r cursor-pointer"
        >
          모집 마감하기
        </Button>
      </div>
    </aside>
  );
};

export default PostSideBar;
