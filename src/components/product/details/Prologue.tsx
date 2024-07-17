interface Prologue {
    title?: string;
    author?: string;
    introduction?: string;
    overview?: string;
}

const prologue: Prologue = {
    title: "Ứng Dụng Phần Mềm Nâng Cao Năng Lực Thực Hành Giao Tiếp",
    author: "Thịnh Phúc Nguyễn",
    introduction: "Đây là bài viết mô tả về ứng dụng phần mềm nâng cao năng lực",
    overview: "Ứng dụng phần mềm nâng cao năng lực giúp sinh viên, nhà tuyển dụng và các doanh nghiệp tìm kiếm " +
        "thông tin và đăng ký hơn nữa. Ngoài ra, ứng dụng còn giúp sinh viên nâng cao kỹ năng",
}

export const Prologue = () => {

    return (
        <section
            id="prologue"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {prologue.title}
            </h2>
            <p className="text-lg mb-8">{prologue.introduction}</p>
            <p className="text-gray-600">{prologue.overview}</p>
            
            <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-dark"
            >
                Tiếp theo
            </a>
        </section>
    );
};
