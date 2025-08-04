import Postcard from "../common/Postcard";
import StatusBadge from "../common/StatusBadge";

interface PostcardSectionList {
  title: string;
  badgeType: "success" | "warning" | "danger" | "done";
  badgeText: string;
}

const postList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const PostcardSectionList = ({
  title,
  badgeType,
  badgeText,
}: PostcardSectionList) => {
  return (
    <article className="mb-15">
      <h2 className="flex items-center  gap-[10px] mb-6 h1-b text-gray-90">
        {title}
        <StatusBadge badgeType={badgeType} badgeText={badgeText} />
      </h2>
      <div className="flex gap-[30px]">
        {postList.map((item) => (
          <Postcard key={item.id} />
        ))}
      </div>
    </article>
  );
};

export default PostcardSectionList;
