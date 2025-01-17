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
              href="https://www.facebook.com/ptpmfpoly"
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
              Page
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/groups/703558053692699"
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
              Group
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/groups/701083705106498"
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
              Club
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
