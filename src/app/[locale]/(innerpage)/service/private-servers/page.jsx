import Brand3 from "@/app/Components/Brand/Brand3";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";
import Services1 from "@/app/Components/Services/Services1";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Private Servers"
        Title_ar="السيرفرات الخاصه "
      ></BreadCumb>

      <ServiceDetails />
      <Services1></Services1>

      <Brand3></Brand3>
    </div>
  );
};

export default page;
