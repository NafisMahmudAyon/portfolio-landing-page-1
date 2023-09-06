import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="max-w-[1300px] w-[90%] mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 ">
            <div className=" min-h-[100px] h-auto relative py-10 px-7  md:col-span-2  lg:col-span-2  before:content before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-[1] before:bg-gradient-to-r from-[#ffffff4d] to-[#ffffff0d] before:opacity-25 before: group before:rounded-[30px] before:border-[.5px] before:border-[#ffffff26] after:top-0 after:content after:absolute after:right-0 after:left-0 after:bottom-0 after:bg-gradient-to-r from-[#ffffff1f] to-[#ffffff03] after:z-[-1] ">
              <a href="#" className="absolute left-0 top-0 w-full h-full rounded-[30px] opacity-0 z-10 "></a>
              <img
                src="https://i.ibb.co/rQbVwj9/Optimized-pexels-mikhail-nilov-8937551-1.jpg"
                alt=""
                className=" rounded-tl-[30px] rounded-br-[30px] w-1/2 aspect-square object-cover mx-auto "
              />
              <div className=" pt-[10px] ">
                <h4 className=" text-secondary dark:text-secondaryDark opacity-70 text-[14px] tracking-[0.3px] mb-[3px]  ">A WEB DESIGNER</h4>
                <h1 className=" text-[36px] text-primary dark:text-primaryDark font-[500] mb-[12px] ">David Henderson.</h1>
                <p className=" text-secondary dark:text-secondaryDark opacity-60 tracking-[0.3px] text-[14px]  ">I am a Web Designer based in san francisco.</p>{" "}
                <a href="#" className=" absolute block bottom-[25px] right-[30px] opacity-[0.2] transition-all ease-in-out duration-[.3s] pointer  group-hover:opacity-100  ">
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                    alt="Button"
                    className="  "
                  />
                </a>
              </div>
            </div>
            <div className=" min-h-[100px] h-auto  md:col-span-2  lg:col-span-2 bg-white ">
              <div className=" py-[17px] px-[25px] mb-[24px] "></div>
            </div>
            <div className=" min-h-[100px] h-auto md:col-span-1  lg:col-span-1 bg-white "></div>
            <div className=" min-h-[100px] h-auto   md:col-span-1 lg:col-span-2 bg-white "></div>
            <div className=" min-h-[100px] h-auto md:col-span-2  lg:col-span-1 bg-white "></div>
            <div className=" min-h-[100px] h-auto  md:col-span-2  lg:col-span-2 bg-white "></div>
            <div className=" min-h-[100px] h-auto  md:col-span-2  lg:col-span-2 bg-white "></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
