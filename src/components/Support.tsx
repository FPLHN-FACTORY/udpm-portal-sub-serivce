import {Button} from "./ui/button";
import {Input} from "./ui/input";

export const Support = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Subscribed!");
    };

    return (
        <section id="support">
            <hr className="w-11/12 mx-auto"/>

            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Nhận Hỗ Trợ Từ{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            FPLHN-FACTORY
          </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Điền gmail của bạn để nhận được hỗ trợ ngay.
                </p>

                <form
                    className={"grid w-full gap-4 md:gap-2"}
                    onSubmit={handleSubmit}
                >
                    <select id="default"
                            className="md:w-6/12 lg:w-4/12 mx-auto block w-full rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option selected>Chọn 1 tùy chọn</option>
                        <option value="Training">Đào Tạo</option>
                        <option value="Challenge">Thử Thách</option>
                        <option value="Information">Nhận Thêm Thông Tin</option>
                        <option value="Another">Khác</option>
                    </select>
                    <div className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2">
                        <Input
                            placeholder="nghiabe.dev@gmail.com"
                            className="bg-muted/50 dark:bg-muted/80 "
                            aria-label="email"
                        />
                        <Button>Nhận Hỗ Trợ</Button>
                    </div>
                </form>
            </div>

            <hr className="w-11/12 mx-auto"/>
        </section>
    );
};
