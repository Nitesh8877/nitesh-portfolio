import { Link } from "react-router-dom";

export const ContainerCenter = ({ children, className }) => {
  return <div className={`${className} flex items-center `}>{children}</div>;
};

export const Container = ({ children, className }) => {
  return <div className={`${className} max-w-7xl mx-auto`}>{children}</div>;
};

export const Divider = ({ className }) => {
  return (
    <div className={`${className} border-b bg-baseColor h-1 w-full my-8`} />
  );
};

export const IconWrapper = ({ children, link }) => {
  return (
    <Link
      target="_blank"
      to={link ?? "/"}
      className="text-xl rounded-full p-2 border-black border-2 hover:border-baseColor hover:scale-90 transition-transform hover:text-baseColor"
    >
      {children}
    </Link>
  );
};

export const Button = ({
  children,
  basecolor,
  className,
  link,
  w,
  ...props
}) => {
  return (
    <Link
      {...props}
      to={link}
      className={`${className} ${
        basecolor
          ? "bg-baseColor hover:text-baseColor border-baseColor"
          : "bg-white border-white hover:text-white"
      }  text-2xl rounded-md  px-8 border-2 py-1  hover:bg-transparent transition-colors duration-300 ease-in ${
        w ? w : "max-w-fit"
      } block text-center`}
    >
      {children}
    </Link>
  );
};

export const Heading = ({ children, className }) => {
  return (
    <h2
      className={`${className} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black`}
    >
      &lt;{children}&gt;
    </h2>
  );
};

export const Error = ({ children }) => {
  return <p className="text-baseColor p-1 text-base text-center">{children}</p>;
};
