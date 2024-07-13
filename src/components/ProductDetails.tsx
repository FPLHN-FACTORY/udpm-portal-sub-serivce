import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Check} from "lucide-react";

// {Articles}
import imageArticleActions1 from "@/assets/images/products/articles/actions/Picture1.jpg";
import imageArticleActions2 from "@/assets/images/products/articles/actions/Picture2.png";
import imageArticleActions3 from "@/assets/images/products/articles/actions/Picture3.jpg";
import imageArticleProduction1 from "@/assets/images/products/articles/production/Picture1.png";
import imageArticleProduction2 from "@/assets/images/products/articles/production/Picture2.png";
import imageArticleProduction3 from "@/assets/images/products/articles/production/Picture3.png";
import imageArticleProduction4 from "@/assets/images/products/articles/production/Picture4.png";

interface ProductsDetails {
    key: string;
    name: string;
    comment: string;
    // { Lời mở đầu } => prologue
    Prologue: Prologue
    // { Nghiệp vụ dự án } => project operations
    ProjectOperations: ProjectOperations;
    // { Mã Nguồn } => source code information
    SourceCodeInformation: SourceCodeInformation;
    epilogueSecond: string;
    // { Chia sẻ  } => shared
    Shared: Shared;
    // { Lời kết } => Epilogue Last
    epilogueLast: string;
}

// { Lời mở đầu } => prologue
interface Prologue {
    title?: string; // tiêu đề
    author?: string; // tác giả
    introduction?: string; // mô tả bài viết
    overview?: string; // tổng quan
}

// { Nghiệp vụ } => project operations
interface ProjectOperations {
    businessDescription?: string;
    Actor?: Actor[];
}

interface Actor {
    name: string;
    ActorActions: ActorActions[];
}

interface ActorActions {
    description?: string;
}

// { Mã Nguồn } => source code information
interface SourceCodeInformation {
    InformationList: InformationList[],
    Technology: Technology[],
    // {Leads and Members}
    Leads?: Lead[],
    Members?: Member[],
}

interface InformationList {
    content?: string; // nội dung
}

interface Technology {
    category?: string;
    categoryNames?: string;
}

interface Lead {
    name: string;
    role: string;
}

interface Member {
    name: string;
    role: string;
}

// { Chia sẻ  } => shared
interface Shared {
    prologue: string;
    ImagesAction?: ImagesAction[];
    ImagesProduct?: ImagesProduct[];
}

interface ImagesAction {
    image?: string; // ảnh
    caption?: string; // chú thích
}

interface ImagesProduct {
    image?: string;
}

