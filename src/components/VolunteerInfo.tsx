import './VolunteerInfo.css';

export default function VolunteerInfo() {

  const volunteers = [
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
    { name: 'B C K Z G V', phone: '2 6  K G S' },
  ];

  return (
    <div className="volunteers-container w-full max-h-[40vh] flex flex-col justify-center overflow-y-auto">
      {
        volunteers.map((volunteer, index) => (
          <div key={index} className="volunteer-info flex justify-between p-3.5">
            <div className="volunteer-name">{volunteer.name}</div>
            <div className="volunteer-phone">{volunteer.phone}</div>
          </div>
        ))
      }
    </div>
  );
}
