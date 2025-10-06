import Link from "next/link";
import DropDown from "./DropDown";
import { useLocale, useTranslations } from "next-intl";

export default function Nav({ setMobileToggle }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href={`/${locale}`}>{t("navigation.home")}</Link>
        <DropDown>
          <ul>
            <li>
              <Link href={`/${locale}`} onClick={() => setMobileToggle(false)}>
                {t("navigation.homeVersion1")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/home2`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.homeVersion2")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/home3`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.homeVersion3")}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href={`/${locale}/pages`}>{t("navigation.pages")}</Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/about`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/team`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.ourTeam")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/team/team-details`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.teamDetails")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/pricing`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.pricing")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/faq`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.faq")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.contact")}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/project`}
          onClick={() => setMobileToggle(false)}
        >
          {t("navigation.project")}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/project`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.project1")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/project2`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.project2")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/project/project-details`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.projectDetails")}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/service`}
          onClick={() => setMobileToggle(false)}
        >
          {locale === "ar" ? "خدمات الويب" : "Web Services"}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/service/hosting`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? " استضافة المواقع" : "Hosting"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/service/distributor-hosting`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "استضافة الموزعين" : "Distributor Hosting"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/service/private-servers`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? " السيرفرات الخاصه" : "Private Servers"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/service/email-services`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? " البريد الالكتروني" : "Email Services"}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href={`/${locale}/blog`} onClick={() => setMobileToggle(false)}>
          {t("navigation.blog")}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/blog`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.blog")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog-sidebar`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.blogWithSidebar")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog-left-sidebar`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.blogLeftSidebar")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog/blog-details`}
                onClick={() => setMobileToggle(false)}
              >
                {t("navigation.blogDetails")}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link
          href={`/${locale}/contact`}
          onClick={() => setMobileToggle(false)}
        >
          {t("navigation.contact")}
        </Link>
      </li>
    </ul>
  );
}
