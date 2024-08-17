// import banner from "@/assets/images/background/bg-xldl-factory.png"
import anh1 from "@/assets/images/news/article2/1.png"
import anh2 from "@/assets/images/news/article2/2.png"
import anh3 from "@/assets/images/news/article2/3.png"
export const Article2 = () => {
  return (
    <div className="container mx-auto px-4 py-6 w-full h-auto md:h-auto relative overflow-hidden mb-10 bg-white  px-[300px]">
  
  {/* Nội dung chính, căn giữa */}
  <div className="container-sm">
    <h1 className="text-3xl md:text-4xl font-extrabold">
      Làm việc với Git sử dụng SourceTree
    </h1>
    
    <div className="mt-6 ">

    <ul className="list-disc pl-5 text-xl md:text-2xl font-extrabold mt-10">
        <li>Bước 1: Các bạn chọn clone và điền thông tin để clone (lưu ý chọn folder chứa project phải là 1 folder rỗng)</li>
    </ul>
    <img src={anh1} alt="" className="mt-6 "/>
    <p className="text-xl mt-6" >Giao diện sau khi clone thành công</p>
    <img src={anh2} alt=""className="mt-6  "/>
    </div>
    
    <div className="mt-6">
      <h2 className="text-xl md:text-2xl font-extrabold mt-10">
      Bước 2: Tách branch

      </h2>
    
      <h2 className="text-xl md:text-xl font-extrabold mt-10">
      Các branch cố định (protected branches)

      </h2>
    <ul className="list-disc pl-5 text-xl">
        <li> main / master: Lưu code ổn định nhất và sẵn sàng sử dụng để deploy cho client, thay cho các nhánh master, prod</li>
        <li>stage / deploy: Môi trường được sử dụng để build bản unstable cho QA, Khách hàng hoặc 1 số đội tượng liên quan, thay thế nhánh staging, uat trước đây</li>
        <li>dev / develop: Lưu code mới nhất, thay thế các nhánh development, develop trước đây</li>
      
    </ul>
    <p className="text-xl mt-6">2.1 Tách branch từ branch dev/develop</p>
    <img src={anh3} alt=""className="mt-6  "/>
    </div>
  </div>
</div>

  
  );
};