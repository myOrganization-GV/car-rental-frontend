import Link from "next/link";

const MyProfile = () => {
  return (
    <main className=" bg-[#F6F7F9] px-[10px] py-10 sm:px-[60px]">
      <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 text-black shadow-sm sm:p-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#90A3BF]">
          Profile
        </p>
        <h1 className="text-3xl font-bold">Work in progress</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#596780] sm:text-base">
          This page is still under construction. Profile details and rental
          history will be available here soon.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/explore" className="btn bg-blue-600 text-white border-none hover:bg-blue-700">
            Explore Cars
          </Link>
          <Link href="/" className="btn btn-ghost text-[#596780]">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MyProfile;
