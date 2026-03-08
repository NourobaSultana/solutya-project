import React from "react";
import theme from "../../assets/themeforest.png";

const OurServices = () => {
  const companiesFirstRow = [
    { name: "VideoHive", logo: theme },
    { name: "CodeCanyon", logo: theme },
    { name: "GraphicRiver", logo: theme },
    { name: "ThemeForest", logo: theme },
  ];

  const companiesSecondRow = [
    { name: "VideoHive", logo: theme },
    { name: "CodeCanyon", logo: theme },
    { name: "GraphicRiver", logo: theme },
  ];

  const CompanyCard = ({ logo, name }) => (
    <div className="flex flex-col items-center gap-2">
      <img
        className="w-12 sm:w-14 md:w-16 lg:w-20 object-contain"
        src={logo}
        alt={`${name} logo`}
      />
      <span className="text-base font-bold alfa-slab-one">{name}</span>
    </div>
  );

  return (
    <section className="companies-section py-16">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold alfa-slab-one mb-12">
          Our services/products are trusted by industry leaders
        </h2>

        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 mb-10">
          {companiesFirstRow.map((company, idx) => (
            <CompanyCard key={idx} logo={company.logo} name={company.name} />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8">
          {companiesSecondRow.map((company, idx) => (
            <CompanyCard key={idx} logo={company.logo} name={company.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
