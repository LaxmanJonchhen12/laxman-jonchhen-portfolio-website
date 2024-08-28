import SectionIntro from "../SectionIntro"
function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-start dark:bg-primary-black bg-primary-gray py-16 px-4 md:px-24 md:py-20 ">
      <SectionIntro introTitle="Testimonials" />
      <p
      className="dark:text-primary-gray text-tertiary-gray text-lg font-normal pt-4"
      >
        Nice Thing People have said about me
      </p>
      <div className="flex flex-col items-start gap-y-6 gap-x-0 md:gap-x-12 md:gap-y-0  justify-start md:flex-row mt-6 md:mt-12">
        
            <div className="flex flex-col gap-y-6 items-center justify-center dark:bg-ascent-gray bg-white shadow-md p-8 rounded-xl md:max-w-[375px]">
                <p
                className="dark:text-primary-gray text-tertiary-gray text-base font-normal"
                >
                    &quot;
                    During tenure at mining infosys at Mining Infosys Laxman preformed exceptionally well as frontend developer
                    I recommend him for frontend positions. lorem ispum
                    He redesigned and revamped our company website and improved ui and ux of our website.
                    &quot;
                </p>
                <div className="flex flex-col gap-x-1 items-center justify-start">
                    <p
                    className="text-lg dark:text-primary-white text-primary-black font-semibold"
                    >
                        Ramesh Kharbuja
                    </p>
                    <p
                    className="text-sm dark:text-primary-gray text-tertiary-gray font-normal"
                    >
                        Founder - Mining Infosys
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 items-center justify-center dark:bg-ascent-gray bg-white shadow-md p-8 rounded-xl md:max-w-[375px]">
                <p
                className="dark:text-primary-gray tertiary-gray text-base font-normal"
                >
                    &quot;
                    Laxman created engaging and responsive websites that enhanced the overall user
                    experience with his frontend expertise at cashkar. He displayed exceptional skills and dedication
                    to his work, contributing significantly to the success of our projects.
                    &quot;
                </p>
                <div className="flex flex-col gap-x-1 items-center justify-start">
                    <p
                    className="text-lg dark:text-primary-white text-primary-black font-semibold"
                    >
                        Ibrahim Surya
                    </p>
                    <p
                    className="text-sm dark:text-primary-gray text-tertiary-gray font-normal"
                    >
                        Founder - Cashkar
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-y-6 items-center justify-center dark:bg-ascent-gray bg-white shadow-md p-8 rounded-xl md:max-w-[375px]">
                <p
                className="dark:text-primary-gray tertiary-gray text-base font-normal"
                >
                    &quot;
                    Laxman is an exceptional frontend developer. He plays an important role in maintianing frontend system of nest nepal. He does his works neatly.
                    &quot;
                </p>
                <div className="flex flex-col gap-x-1 items-center justify-start">
                    <p
                    className="text-lg dark:text-primary-white text-primary-black font-semibold"
                    >
                        Kushal Kafle
                    </p>
                    <p
                    className="text-sm dark:text-primary-gray text-tertiary-gray font-normal"
                    >
                        Founder - Nest Nepal
                    </p>
                </div>
            </div>

      </div>
    </div>
  );
}

export default Testimonials;
