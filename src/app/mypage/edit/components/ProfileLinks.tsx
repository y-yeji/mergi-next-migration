import { Button } from "@/components/ui/button";
import { LinkIcon, Plus, X } from "lucide-react";

const ProfileLink = () => {
  return (
    <div>
      <section className="mb-11">
        <div className="flex justify-between items-center mb-3">
          <h2 className="h2-b">링크</h2>
          <Button
            variant="small"
            size="custom"
            color="primary"
            className="w-[93px] h-[30px] flex items-center gap-[6px] caption-r cursor-pointer"
          >
            <Plus className="text-white" size={18} /> 링크추가
          </Button>
        </div>
        <div className="w-full h-[45px] flex items-center px-2 py-3 bg-white rounded-lg input-shadow">
          <LinkIcon size={20} className="text-gray-50 mr-[6px]" />
          <input
            type="text"
            name=""
            id=""
            className="w-full body-r placeholder:text-gray-40 focus:placeholder-transparent"
            placeholder="깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 추가해 주세요."
          />
          <Button className="cursor-pointer">
            <X className="text-gray-50" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProfileLink;
