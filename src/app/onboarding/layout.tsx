import Image from "next/image";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-secondary-3">
      <div className="w-[1200px] min-h-screen mx-auto px-10 flex items-center justify-between">
        <section>
          <div className="mb-[174px]">
            <h2 className="mb-[25px] font-jalnan text-[36px] text-primary-2">
              Mergi
            </h2>
            <p className="mb-1 h3-b">탐색의 시작은 간단한 소개에서!</p>
            <p className="body-large-m">
              프로젝트의 첫걸음을 위해 닉네임과 희망 직무를 설정해주세요.
            </p>
          </div>
          <div>
            <Image
              src="/images/onboard_left.png"
              alt="온보딩 이미지"
              width={365}
              height={365}
            />
          </div>
        </section>
        <section className="border-gray-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-sm bg-white">
          {children}
        </section>
      </div>
    </div>
  );
};

export default OnboardingLayout;
