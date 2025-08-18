const ProfileIntroduction = () => {
  return (
    <div>
      <section className="mb-11">
        <h2 className="h2-b mb-2">자기소개</h2>
        <textarea
          name=""
          id=""
          className="w-full min-h-[189px] mb-2 rounded-lg input-shadow placeholder: pl-4 pt-3 focus:placeholder-transparent"
          placeholder="본인에 대해 더 자세하게 소개해주세요. (ex. 프로젝트 이력, 관심있는 분야 등)"
        ></textarea>
        <span className="block caption-r text-gray-50 text-right">0/300</span>
      </section>
    </div>
  );
};

export default ProfileIntroduction;
