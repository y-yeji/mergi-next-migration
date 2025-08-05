import MainSmallBanner from "@/components/main/MainSmallBanner";
import Image from "next/image";
import PostcardSectionList from "@/components/main/PostcardSectionList";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto mt-30">
      <section className="mb-20">
        <div className="mb-5">
          <Image
            src="/images/main_banner.png"
            alt="메인배너"
            width={1120}
            height={400}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <MainSmallBanner
            linkHerf="/"
            title="스터디 보러가기"
            bannerCaption="모집 중인 스터디를 찾아보세요"
            backgroundColor="bg-secondary-2"
            iconImageSrc="/images/pencil.png"
            iconImageAlt="연필이모티콘"
            iconWidth={13}
            iconHeight={13}
            imagePosition="top-[64px] right-5"
            bannerImageSrc="/images/main_study_banner.png"
            bannerImageAlt="메인스몰스터디배너"
            bannerWidth={145}
            bannerHeight={133}
          />
          <MainSmallBanner
            linkHerf="/"
            title="프로젝트 보러가기"
            bannerCaption="모집 중인 프로젝트를 찾아보세요"
            backgroundColor="bg-secondary-1"
            iconImageSrc="/images/search.png"
            iconImageAlt="돋보기이모티콘"
            iconWidth={12}
            iconHeight={13}
            imagePosition="top-[64px] right-5"
            bannerImageSrc="/images/main_project_banner.png"
            bannerImageAlt="스터디 바로가기 배너"
            bannerWidth={145}
            bannerHeight={133}
          />
          <MainSmallBanner
            linkHerf="/"
            title="서비스 보러가기"
            bannerCaption="홍보 중인 서비스를 찾아보세요"
            backgroundColor="bg-primary-5"
            iconImageSrc="/images/talk.png"
            iconImageAlt="연필이모티콘"
            iconWidth={14}
            iconHeight={13}
            imagePosition="top-[27px] right-[26px]"
            bannerImageSrc="/images/main_service_banner.png"
            bannerImageAlt="서비스 바로가기 배너"
            bannerWidth={145}
            bannerHeight={133}
          />
        </div>
      </section>
      <section className="mb-20">
        <PostcardSectionList
          title="Hot 인기있는 프로젝트"
          badgeType="success"
          badgeText="인기있는"
        />
        <PostcardSectionList
          title="Now 곧 마감되는 프로젝트"
          badgeType="danger"
          badgeText="마감직전"
        />
        <PostcardSectionList
          title="New 새로운 프로젝트"
          badgeType="warning"
          badgeText="새로운"
        />
      </section>
    </div>
  );
}
