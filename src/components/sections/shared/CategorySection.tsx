import Image from "next/image";
import React from "react";

export default function CategorySection() {
  return (
    <div className="relative">
      <ul className="flex items-center lg:justify-center gap-1 overflow-x-auto py-2">
        {data &&
          data.map((item, index) => (
            <li key={index}>
              <a href={item?.url} className="flex items-center gap-1 whitespace-nowrap px-3 py-1">
                <span className="relative h-5 w-5">
                  <Image src={item?.icon} alt={item?.text} fill sizes="20" />
                </span>
                <span>{item?.text}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

const data = [
  {
    icon: "/assets/images/icon/all-categories.webp",
    text: "Tất cả danh mục",
    url:"#"
  },
  {
    icon: "/assets/images/icon/Diabetes.webp",
    text: "Tiểu đường",
    url:"#"
  },
  {
    icon: "/assets/images/icon/Heart-Health.webp",
    text: "Bệnh tim mạch",
    url:"#"
  },
  {
    icon: "/assets/images/icon/Respiratory-Health.webp",
    text: "Bệnh hô hấp",
    url:"#"
  },
  {
    icon: "/assets/images/icon/Cancer.webp",
    text: "Ung thư - Ung bướu",
    url:"#"
  },
  {
    icon: "/assets/images/icon/Digestive-Health.webp",
    text: "Bệnh tiêu hoá",
  },
  {
    icon: "/assets/images/icon/Healthy-Mind.webp",
    text: "Tâm lý - Tâm thần",
    url:"#"
  },
];
