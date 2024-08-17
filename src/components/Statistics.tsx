export const Statistics = () => {
  interface statsProps {
    quantity: string;
    title: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "20+",
      title: "Thành viên",
      description: "Xưởng luôn đề cao sự đóng góp của tất cả các thành viên",
    },
    {
      quantity: "1",
      title: "Văn phòng",
      description: "Xưởng có Văn phòng tại cơ sở FPT Polytechnic Kiều Mai",
    },
    {
      quantity: "3",
      title: "Năm hoạt động",
      description: "Chúng tôi đã vượt qua những dấu mốc quan trọng và dần khẳng định mình",
    },
    {
      quantity: "4",
      title: "Giá trị cốt lõi",
      description: "Nhiệt huyết, Chân thành, Thử thách, Chủ động",
    },
  ];

  return (
    <section id="statistics" className="py-16 ">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map(({ quantity, title, description }: statsProps) => (
        <div key={title} className="space-y-4 text-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-6xl font-bold galaxy-text">{quantity}</h2>
          <h3 className="text-4xl font-semibold text-black-700">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  </section>
  );
};