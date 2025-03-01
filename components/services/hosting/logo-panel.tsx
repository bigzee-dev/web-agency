import React from "react";

const logoProps = {
  className: "h-36",
};

export default function LogoPanel() {
  return (
    <div className="x-padding max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-x-8 gap-y-8">
      <img src="/svg/hosting/cpanel.svg" alt="cpanel" className="h-44" />
      <img src="/svg/hosting/wordpress.svg" alt="wordpress" className="h-52" />
      <img src="/svg/hosting/nodejs.svg" alt="nodejs" {...logoProps} />
      <img src="/svg/hosting/php.svg" alt="php" {...logoProps} />
      <img src="/svg/hosting/mysql.svg" alt="mysql" {...logoProps} />
      <img src="/svg/hosting/html5.svg" alt="html5" className="h-24" />
    </div>
  );
}
