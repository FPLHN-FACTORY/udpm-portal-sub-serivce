import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            rel="noreferrer noopener"
            to={"/"}
            className="font-bold text-xl cursor-pointer select-none grid justify-center align-middle gap-2 grid-flow-col"
          >
            <LogoIcon />
            FPLHN-FACTORY
          </Link>
        </div>

        <div className="flex flex-col gap-2 mr-20">
          <h3 className="font-bold text-lg">Kết nối với Chúng Tôi</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/FPLHN-FACTORY"
              className="flex items-center opacity-60 hover:opacity-100 bg-gray-200 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.579v-2.165c-3.338.725-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.755-1.333-1.755-1.091-.745.082-.729.082-.729 1.204.084 1.837 1.237 1.837 1.237 1.071 1.836 2.809 1.306 3.493.998.108-.775.418-1.306.762-1.606-2.666-.306-5.466-1.333-5.466-5.933 0-1.312.468-2.383 1.237-3.222-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.515 11.515 0 013.003-.404c1.02.004 2.044.138 3.003.404 2.292-1.554 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.771.839 1.236 1.91 1.236 3.222 0 4.611-2.803 5.625-5.473 5.923.429.369.81 1.096.81 2.213v3.281c0 .322.19.695.801.577C20.565 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/BeeSuperHeroHN"
              className="flex items-center opacity-60 hover:opacity-100 bg-blue-600 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.293H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.098 2.796.143v3.24h-1.918c-1.5 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.406 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
              Facebook
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@BitHanoi"
              className="flex items-center opacity-60 hover:opacity-100 bg-red-600 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path d="M23.498 6.186a3.003 3.003 0 00-2.122-2.12C19.643 3.5 12 3.5 12 3.5s-7.643 0-9.376.566a3.003 3.003 0 00-2.122 2.12A31.55 31.55 0 000 12c-.001 1.262.057 2.516.168 3.754.154 1.855.745 3.676 2.122 5.134a3.003 3.003 0 002.12 2.122C4.357 20.5 12 20.5 12 20.5s7.643 0 9.376-.566a3.003 3.003 0 002.122-2.12A31.537 31.537 0 0024 12a31.55 31.55 0 00-.502-5.814zM9.75 15.567v-7.133l6.357 3.567-6.357 3.566z" />
              </svg>
              Youtube
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
          <h3 className="font-bold text-lg">Liên kết nhanh</h3>
          {/*<div>*/}
          {/*    <Link*/}
          {/*        to={productRouterBase}*/}
          {/*        rel="noreferrer noopener"*/}
          {/*        className="opacity-60 hover:opacity-100 cursor-pointer"*/}
          {/*    >*/}
          {/*        Sản phẩm*/}
          {/*    </Link>*/}
          {/*</div>*/}

          <div>
        <Link
          to="/recruitment"
          className="opacity-60 hover:opacity-100"
        >
          Ứng tuyển
        </Link>
      </div>

      <div>
        <Link
          to="/aboutthefactory"
          className="opacity-60 hover:opacity-100"
        >
          Giới thiệu về xưởng
        </Link>
      </div>

      <div>
        <Link
          to="/products"
          className="opacity-60 hover:opacity-100"
        >
          Sản phẩm
        </Link>
      </div>

      <div>
        <Link
          to="/blog"
          className="opacity-60 hover:opacity-100"
        >
          Blog
        </Link>
      </div>
        </div>

        {/* <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Cộng Đồng</h3>
                    <div>
                      
                    </div> */}

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
        {/* </div> */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Đơn Vị Phát Triển</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/"
              className="opacity-60 hover:opacity-100"
            >
              Bộ môn Ứng Dụng Phần Mềm FPL HN
            </a>
          </div>
        </div>
      </section>

      {/* <section className="container pb-14 text-center">
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
            </section> */}
    </footer>
  );
};
