import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProjectImage = () => {
  return (
    <section className="w-[1120px] mx-auto mb-10 py-9 px-6 shadow-[0px_0px_8px_rgba(0,0,0,0.11)] rounded-lg bg-white">
      <h2 className="flex items-center h2-b mb-11">
        <div className="w-6 h-6 mr-4 rounded-full bg-primary-2 h4-b text-white text-center align-middle">
          2
        </div>
        프로젝트를 소개하는 이미지를 첨부해주세요
      </h2>
      <div>
        <div className="w-[1072px] max-h-full min-h-[390px] mb-12 rounded-lg border-primary-4 border-2 border-dashed bg-secondary-2"></div>
        <div className="flex justify-end items-center">
          <Button
            tone="secondary"
            className="w-[88px] h-9 py-[6px] px-3 body-m rounded-sm cursor-pointer"
          >
            이미지 삭제
          </Button>
          <Button
            tone="primary"
            className="ml-3 w-[101px] h-9 py-[6px] px-3 body-m rounded-sm cursor-pointer"
          >
            <Label htmlFor="upload-image" className="cursor-pointer">
              이미지 업로드
            </Label>
            <Input id="upload-image" type="file" className="hidden" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectImage;
