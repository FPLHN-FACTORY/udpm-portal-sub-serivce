import banner from "@/assets/images/background/bg-ptpm-factory.png"

export const BannerRecruitment = () => {
  return (
    <div className="container w-full h-[200px] md:h-[500px] relative overflow-hidden mb-5 bg-image">
      <img
        src={banner}
        alt="Office workspace banner"
        className="w-full h-full object-cover object-center rounded-2xl"
      />
    </div>
  );
};