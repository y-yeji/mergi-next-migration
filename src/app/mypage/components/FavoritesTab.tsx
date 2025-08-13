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
];

const FavoritesTab = () => {
  const hasFavoritePost = postList.length > 0;
  return (
    <div className="px-4">
      {hasFavoritePost ? (
        <section>
          <ul className="flex flex-wrap justify-between gap-x-4 gap-y-8">
            {postList.map((item) => (
              <li className="mb-8 last:mb-0">
                <Postcard
                  key={item.id}
                  usernickName={item.usernickName}
                  description={item.description}
                  created_at={item.created_at}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="h-[715px] mx-auto mt-48">
          <div className="flex flex-col justify-center items-center">
            <h3 className="h3-b text-center text-primary-4 mb-5">
              찜 목록이 없습니다.
            </h3>
            <Link href="/">
              <Button className="w-[177px] h-[41px]  py-[8.5px] px-[25px] text-center rounded-lg body-large-m text-white bg-primary-3 hover:bg-primary-3  cursor-pointer">
                찾아보러 가볼까요?
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};
export default FavoritesTab;