const products: ProductsDetails[] = [
    {
        key: "identity",
        name: "Quản Lý Phân Quyền",
        comment: "Quản lý dữ liệu tập trung, phân quyền và chuyển hướng cho các ứng dụng phần mềm.",
        Prologue: {
            title: "Quản Lý Phân Quyền",
            author: "Quản Lý Phân Quyền",
            introduction: "Quản lý phân quyền và chuyển hướng cho các ứng dụng phần mềm.",
            overview: "Quản Lý Phân Quyền là một dự án của Bit, với mục đích quản lý và phân quyền tập trung trên các ứng dụng phần mềm.",
        },
        ProjectOperations: {
            businessDescription: "Quản lý phân quyền và chuyển hướng cho các ứng dụng phần mềm.",
            Actor: [
                {
                    name: "Admin",
                    ActorActions: [
                        {
                            description: "Quản lý tài khoản, quản lý phân quyền, quản lý thông báo, quản lý tập tin."
                        },
                        {
                            description: "..."
                        }
                    ]
                },
                {
                    name: "Another",
                    ActorActions: [
                        {
                            description: "Quản lý tài khoản, quản lý phân quyền, quản lý thông báo, quản lý tập tin."
                        },
                        {
                            description: "..."
                        }
                    ]
                }
            ]
        },
        SourceCodeInformation: {
            InformationList: [
                {
                    content: "content"
                },
                {
                    content: "source code information"
                },
            ],
            Technology: [
                {
                    category: "Backend",
                    categoryNames: "Java, Spring Boot, Hibernate"
                },
                {
                    category: "Frontend",
                    categoryNames: "React, Redux, Ant Design"
                },
            ]
        },
        epilogueSecond: "...",
        Shared: {
            prologue: "Prologue",
            ImagesAction: [
                {
                    image: "https://example.com/image1.jpg",
                    caption: "Caption 1"
                },
                {
                    image: "https://example.com/image2.jpg",
                    caption: "Caption 2"
                },
            ],
            ImagesProduct: [
                {
                    image: "https://example.com/image3.jpg"
                },
                {
                    image: "https://example.com/image4.jpg"
                },
            ]
        },
        epilogueLast: "...",
    },
    {
        key: "event",
        name: "Quản Lý Sự Kiện",
        comment: "Quản lý dữ liệu tập trung, phân quyền và chuyển hướng cho các ứng dụng phần mềm.",
        Prologue: {
            title: "Quản Lý Phân Quyền",
            author: "Quản Lý Phân Quyền",
            introduction: "Quản lý phân quyền và chuyển hướng cho các ứng dụng phần mềm.",
            overview: "Quản Lý Phân Quyền là một dự án của Bit, với mục đích quản lý và phân quyền tập trung trên các ứng dụng phần mềm.",
        },
        ProjectOperations: {
            businessDescription: "Quản lý phân quyền và chuyển hướng cho các ứng dụng phần mềm.",
            Actor: [
                {
                    name: "Admin",
                    ActorActions: [
                        {
                            description: "Quản lý tài khoản, quản lý phân quyền, quản lý thông báo, quản lý tập tin."
                        },
                        {
                            description: "..."
                        }
                    ]
                },
                {
                    name: "Another",
                    ActorActions: [
                        {
                            description: "Quản lý tài khoản, quản lý phân quyền, quản lý thông báo, quản lý tập tin."
                        },
                        {
                            description: "..."
                        }
                    ]
                }
            ]
        },
        SourceCodeInformation: {
            InformationList: [
                {
                    content: "content"
                },
                {
                    content: "source code information"
                },
            ],
            Technology: [
                {
                    category: "Backend",
                    categoryNames: "Java, Spring Boot, Hibernate"
                },
                {
                    category: "Frontend",
                    categoryNames: "React, Redux, Ant Design"
                },
            ]
        },
        epilogueSecond: "...",
        Shared: {
            prologue: "Prologue",
            ImagesAction: [
                {
                    image: "https://example.com/image1.jpg",
                    caption: "Caption 1"
                },
                {
                    image: "https://example.com/image2.jpg",
                    caption: "Caption 2"
                },
            ],
            ImagesProduct: [
                {
                    image: "https://example.com/image3.jpg"
                },
                {
                    image: "https://example.com/image4.jpg"
                },
            ]
        },
        epilogueLast: "...",
    },
    {
        key: "article",
        name: "Quản Lý Bài Viết",
        comment: "Module Quản lý Bài Viết Toàn Quốc Trong Hệ thống FPT Polytechnic.",
        Prologue: {
            title: "Thông tin về Module Portal Article",
            author: "Nguyễn Thuý Hằng",
            introduction: "Chào mừng quý độc giả đến với bài viết giới thiệu về sản phẩm sinh viên trong khuôn khổ" +
                " module Quản lý Bài viết của Hệ thống website Cổng Thông Tin Bộ Môn Ứng Dụng Phần Mềm. Với mục tiêu" +
                " nâng cao chất lượng giáo dục và khuyến khích sự sáng tạo, module này được thiết kế để giúp giảng " +
                "viên và sinh viên tương tác, chia sẻ và quản lý các sản phẩm học tập một cách hiệu quả. Trong bài" +
                " viết này, Nguyễn Thuý Hằng, sẽ giới thiệu chi tiết về cách module này hoạt động, lợi ích mà nó mang" +
                " lại, và những đóng góp đáng kể của sinh viên trong quá trình học tập. Hãy cùng khám phá những thành" +
                " quả ấn tượng của các bạn sinh viên và hiểu rõ hơn về công cụ hỗ trợ đắc lực" +
                " này trong giảng dạy và học tập.",
            overview: "Tổng quan về module Quản lý Bài viết trong Hệ thống website Cổng Thông Tin" +
                " Bộ Môn Ứng Dụng Phần Mềm.",
        },
        ProjectOperations: {
            businessDescription: "Website Quản Lý Bài Viết là 1 module trong hệ thống website Cổng Thông Tin Bộ Môn" +
                " Ứng Dụng Phần Mềm được thiết kế với mục đích để quản lý và phân phối các bài viết chứa nội dung" +
                " tin tức đến với người dùng một cách hiệu quả, nhanh chóng và chính xác. Module này liên quan đến" +
                " 4 vai trò chính để hoàn thành quy trình viết và phê duyệt bài viết.",
            Actor: [
                {
                    name: "Admin",
                    ActorActions: [
                        {
                            description: "Là vai trò chủ chốt có trách nhiệm quản lý toàn bộ quy trình viết bài và phê duyệt."
                        },
                        {
                            description: "Xác định và quản lý các đợt viết bài, phân công giảng viên hoặc các tác giả tham gia viết bài theo yêu cầu và nhu cầu."
                        },
                        {
                            description: "Xác định và quản lý các đợt viết bài, phân công giảng viên hoặc các tác giả tham gia viết bài theo yêu cầu và nhu cầu."
                        },
                        {
                            description: "Phê duyệt hoặc từ chối các bài viết dựa trên các tiêu chuẩn và yêu cầu của hệ thống."
                        },
                        {
                            description: "Quản lý kho lưu trữ để tổng hợp và chuyển giao bài viết cho các bộ phận phê duyệt tiếp theo."
                        },
                    ]
                },
                {
                    name: "Giảng viên Viết Bài",
                    ActorActions: [
                        {
                            description: "Được giao nhiệm vụ sản xuất nội dung bài viết theo chỉ định của Admin."
                        },
                        {
                            description: "Viết và nộp bài viết theo đúng yêu cầu và tiêu chuẩn quy định."
                        },
                        {
                            description: "Được thưởng tiền nhuận bút nếu bài viết được Admin phê duyệt và công bố."
                        },
                    ]
                },
                {
                    name: "Trưởng Phòng PR",
                    ActorActions: [
                        {
                            description: "Chịu trách nhiệm chọn lọc và chuẩn bị bài viết để đăng tải."
                        },
                        {
                            description: "Phân loại và gửi các bài viết từ Admin cho Nhân viên Phòng PR để tiến hành phê duyệt cuối cùng."
                        },
                        {
                            description: "Đảm bảo rằng chỉ những bài viết có chất lượng và phù hợp mới được công bố."
                        },
                    ]
                },
                {
                    name: "Nhân viên Phòng PR",
                    ActorActions: [
                        {
                            description: "phê duyệt bài viết trước khi công bố."
                        },
                        {
                            description: "Đảm bảo rằng bài viết đáp ứng các tiêu chuẩn và chất lượng yêu cầu trước khi được đưa ra công chúng."
                        },
                    ]
                }
            ]
        },
        SourceCodeInformation: {
            InformationList: [
                {
                    content: "Thầy Nguyễn Anh Dũng, Cô Nguyễn Thúy Hằng, Thầy Vũ Văn Nguyên, Thầy Nguyễn Hoàng Tiến" +
                        " là các thành viên chủ chốt tham gia phân tích nghiệp vụ và thiết kế ERD CSDL."
                },
                {
                    content: "Dự án được phát triển từ tháng 06-2023 đến hiện tại, đang dần hoàn thiện các chức năng mới hơn."
                },
            ],
            Technology: [
                {
                    category: "Backend",
                    categoryNames: "Java với Spring Boot."
                },
                {
                    category: "Frontend",
                    categoryNames: "HTML, CSS, JavaScript, TypeScript, sử dụng Ant Design, ReactJS và Redux Toolkit."
                },
                {
                    category: "Cơ sở dữ liệu",
                    categoryNames: "MySQL."
                },
                {
                    category: "Quản lý mã nguồn",
                    categoryNames: "Sử dụng Git, GitHub và SourceTree."
                },
                {
                    category: "Kiểm thử API",
                    categoryNames: "Sử dụng Postman."
                },
                {
                    category: "Công cụ phát triển",
                    categoryNames: "IntelliJ IDEA, Postman, DBEAVER, Docker, Visual Studio Code, MySQL Workbench."
                },
            ]
        },
        epilogueSecond: "Tổng quan trên cung cấp cái nhìn tổng quát về cách hệ thống quản lý bài viết của Cổng Thông" +
            " Tin Bộ Môn Ứng Dụng Phần Mềm hoạt động, từ các vai trò chức năng đến công nghệ và công cụ được" +
            " áp dụng trong quá trình phát triển và quản lý.",
        Shared: {
            prologue: "Một trong những sinh viên trong quá trình xây dựng dự án chia sẻ:" +
                " “Trong quá trình thực hiện sản phẩm này, chúng em đã học được rất nhiều" +
                " kiến thức và kỹ năng mới. Từ việc lên ý tưởng, thiết kế giao diện," +
                " đến lập trình và kiểm thử, mỗi giai đoạn đều đòi hỏi sự cố gắng và sáng tạo." +
                " Đặc biệt, sự hỗ trợ nhiệt tình từ giảng viên và các bạn cùng lớp đã giúp chúng em vượt qua" +
                " nhiều khó khăn và hoàn thành sản phẩm đúng tiến độ. Đây là một trải nghiệm vô cùng quý báu và " +
                "đáng nhớ, giúp chúng em không chỉ nâng cao kỹ năng chuyên môn mà còn rèn luyện kỹ năng làm việc" +
                " nhóm và quản lý thời gian.”",
            ImagesAction: [
                {
                    image: imageArticleActions1,
                    caption: "Lên ý tưởng và thiết kế giao diện"
                },
                {
                    image: imageArticleActions2,
                    caption: "Lập trình và phát triển ứng dụng"
                },
                {
                    image: imageArticleActions3,
                    caption: "Kiểm thử và hoàn thiện sản phẩm"
                },
            ],
            ImagesProduct: [
                {
                    image: imageArticleProduction1,
                },
                {
                    image: imageArticleProduction2,
                },
                {
                    image: imageArticleProduction3,
                },
                {
                    image: imageArticleProduction4,
                },
            ],
        },
        epilogueLast: "Tổng kết lại, module Quản lý Bài viết trong Hệ thống website Cổng Thông Tin Bộ Môn Ứng Dụng" +
            " Phần Mềm đã chứng minh được vai trò quan trọng của mình trong việc hỗ trợ giảng viên và sinh viên" +
            " trong quá trình học tập và giảng dạy. Những sản phẩm sinh viên không chỉ thể hiện sự nỗ lực và sáng" +
            " tạo mà còn là minh chứng cho sự phát triển vượt bậc về kiến thức và kỹ năng của các bạn. Hy vọng rằng," +
            " với sự hỗ trợ từ các công cụ hiện đại và tinh thần học hỏi không ngừng, sinh viên sẽ tiếp tục đạt được" +
            " những thành công mới, góp phần vào sự phát triển chung của ngành công nghệ phần mềm. Chúng tôi xin gửi" +
            " lời cảm ơn chân thành đến các giảng viên và sinh viên đã cùng nhau xây dựng và phát triển một môi" +
            " trường học tập tích cực, sáng tạo và hiệu quả.",
    },
];

