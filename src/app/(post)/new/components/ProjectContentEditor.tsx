import { Editor } from "@/components/tiptap-templates/simple/simple-editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProjectContentEditor = () => {
  return (
    <section className="w-[1120px] mx-auto mb-4 py-9 px-6 shadow-[0px_0px_8px_rgba(0,0,0,0.11)] rounded-lg bg-white">
      <h2 className="flex items-center h2-b mb-11">
        <div className="w-6 h-6 mr-4 rounded-full bg-primary-2 h4-b text-white text-center align-middle">
          3
        </div>
        프로젝트의 세부 내용을 작성해주세요
      </h2>
      <div>
        <Label className="mb-3">
          <Input
            type="text"
            customType="font"
            className="w-[1072px] h-[50px] pl-4 py-[10px] input-shadow placeholder:text-gray-40 placeholder:text-b focus:placeholder:text-transparent"
            placeholder="제목을 작성해주세요"
          />
        </Label>
        <Editor />
      </div>
    </section>
  );
};

export default ProjectContentEditor;
