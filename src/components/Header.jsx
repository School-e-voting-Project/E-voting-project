import img from "@/assets/icon/android-chrome-192x192.png";
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
          ELECTION OF THE FEDERAL RUPUBLIC OF NIGERIA{" "}
        </h1>
        <p>
          This is an Election for the incoming executives of the Federal Republic of Nigeria.
        </p>
        {/* You can change the heading text and subtext above */}
      </div>
    </header>
  );
}