function getProductDetails(result: string) {
    switch (result) {
        case "portal-identity":
            return products[0]; // identity product
        case "portal-event":
            return products[1];
        case "portal-articles":
            return products[2];
        case "portal-tutor":
            return products[3]
        case "portal-register-graduation":
            return products[4];
        case "portal-web-chat":
            return products[5];
        default:
            return undefined;
    }
}

export const ProductDetails = () => {

    const urlPages = window.document.URL;
    const partsUrlPages = urlPages.split("module?");
    const result = partsUrlPages[1];
    const productDetails = getProductDetails(result);
    return (
        <section
            id="product-details"
            className="container py-6 sm:py-12"
        >
            {productDetails && (
                <>
                    <div className="grid gap-5">
                        <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}
                  Module{" "}
              </span>
                            {productDetails.name}
                        </h2>
                        <p className="text-xl pt-4 pb-8">{productDetails.comment}</p>

                        <hr/>

                        <div id="prologue" className="grid gap-y-4">
                            <h3 className="text-center text-3xl md:text-3xl font-bold">{productDetails.Prologue.title}</h3>
                            <p className="text-right italic">Người viết: {productDetails.Prologue.author}</p>
                            <p>{productDetails.Prologue.introduction}</p>
                            <p>{productDetails.Prologue.overview}</p>
                        </div>

                        <div id="project-operations" className="grid gap-y-4">
                            <h4 className="text-3xl md:text-2xl font-bold">Về nghiệp vụ</h4>
                            <p>{productDetails.ProjectOperations.businessDescription}</p>
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                                {productDetails.ProjectOperations.Actor &&
                                    productDetails.ProjectOperations.Actor.map((actor: Actor) => (
                                        <Card key={actor.name} className="">
                                            <CardHeader>
                                                <CardTitle className="flex item-center justify-between">Vai
                                                    trò</CardTitle>
                                                <div>
                                                    <span className="text-3xl font-bold">{actor.name}</span>
                                                    <span className="text-muted-foreground"> / Portal</span>
                                                </div>
                                            </CardHeader>
                                            <hr className="w-4/5 m-auto mb-4"/>
                                            <CardFooter className="flex">
                                                <div className="space-y-4">
                                                    {actor.ActorActions.map((actorActions: ActorActions) => (
                                                        <span key={actorActions.description} className="flex">
                              <Check className="text-green-500"/> <h3 className="ml-2">{actorActions.description}</h3>
                            </span>
                                                    ))}
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    ))}
                            </div>
                        </div>

                        <div id="source-code-information" className="grid gap-y-4">
                            <h4 className="text-3xl md:text-2xl font-bold">Về thông tin mã nguồn</h4>
                            <h3 className="text-2xl md:text-xl font-bold">Lead và Thành viên:</h3>
                            {productDetails.SourceCodeInformation.InformationList.map((informationList: InformationList, index) => (
                                <p key={index}>{informationList.content}</p>
                            ))}
                            <h3 className="text-2xl md:text-xl font-bold">Công nghệ sử dụng:</h3>
                            {productDetails.SourceCodeInformation.Technology.map((technology: Technology, index) => (
                                <p key={index}>
                                    {technology.category}: {technology.categoryNames}
                                </p>
                            ))}
                        </div>
                        <p>{productDetails.epilogueSecond}</p>

                        <div id="shared" className="grid gap-y-4">
                            <p>{productDetails.Shared.prologue}</p>
                            <h4 className="text-3xl md:text-2xl font-bold">Hoạt động dự án</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {productDetails.Shared.ImagesAction &&
                                    productDetails.Shared.ImagesAction.map((images: ImagesAction) => (
                                        // <Card key={index} className="rounded-2xl shadow-none w-full h-full">
                                        //     <CardHeader>
                                        //         <CardTitle>{images.caption}</CardTitle>
                                        //     </CardHeader>
                                        //     <CardFooter>
                                        //         <div className="w-full h-64 overflow-hidden">
                                        //             <img
                                        //                 src={images.image}
                                        //                 alt="images"
                                        //                 className="w-full h-full object-cover rounded-xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/80"
                                        //             />
                                        //         </div>
                                        //     </CardFooter>
                                        // </Card>
                                        <>
                                            <div className={"grid gap-3"}>
                                                <p>{images.caption}</p>
                                                <div className="w-full h-64">
                                                    <img
                                                        src={images.image}
                                                        alt="images"
                                                        className="w-full h-full object-cover rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/80"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ))}
                            </div>
                            <h4 className="text-3xl md:text-2xl font-bold">Giao diện sản phẩm</h4>
                            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-3">
                                {productDetails.Shared.ImagesProduct &&
                                    productDetails.Shared.ImagesProduct.map((images: ImagesProduct, index) => (
                                        <img
                                            key={index}
                                            src={images.image}
                                            className="h-auto w-full rounded-3xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/80"
                                            alt=""
                                        />
                                    ))}
                            </div>
                        </div>
                        <h4 className="text-3xl md:text-2xl font-bold">Lời kết</h4>
                        <p>{productDetails.epilogueLast}</p>
                    </div>
                </>
            )}
        </section>
    );
};
