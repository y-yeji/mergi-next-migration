import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, ThumbsUp } from "lucide-react";

const PostHeader = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handlelikeClick = () => {
    setIsLiked((prev) => !prev);
  };
  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div>
      <section className="pb-5 border-b">
        <div className="flex items-start gap-9">
          <h2 className="h2-b mb-5">
            파파고로 영어공부하자! 프로젝트 팀원 모집합니다 모집합니다
            모집합니다 집합니다 모집합니다 모집합니다 모집합니다 모집
          </h2>
          <div className="flex items-center body-m text-gray-50 gap-3">
            <Button className="cursor-pointer">수정</Button>
            <Button className="cursor-pointer">삭제</Button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="flex items-center gap-[10px]">
              <Avatar className="group size-[33px] cursor-pointer">
                <AvatarImage
                  src="/images/default-user-image.svg"
                  className="object-cover"
                  alt="유저프로필이미지"
                />
              </Avatar>
              <span className="body-b text-gray-80">파파고</span>
            </div>
            <span className="mx-2 text-gray-50">&middot;</span>
            <span className="caption-r text-gray-50">2025년 1월 31일</span>
          </div>
          <div className="flex items-center gap-[5px]">
            <Button
              variant="custom"
              className="w-8 h-8 rounded-full bg-white input-shadow cursor-pointer"
              onClick={handlelikeClick}
            >
              <ThumbsUp
                size={24}
                className={isLiked ? "text-primary-3" : "text-gray-50"}
              />
            </Button>
            <Button
              variant="custom"
              className="w-8 h-8 rounded-full bg-white input-shadow cursor-pointer"
              onClick={handleBookmarkClick}
            >
              <Bookmark
                size={24}
                className={isBookmarked ? "text-primary-3" : "text-gray-50"}
              />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-[50px]">
          <p className="caption-r text-gray-50">
            포지션 | <span className="text-gray-80">기획자</span>
          </p>
          <p className="caption-r text-gray-50">
            스킬 | <span className="text-gray-80">react, figma</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PostHeader;
