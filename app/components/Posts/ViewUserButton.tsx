'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 10) {
      alert('Maskapai Kelas Eksekutif');
    } else {
      alert('Maskapai Kelas Menengah');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Kelas Maskapai</button>
    </>
  );
};

export default ViewUserButton;
