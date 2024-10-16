import VolunteerInfo from "@/components/VolunteerInfo";
import "./index.css";

export default function AIDS() {
  return (
    <div className="cinema-background min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
      <div className="overlay min-h-screen md:h-[100vh] h-[140vh] w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all"></div>
      <div className="department-page flex flex-col items-center md:p-[110px] p-0 min-h-screen w-[100vw] max-w-full m-0 overflow-x-hidden overflow-y-auto transition-all">
        <div className="heading mt-9">AI - DS</div>
        <div className="h-full w-full flex grow p-12">
          <VolunteerInfo />
        </div>
      </div>
    </div>
  );
}
