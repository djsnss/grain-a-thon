import VolunteerInfo from '@/components/VolunteerInfo';
import './index.css'

export default function Comps() {

  return (
    <div className="cinema-background min-h-screen max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
      <div className="overlay min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all"></div>
      <div className="department-page flex flex-col items-center min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all">
        <div className="heading mt-9">AI/DS</div>
        <div className="h-full w-full flex grow p-12">
          <VolunteerInfo />
        </div>
      </div>
    </div>
  );
}
