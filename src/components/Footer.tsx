import { inter } from "@/app/ui/fonts";
function Footer() {
  return (
    <div className={` ${inter.className} font-normal bg-primary-gray text-center py-6 text-sm text-tertiary-gray  dark:bg-primary-black dark:text-primary-gray `}>
      &copy; 2024 | 
      &nbsp;<a href="https://github.com/LaxmanJonchhen12/laxman-jonchhen-portfolio-website.git">
      <span className="underline hover:font-medium">
      Coded
      </span>
      </a> 
      &nbsp;with ❤️️ By 
      Laxman Jonchhen
    </div>
  );
}

export default Footer;
