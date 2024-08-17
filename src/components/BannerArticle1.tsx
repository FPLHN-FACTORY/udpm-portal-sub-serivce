import banner from "@/assets/images/background/bg-xldl-factory.png"

export const BannerArticle1 = () => {
  return (
    <div className="container w-full h-[200px] md:h-[300px] relative overflow-hidden mb-5">
      <img
        src={banner}
        alt="Office workspace banner"
        className="w-full h-full object-cover object-center rounded-2xl"
      />
    </div>
  );
};