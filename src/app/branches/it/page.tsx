import VolunteerInfo from '@/components/VolunteerInfo';
import '../comps/index.css';

export default function IT() {
  return (
    <div className="cinema-background min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
      <div className="overlay min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all"></div>
      <div className="department-page flex flex-col items-center p-[110px] min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
        <div className="heading mt-9">INFORMATION TECHNOLOGY</div>
        <div className="h-full w-full flex grow">
          <VolunteerInfo />
        </div>
      </div>
    </div>
  );
}
