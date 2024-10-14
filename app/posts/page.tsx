import maskapaiData from "../../public/data/Maskapai.json"; // Sesuaikan dengan path JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IMaskapai {
  IdMaskapai: string;
  NamaMaskapai: string;
  KodePanggil: string;
  TanggalDidirikan: string;
  TahunDidirikan: string;
  HargaTiket: string;
}

const MaskapaiList = () => {
  const maskapai: IMaskapai[] = maskapaiData["Maskapai"]; // Menggunakan notasi bracket

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">DAFTAR MASKAPAI</h1>
      {maskapai.map((m) => (
        <CardList key={m.IdMaskapai}>
          <p>{m.NamaMaskapai}</p>
          <i>Kode Panggil: {m.KodePanggil}</i>
          <p>Tanggal Didirikan: {m.TanggalDidirikan} - {m.TahunDidirikan}</p>
          <p>Harga Tiket: Rp {parseInt(m.HargaTiket).toLocaleString()}</p>
          <ViewUserButton userId={m.IdMaskapai} />
        </CardList>
      ))}
    </>
  );
};

export default MaskapaiList;
