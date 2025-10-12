"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="footer-section position-relative">
      <div className="footer-widgets-wrapper style1 fix">
        <div className="shape1">
          <img src="/assets/images/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/assets/images/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/assets/images/shape/footerShape1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image src="/assets/images/logo/logo.svg" alt="img" width={177} height={54} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>{t("description")}</p>
                  <div className="store-links">
                    <div className="apple">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                          <path
                            d="M13.9741 0.148438C11.9982 0.148438 11.1631 1.09311 9.78702 1.09311C8.37612 1.09311 7.29994 0.155311 5.58766 0.155311C3.91164 0.155311 2.12437 1.1805 0.989386 2.92696C-0.604303 5.38978 -0.333787 10.0282 2.24738 13.9797C3.17066 15.3942 4.40366 16.9806 6.02087 16.9978H6.05028C7.45578 16.9978 7.87332 16.0757 9.8076 16.0649H9.837C11.7424 16.0649 12.1246 16.9924 13.5242 16.9924H13.5536C15.1709 16.9752 16.47 15.2175 17.3933 13.8083C18.0578 12.7949 18.3048 12.2863 18.8145 11.1398C15.0807 9.71985 14.4809 4.41664 18.1735 2.38344C17.0463 0.969377 15.4624 0.150401 13.9692 0.150401L13.9741 0.148438Z"
                            fill="white"
                          />
                        </svg>{" "}
                        {t("appStore")}
                      </a>
                    </div>
                    <div className="play">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
                          <path
                            d="M18.8732 5.50779L20.9775 1.64735C21.0339 1.54372 21.0493 1.42066 21.0204 1.30505C20.9914 1.18943 20.9204 1.09065 20.8229 1.03026..."
                            fill="#242331"
                          />
                        </svg>{" "}
                        {t("playStore")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{t("pagesTitle")}</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/">{t("home")}</Link></li>
                  <li><Link href="/about">{t("about")}</Link></li>
                  <li><Link href="/project">{t("integrations")}</Link></li>
                  <li><Link href="/service">{t("features")}</Link></li>
                  <li><Link href="/pricing">{t("pricing")}</Link></li>
                  <li><Link href="/contact">{t("contact")}</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{t("utilityTitle")}</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/project">{t("integrations")}</Link></li>
                  <li><Link href="/blog">{t("blog")}</Link></li>
                  <li><Link href="/contact">{t("contact")}</Link></li>
                  <li><Link href="/pricing">{t("pricing")}</Link></li>
                  <li><Link href="/project/project-details">{t("projectDetails")}</Link></li>
                  <li><Link href="/team">{t("team")}</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="contact-box">
                  <div className="subtitle">{t("addressTitle")}</div>
                  <div className="widget-head">{t("readyTitle")}</div>
                  <div className="text">{t("readyText")}</div>
                  <div className="info">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path
                          d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199..."
                          stroke="#5236FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="link">
                      <a href="mailto:contact.tech@gmail.com">contact.tech@gmail.com</a> <br />
                      <a href="mailto:info@Niotech.com">info@Niotech.com</a>
                    </div>
                  </div>
                  <div className="info">
                    <div className="icon">
                    </div>
                    <div className="link">
                      <a href="tel:+88012365478900">+880 123 654 789 00</a> <br />
                      <a href="tel:+001652069800">+001 6520 698 00</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom style1">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              {t("copyright")}
            </p>
            <ul className="social-links" data-wow-delay=".5s">
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
              <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
