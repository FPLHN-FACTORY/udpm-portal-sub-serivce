import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl cursor-pointer select-none grid justify-center align-middle gap-2 grid-flow-col"
          >
            <LogoIcon/>
            FPLHN-FACTORY
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Theo Dõi Chúng Tôi</h3>
          <div>
            <a
                rel="noreferrer noopener"
                href="https://github.com/FPLHN-FACTORY"
                className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
                rel="noreferrer noopener"
                href="https://www.facebook.com/BeeSuperHeroHN"
                className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          {/*<div>*/}
          {/*  <a*/}
          {/*    rel="noreferrer noopener"*/}
          {/*    href="#"*/}
          {/*    className="opacity-60 hover:opacity-100"*/}
          {/*  >*/}
          {/*    Dribbble*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>

        {/*<div className="flex flex-col gap-2">*/}
        {/*  <h3 className="font-bold text-lg">Platforms</h3>*/}
        {/*  <div>*/}
        {/*    <a*/}
        {/*      rel="noreferrer noopener"*/}
        {/*      href="#"*/}
        {/*      className="opacity-60 hover:opacity-100"*/}
        {/*    >*/}
        {/*      Web*/}
        {/*    </a>*/}
        {/*  </div>*/}

        {/*  <div>*/}
        {/*    <a*/}
        {/*      rel="noreferrer noopener"*/}
        {/*      href="#"*/}
        {/*      className="opacity-60 hover:opacity-100"*/}
        {/*    >*/}
        {/*      Mobile*/}
        {/*    </a>*/}
        {/*  </div>*/}

        {/*  <div>*/}
        {/*    <a*/}
        {/*      rel="noreferrer noopener"*/}
        {/*      href="#"*/}
        {/*      className="opacity-60 hover:opacity-100"*/}
        {/*    >*/}
        {/*      Desktop*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Về Chúng Tôi</h3>
          <div>
            <a
                rel="noreferrer noopener"
                href="#products"
                className="opacity-60 hover:opacity-100"
            >
              Sản Phẩm
            </a>
          </div>

          <div>
            <a
                rel="noreferrer noopener"
                href="#support"
                className="opacity-60 hover:opacity-100"
            >
              Hỗ Trợ
            </a>
          </div>

          <div>
            <a
                rel="noreferrer noopener"
                href="#faq"
                className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Cộng Đồng</h3>
          <div>
            <a
                rel="noreferrer noopener"
                href="https://www.youtube.com/@BitHanoi"
                className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          {/*  <div>*/}
          {/*    <a*/}
          {/*      rel="noreferrer noopener"*/}
          {/*      href="#"*/}
          {/*      className="opacity-60 hover:opacity-100"*/}
          {/*    >*/}
          {/*      Discord*/}
          {/*    </a>*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <a*/}
          {/*      rel="noreferrer noopener"*/}
          {/*      href="#"*/}
          {/*      className="opacity-60 hover:opacity-100"*/}
          {/*    >*/}
          {/*      Twitch*/}
          {/*    </a>*/}
          {/*  </div>*/}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Đơn Vị Phát Triển</h3>
          <div>
            <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
            >
              Bộ môn Ứng Dụng Phần Mềm FPL HN
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/NghiaBeOniamey"
              className="text-primary transition-all border-primary hover:border-b-2"
          >
          Oniamey
          </a>
        </h3>
      </section>
    </footer>
  );
};
