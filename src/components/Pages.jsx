/* eslint-disable react/prop-types */
import home from '../assets/home.svg';
import order from '../assets/order.svg';
import products from '../assets/products.svg';
import marketing from '../assets/marketing.svg';
import delivery from '../assets/delivery.svg';
import analytics from '../assets/analytics.svg';
import payments from '../assets/payments.svg';
import tools from '../assets/tools.svg';
import discounts from '../assets/discounts.svg';
import audience from '../assets/audience.svg';
import appearence from '../assets/appearence.svg';
import plugins from '../assets/plugins.svg';

const PageItem = ({ icon, label }) => {
  return (
    <div className="w-[208px] h-9 pl-3 pt-1 pb-1 flex items-center mt-3 hover:bg-slate-700 hover:cursor-pointer rounded">
      <img src={icon} alt={label.toLowerCase()} className="mr-3" />
      <span className="top-0 left-0 opacity-80 font-medium text-white text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

const Pages = () => {
  const pageData = [
    { icon: home, label: 'Home' },
    { icon: order, label: 'Orders' },
    { icon: products, label: 'Products' },
    { icon: delivery, label: 'Delivery' },
    { icon: marketing, label: 'Marketing' },
    { icon: analytics, label: 'Analytics' },
    { icon: payments, label: 'Payments' },
    { icon: tools, label: 'Tools' },
    { icon: discounts, label: 'Discounts' },
    { icon: audience, label: 'Audience' },
    { icon: appearence, label: 'Appearence' },
    { icon: plugins, label: 'Plugins' },
  ];

  return (
    <>
      {pageData.map((page, index) => (
        <PageItem key={index} icon={page.icon} label={page.label} />
      ))}
    </>
  );
};

export default Pages;
