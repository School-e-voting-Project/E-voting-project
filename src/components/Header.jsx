import img from "@/assets/icons/logo1.jpg";
export default function Header() {
  return (
    <header className="w-full grid place-items-center py-5">
      <div className="flex flex-col items-center max-w-[60%] text-center">
        <img
          src={img}
          alt="logo"
          className="
    w-[100px]
    "
        />

        {/* You can change the heading text and subtext below */}
        <h1 className="font-bold text-3xl pb-2">
          NATIONAL ASSOCIATION OF POLITICAL SCIENCE STUDENTS{" "}
        </h1>
        <p>
          This is an Election for the incoming executives of the National
          Association of Political Science Students.
        </p>
        {/* You can change the heading text and subtext above */}
      </div>
    </header>
  );
}
