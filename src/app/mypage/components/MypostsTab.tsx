import Postcard from "@/components/common/Postcard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const postList = [
  {
    id: 1,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 2,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 3,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 4,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 5,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 6,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 7,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 8,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 9,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 10,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 11,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
  {
    id: 12,
    usernickName: "파파고",
    description:
      "멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다 모집합니다모집합니다모집합니다모집...",
    created_at: 20250813,
  },
];

const MyPostsTab = () => {
  const hasPost = postList.length > 0;

  return (
    <div className="pb-10">
      {hasPost ? (
        <section className="flex justify-between flex-wrap gap-4 py-4">
          {postList.map((item) => (
            <Link href="/">
              <Postcard
                key={item.id}
                usernickName={item.usernickName}
                description={item.description}
                created_at={item.created_at}
              />
            </Link>
          ))}
        </section>
      ) : (
        <section className="h-[715px] mx-auto mt-48">
          <div className="flex flex-col justify-center items-center">
            <h3 className="h3-b text-center text-primary-4 mb-5">
              아직 작성한 모집글이 없습니다.
            </h3>
            <Link href="/">
              <Button className="w-[177px] h-[41px]  py-[8.5px] px-[25px] text-center rounded-lg body-large-m text-white bg-primary-3 hover:bg-primary-3  cursor-pointer">
                모집하러 가볼까요?
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyPostsTab;
