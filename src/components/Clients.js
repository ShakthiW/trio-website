import React from "react";

/*
const Details = ({ position, company, companyLink, time, adress, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;
          <a href={companyLink}>@{company}</a>
        </h3>
        <span>
          {time} | {adress}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};

*/

const Clients = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Our Clients
      </h2>

      {/*
      <div className="w-[75%] mx-auto relative">
        <ui>
          <Details />
        </ui>
      </div>
      */}
      
    </div>
  );
};

export default Clients;
