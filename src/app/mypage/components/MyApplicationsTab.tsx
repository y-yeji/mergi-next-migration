import ApplicationsCard from "@/components/common/ApplicationsCard";
import FilterSelectbox from "@/components/common/FilterSelectbox";
import { Button } from "@/components/ui/button";
import { APPLICATIONS_STATUS } from "@/constants/filterOptions";
import Link from "next/link";

type CardStatus = "success" | "warning" | "danger" | "done";

interface MyApplication {
  id: number;
  title: string;
  deadline: number;
  applicationsCardStatus: CardStatus;
  applicationsCardStatusText: string;
  skills: string[];
  positions: string[];
}

const myApplicationsData: MyApplication[] = [
  {
    id: 1,
    title: "멘토링 관련 프로젝트 팀원을 모집합니다!!",
    deadline: 20250109,
    applicationsCardStatus: "success",
    applicationsCardStatusText: "수락 완료",
    skills: ["Go", "Java", "Miro", "Python", "Swift", "Swiftui"],
    positions: ["프론트", "디자인", "백엔드"],
  },
  {
    id: 2,
    title: "멘토링 관련 프로젝트 팀원을 모집합니다!!",
    deadline: 20250109,
    applicationsCardStatus: "warning",
    applicationsCardStatusText: "수락 대기 중",
    skills: ["Go", "Java", "Miro", "Python", "Swift", "Swiftui"],
    positions: ["프론트", "디자인", "백엔드"],
  },
  {
    id: 3,
    title: "멘토링 관련 프로젝트 팀원을 모집합니다!!",
    deadline: 20250109,
    applicationsCardStatus: "done",
    applicationsCardStatusText: "모집 마감",
    skills: ["Go", "Java", "Miro", "Python", "Swift", "Swiftui"],
    positions: ["프론트", "디자인", "백엔드"],
  },
];

const MyApplicationsTab = () => {
  const hasApplicationPost = myApplicationsData.length > 0;
  return (
    <div>
      <div className={hasApplicationPost ? "flex justify-end mb-5" : "hidden"}>
        <FilterSelectbox
          filterSelectType="application"
          filterTitle="전체"
          filterList={APPLICATIONS_STATUS}
        />
      </div>
      {hasApplicationPost ? (
        <section className="flex flex-wrap justify-between gap-7">
          {myApplicationsData.map((application) => (
            <ApplicationsCard
              key={application.id}
              title={application.title}
              deadline={application.deadline}
              applicationsCardStatus={application.applicationsCardStatus}
              applicationsCardStatusText={
                application.applicationsCardStatusText
              }
              skills={application.skills}
              positions={application.positions}
            />
          ))}
        </section>
      ) : (
        <section className="h-[715px] mx-auto mt-48">
          <div className="flex flex-col justify-center items-center">
            <h3 className="h3-b text-center text-primary-4 mb-5">
              아직 신청한 글이 없습니다.
            </h3>
            <Link href="/">
              <Button className="w-[177px] h-[41px]  py-[8.5px] px-[25px] text-center rounded-lg body-large-m text-white bg-primary-3 hover:bg-primary-3  cursor-pointer">
                신청하러 가볼까요?
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyApplicationsTab;
