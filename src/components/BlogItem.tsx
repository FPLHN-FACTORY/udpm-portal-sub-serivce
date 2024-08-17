import React from "react";
import { Link } from "react-router-dom";
// import title1 from "@/assets/images/products/event/title/title1.jpg";
// import title2 from "@/assets/images/products/event/title/title2.jpg";
import olpImages from "@/assets/images/products/achievement/olpicpc/title.png";
import landingPageImages from "@/assets/images/products/achievement/landingpage/landingpageTitle.png";
import goldBeeImages from "@/assets/images/products/achievement/goldbee/nghiahoangthiv2.png";
import khoaHocTuLamImages from "@/assets/images/products/achievement/2022/member.png";

import vue from"@/assets/images/news/vue.webp"
import article2 from "@/assets/images/news/other2.webp"
import { Button } from "@/components/ui/button.tsx";

import bannerArticle1 from "@/assets/images/background/bg-xldl-factory.png"

import bannerArticle2 from "@/assets/images/news/git..png"

const blogPosts = [
  {
    id: 1,
    title: "Asia OPL-ICPC toàn quốc 2023",
    excerpt:
      "Lê Đình Đạo cùng Trương Văn Hoàng, Nguyễn Sĩ Thành Long đoạt giải nhì cuộc thi Olympic ICPC toàn quốc diễn ra tại Huế.",
    imageUrl: olpImages,
    date: "2023",
    link: "https://www.facebook.com/share/p/vLdtKP7ecGXAm4Ai/",
  },
  {
    id: 2,
    title: "Landing Page Hackathon 2023",
    excerpt:
      "Quán quân cuộc thi Landing Page Hackathon 2023" +
      " với sự tham gia của 16 đội thi đến từ các cơ sở FPT Polytechnic trên toàn quốc.",
    imageUrl: landingPageImages,
    date: "2023",
    link:
      "https://caodang.fpt.edu.vn/tin-tuc-poly" +
      "/quan-quan-cuoc-thi-landing-page-hackathon-2023-chinh-thuc-lo-dien.html",
  },
  {
    id: 3,
    title: "Golden Bee 2023",
    excerpt:
      "Dành ong vàng với những cái tên quen thuộc: Phạm Đức Hoàng, Nguyễn Đình Thi. Với kinh nghiệp làm việc tại" +
      " Xưởng rất nhiều thành viên trở thành key member" +
      " của công ty công nghệ hàng đầu Việt Nam như: Fpt Software, VP Bank, VinBigdata... .",
    imageUrl: goldBeeImages,
    date: "2023",
    link: "https://caodang.fpt.edu.vn/tin-tuc-poly/ha-noi-tin-sinh-vien/ong-vang-ky-summer-2023-voi-so-diem-986-o-fpt-polytechnic-ha-noi-la-ai.html#:~:text=%C4%90%E1%BA%A1t%20%C4%91i%E1%BB%83m%20t%E1%BB%95ng%20k%E1%BA%BFt%209,Ong%20V%C3%A0ng%20k%E1%BB%B3%20Summer%202023.",
  },
  {
    id: 4,
    title: "Giải 3 thiết bị khoa học 2022",
    excerpt:
      "Đoạt giải ba trong Hội thi Thiết bị đào tạo tự làm thành phố Hà Nội năm 2022.",
    imageUrl: khoaHocTuLamImages,
    date: "2022",
    link: "https://hanoimoi.vn/trao-giai-hoi-thi-thiet-bi-dao-tao-tu-lam-thanh-pho-ha-noi-nam-2022-454584.html",
  },
];




const blogNews = [
  {
    id: 1,
    title: "Làm quen với Vue.js",
    excerpt:
      "Nếu bạn mới bắt đầu học lập trình front-end, thì Vue.js là một gợi ý không thể bỏ qua....",
    imageUrl: vue,
    date: "December 13, 2022",
    link: "https://blog.tda.company/lam-quen-voi-vue-js/",
  },
  {
    id: 2,
    title: "Developers vs Testers và những vấn đề muôn thủa",
    excerpt:
      "Đây có lẽ là vấn đề muôn thuở mà các đội dự án luôn ưu tiên giải quyết hàng đầu" ,
    imageUrl: article2,
    date: "December 18, 2022",
    link:
      "https://caodang.fpt.edu.vn/tin-tuc-poly" +
      "https://blog.tda.company/developers-vs-testers-va-nhung-van-de-muon-thua/",
  },
  {
    id: 3,
    title: "Tìm hiểu về VueJS cơ bản",
    excerpt:
      "Gần đây do yêu cầu công việc nên mình có cơ hội được thử sức với VueJS..." ,
    imageUrl: "https://images.viblo.asia/full/d13eeda5-275d-45a4-a039-89b21d590b9f.png",
    date: "December 18, 2022",
    link:
      "https://viblo.asia/p/tim-hieu-ve-vuejs-co-ban-p1-Do754bpWZM6",
  },


];

const blogOfFatory = [
  {
    id: 1,
    title: "Tiêu chí tham gia xưởng",
    excerpt:
      "Tiêu chí tham gia xưởng dự án PTPM - 2024",
    imageUrl: bannerArticle1,
    date: "2024",
    link: "/tieu-chi-tham-gia-xuong",
  },
  {
    id: 2,
    title: "Làm việc với Git",
    excerpt:
      "Làm việc với Git sử dụng SourceTree" ,
    imageUrl: bannerArticle2,
    date: "2024",
    link:
      "/lam-viec-voi-git",
  },
  


];

const BlogCard = ({ post }) => (
  <Link to={`${post.link}`} className="block">
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-3xl">
      <img
        className="w-full h-60 object-cover "
        src={post.imageUrl}
        alt={post.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">{post.excerpt}</p>
      </div>
      <div className="flex items-center gap-2 px-6 pt-4 pb-2">
  {/* <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white">
    {post.date}
  </span> */}
  <Button size="sm" variant="link" className="flex items-center gap-2">
    Tìm hiểu thêm
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </Button>
</div>
    </div>
  </Link>
);

export const BlogItem = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-[100px] mt-[50px]">

        {/* Section bên trái */}
        <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="mb-[50px]">
              <h1 className="text-4xl font-bold mb-8 relative pl-4 mb-[60px]">
                <span className="relative ">
                  Các bài viết của xưởng
                  <span className="absolute left-0 top-0 h-full w-1 bg-gray-200 -ml-4"></span>
                </span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px] ">
                {blogOfFatory.slice(0, 4).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
     
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="mb-[50px]">
              <h1 className="text-4xl font-bold mb-8 relative pl-4 mb-[60px]">
                <span className="relative ">
                  Các thành tựu của xưởng
                  <span className="absolute left-0 top-0 h-full w-1 bg-gray-200 -ml-4"></span>
                </span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px] ">
                {blogPosts.slice(0, 4).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="mb-[50px]">
              <h1 className="text-4xl font-bold mb-8 relative pl-4 mb-[60px]">
                <span className="relative ">
                  Khác
                  <span className="absolute left-0 top-0 h-full w-1 bg-gray-200 -ml-4"></span>
                </span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px] ">
                {blogNews.slice(0, 4).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
       
      

    </div>
  );
};
