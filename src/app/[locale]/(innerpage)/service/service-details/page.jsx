import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Services Details"
        Title_ar="تفاصيل الخدمة"
      ></BreadCumb>
      <ServiceDetails></ServiceDetails>
    </div>
  );
};

export default page;
