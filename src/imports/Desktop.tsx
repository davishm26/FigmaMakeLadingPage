import svgPaths from "./svg-swj7jj6dzy";
import imgImage1 from "figma:asset/1ce5a4b3c8639ecfa1d526d0b5b1c803f2f49dea.png";
import imgPenghargaanWilayahBirokrasiBersihDanMelayani from "figma:asset/5f653727e0ed8947d9f0859e296b9057b7818506.png";
import imgFacebookIcon from "figma:asset/cda15a79238ed9651a5ca507c57e46119a9b901f.png";
import imgInstagramIcon from "figma:asset/1a9f45dc0635fa64c8f1b19febeec95200aa27f3.png";
import imgYoutubeIcon from "figma:asset/744e38a09d1e31178942ce8bae3ad3337d79af63.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="h-[83px] relative shrink-0 w-[66px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#264968]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">MAHKAMAH AGUNG REPUBLIK INDONESIA</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] w-[435px]">
        <p className="leading-[30px]">PENGADILAN AGAMA KABUPATEN MADIUN KELAS IA</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#fcfcfd] relative rounded-[8px] shrink-0 w-[258px]" data-name="search">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[41px] py-[6px] relative rounded-[inherit] w-[258px]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[16px] text-nowrap">
          <p className="leading-[24px] whitespace-pre">Search...</p>
        </div>
        <div className="absolute flex inset-[19.35%_89.15%_16.13%_3.49%] items-center justify-center">
          <div className="flex-none h-[23.226px] scale-y-[-100%] w-[19px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 24">
                <path d={svgPaths.p17c3bf00} fill="var(--fill-0, #98A2B3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fcfcfd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1190px]">
      <Frame33 />
      <Search />
    </div>
  );
}

function Beranda() {
  return (
    <div className="absolute bg-[#05603a] box-border content-stretch flex items-start left-0 px-[16px] py-[4.5px] rounded-[6px] top-[3px]" data-name="beranda">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfd] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Beranda</p>
      </div>
    </div>
  );
}

function Profil() {
  return (
    <div className="absolute h-[24px] left-[102px] top-[7.5px] w-[76.45px]" data-name="Profil">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#1d2939] text-[18px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Profil</p>
      </div>
    </div>
  );
}

function Layanan() {
  return (
    <div className="absolute h-[24px] left-[178.45px] top-[7.5px] w-[149.42px]" data-name="Layanan">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#1d2939] text-[18px] text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Layanan Publik</p>
      </div>
    </div>
  );
}

function Prosedur() {
  return (
    <div className="absolute h-[24px] left-[327.87px] top-[7.5px] w-[188.52px]" data-name="Prosedur">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#1d2939] text-[18px] text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Prosedur Berperkara</p>
      </div>
    </div>
  );
}

function Trasparansi() {
  return (
    <div className="absolute h-[24px] left-[516.39px] top-[7.5px] w-[132.78px]" data-name="Trasparansi">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#1d2939] text-[18px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Transparansi</p>
      </div>
    </div>
  );
}

function Hub() {
  return (
    <div className="absolute h-[24px] left-[649.17px] top-[7.5px] w-[140.5px]" data-name="Hub">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#1d2939] text-[18px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Hubungi Kami</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[#fcfcfd] h-[40px] relative shrink-0 w-full" data-name="menu">
      <Beranda />
      <Profil />
      <Layanan />
      <Prosedur />
      <Trasparansi />
      <Hub />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[54px] top-[87px]" data-name="Header">
      <Frame34 />
      <Menu />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#264968] text-[24px] w-full">
        <p className="leading-[32px]">{`Penghargaan & Prestasi`}</p>
      </div>
    </div>
  );
}

function PenghargaanWilayahBirokrasiBersihDanMelayani() {
  return (
    <div className="aspect-[752/384] max-h-[384px] max-w-[752px] relative rounded-[8px] shrink-0 w-full" data-name="Penghargaan Wilayah Birokrasi Bersih dan Melayani">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[195.83%] left-0 max-w-none top-[-47.92%] w-full" src={imgPenghargaanWilayahBirokrasiBersihDanMelayani} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfd] text-nowrap">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px]">
        <p className="leading-[32px] text-nowrap whitespace-pre">Wilayah Birokrasi Bersih dan Melayani (WBBM)</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">Komitmen kami dalam memberikan pelayanan prima dan bebas korupsi.</p>
      </div>
    </div>
  );
}

function Gambar() {
  return (
    <div className="bg-[#027a48] content-stretch flex flex-col gap-[15px] h-[480px] items-center relative shrink-0 w-full" data-name="Gambar">
      <div className="absolute bg-[#05603a] inset-0 rounded-[8px]" data-name="Overlay" />
      <PenghargaanWilayahBirokrasiBersihDanMelayani />
      <Frame7 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[24px] top-[25.5px] w-[764px]">
      <Heading />
      <Gambar />
    </div>
  );
}

function Info() {
  return (
    <div className="absolute bg-[#fcfcfd] h-[579px] left-[54px] rounded-[9px] top-[273px] w-[812px]" data-name="info">
      <Frame35 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-start justify-between leading-[0] not-italic px-[10px] py-0 relative text-nowrap w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#264968] text-[24px]">
            <p className="leading-[32px] text-nowrap whitespace-pre">Berita Pengadilan</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#05603a] text-[20px]">
            <p className="leading-[30px] text-nowrap whitespace-pre">Lihat Semua</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic px-[10px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1d2939] text-[12px] w-[63px]">
            <p className="leading-[18px]">11.11.2025</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#264968] text-[16px] text-nowrap">
            <p className="leading-[24px] whitespace-pre">Wakil Ketua PA Kabupaten Madiun Pimpin Doa Penutup Kegiatan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic px-[10px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1d2939] text-[12px] w-[63px]">
            <p className="leading-[18px]">11.11.2025</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[#264968] text-[16px] text-nowrap whitespace-pre">
            <p className="mb-0">Jurusita dan Jurusita Pengganti Pengadilan Agama Kabupaten Madiun Mengikuti Pelatihan</p>
            <p>Teknis Yudisial Jurusita</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic pl-[10px] pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1d2939] text-[12px] w-[74px]">
            <p className="leading-[18px]">27.10.2025</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#264968] text-[16px] w-[501px]">
            <p className="leading-[24px]">Pengadilan Agama Kabupaten Madiun Lantik Jurusita Pengganti</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic pl-[10px] pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1d2939] text-[12px] w-[995px]">
            <p className="leading-[18px]">27.10.2025</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] relative shrink-0 text-[#264968] text-[16px] w-[659px]">
            <p className="mb-0">Pengadilan Agama Kabupaten Madiun Gelar Sosialisasi Layanan BTN untuk Aparatur</p>
            <p>Peradilan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Berita() {
  return (
    <div className="absolute bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[16px] items-start left-[54px] px-0 py-[20px] rounded-[20px] top-[1043px] w-[800px]" data-name="Berita">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p3e1dac00} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Jadwal() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[13px] h-[125px] items-center p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[120px]" data-name="jadwal">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[#264968] text-[16px] text-center w-[min-content]">
        <p className="mb-0">Jadwal</p>
        <p>Sidang</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p16a53b00} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Informasi() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[13px] h-[125px] items-center p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[120px]" data-name="informasi">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[#264968] text-[16px] text-center w-[min-content]">
        <p className="mb-0">Informasi</p>
        <p>Perkara</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p3843ba00} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Direktori() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[13px] h-[125px] items-center p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[120px]" data-name="direktori">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[#264968] text-[16px] text-center w-[min-content]">
        <p className="mb-0">Direktori</p>
        <p>Putusan</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.pb81c900} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Biaya() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[13px] h-[125px] items-center p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[120px]" data-name="biaya">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[#264968] text-[16px] text-center w-[min-content]">
        <p className="mb-0">Biaya</p>
        <p>Perkara</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p3dbe7980} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ECourt() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[13px] h-[125px] items-center p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[120px]" data-name="e-court">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#264968] text-[16px] text-center w-[min-content]">
        <p className="leading-[24px]">e-Court</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p12060d80} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Gugatan() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[13px] h-[125px] items-center p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[120px]" data-name="gugatan">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon5 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[#264968] text-[16px] text-center w-[min-content]">
        <p className="mb-0">Gugatan</p>
        <p>Mandiri</p>
      </div>
    </div>
  );
}

function Fitur() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[44px] top-[885px]" data-name="fitur">
      <Jadwal />
      <Informasi />
      <Direktori />
      <Biaya />
      <ECourt />
      <Gugatan />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p20d40100} fill="var(--fill-0, #264968)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Pengumuman() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Pengumuman">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon6 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#264968] text-[20px] text-nowrap">
        <p className="leading-[30px] whitespace-pre">Pengumuman</p>
      </div>
    </div>
  );
}

function IsiPengumuman() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap w-full" data-name="isi pengumuman">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">PENGUMUMAN SIDANG AANMANING</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">PEMBERITAHUAN ISI PUTUSAN NO PERKARA</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">PEMBERITAHUAN ISI PUTUSAN NO PERKARA</p>
      </div>
      <div className="flex flex-col justify-center leading-[20px] relative shrink-0 whitespace-pre">
        <p className="mb-0">PENGUMUMAN LELANG ULANG EKSEKUSI</p>
        <p>PENGADILAN</p>
      </div>
    </div>
  );
}

function Pengumuman1() {
  return (
    <div className="absolute bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[16px] items-start left-[911px] pb-[26px] pt-[24px] px-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[273px] w-[384px]" data-name="pengumuman">
      <Pengumuman />
      <IsiPengumuman />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#05603a] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Pengumuman Lainnya →</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1bb2da80} fill="var(--fill-0, #264968)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon7 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#264968] text-[20px] text-nowrap">
        <p className="leading-[30px] whitespace-pre">Agenda</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#05603a] text-[24px]">
        <p className="leading-[32px] text-nowrap whitespace-pre">20</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1d2939] text-[12px]">
        <p className="leading-[18px] text-nowrap whitespace-pre">NOV</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#264968] text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">Pelantikan Jurusita</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-pre">
        <p className="mb-0">Ruang Tunggu Pengadilan Agama Kab.</p>
        <p>Madiun</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#05603a] text-[24px]">
        <p className="leading-[32px] text-nowrap whitespace-pre">20</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1d2939] text-[12px]">
        <p className="leading-[18px] text-nowrap whitespace-pre">NOV</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#264968] text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">Rapat Koordinator Pengadilan</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#101828] text-[14px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Pengadilan Agama Kab. Madiun</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Agenda() {
  return (
    <div className="absolute bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[16px] h-[220px] items-start left-[911px] p-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[592px] w-[384px]" data-name="agenda">
      <Frame11 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1a4dcaf0} fill="var(--fill-0, #264968)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon8 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#264968] text-[20px] text-nowrap">
        <p className="leading-[30px] whitespace-pre">Informasi Cepat</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pf8ee500} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[328px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Informasi Pengadilan</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pf8ee500} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[328px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">List Jadwal Sidang</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pf8ee500} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[328px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Berita Pengadilan</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pf8ee500} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[328px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Penelusuran Perkara</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pf8ee500} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[328px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Laporan Keuangan</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Frame16 />
      <Frame15 />
      <Frame14 />
      <Frame13 />
      <Frame12 />
    </div>
  );
}

function InformasiCepat() {
  return (
    <div className="absolute bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[16px] h-[243px] items-start left-[911px] p-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[865px] w-[379px]" data-name="Informasi cepat">
      <Heading1 />
      <List />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[20px]">Pengadilan Agama Kab. Madiun</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[20px]">Jl. Raya Tiron Km.06, Nglames</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[20px]">No Telp : 0351-463301</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[20px]">Email: pa.kab.madiun@gmail.com</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[240px]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfd] text-[16px] w-full">
        <p className="leading-[24px]">Hubungi Kami</p>
      </div>
      <Frame18 />
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Facebook icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFacebookIcon} />
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Instagram icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInstagramIcon} />
      </div>
    </div>
  );
}

function YoutubeIcon() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Youtube icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYoutubeIcon} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <FacebookIcon />
      <InstagramIcon />
      <YoutubeIcon />
    </div>
  );
}

function Hubungi() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[264px]" data-name="Hubungi">
      <Frame19 />
      <Frame17 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe8d600} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon14 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Mahkamah Agung RI</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe8d600} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon15 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Kepaniteraan MA RI</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe8d600} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon16 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ditjen Badilag</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe8d600} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon17 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Direktori Putusan</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame23 />
      <Frame22 />
      <Frame21 />
      <Frame20 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#fcfcfd] text-[16px] w-[min-content]">
        <p className="leading-[24px]">Tautan Web</p>
      </div>
      <Frame24 />
    </div>
  );
}

function TautanWeb() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[216px] items-start relative shrink-0 w-[264px]" data-name="Tautan web">
      <Frame25 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p200e6970} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon18 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">SIPP</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame41 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p200e6970} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-[64px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon19 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">SIKEP</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame42 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p200e6970} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-[72px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon20 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">e-Court</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame43 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p200e6970} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon21 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">SIMARI</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <Frame40 />
      <Frame26 />
      <Frame27 />
      <Frame44 />
    </div>
  );
}

function TautanAplikasi() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[245px]" data-name="Tautan aplikasi">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fcfcfd] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Tautan Aplikasi</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd0a5200} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[137px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon22 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">PA Kota Madiun</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame45 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd0a5200} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[97px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon23 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">PA Magetan</p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd0a5200} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[93px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon24 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">PA Ngawi</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[13px] items-start relative shrink-0 w-[100px]">
      <Frame48 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame47 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd0a5200} fill="var(--fill-0, #D0D5DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon25 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[4px] py-0 relative shrink-0" data-name="Margin">
      <Container />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[123px]">
      <Margin />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5dd] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">PA Ponorogo</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame29 />
      <Frame46 />
      <Frame30 />
      <Frame49 />
    </div>
  );
}

function TautanPeradilan() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[220px]" data-name="Tautan peradilan">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#fcfcfd] text-[16px] w-[min-content]">
        <p className="leading-[24px]">Tautan Peradilan</p>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full">
      <Hubungi />
      <TautanWeb />
      <TautanAplikasi />
      <TautanPeradilan />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#2c5e8f] relative shrink-0 w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[32px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[14px] text-center w-full">
            <p className="leading-[20px]">Copyright @ 2025. Pengadilan Agama Kabupaten Madiun. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#264968] box-border content-stretch flex flex-col gap-[32px] h-[367px] items-center left-0 pb-0 pt-[32px] px-0 rounded-tl-[8px] rounded-tr-[8px] top-[1408px] w-[1324px]" data-name="Footer">
      <Frame32 />
      <Background />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#eaecf0] relative size-full" data-name="Desktop">
      <Header />
      <Info />
      <Berita />
      <Fitur />
      <Pengumuman1 />
      <Agenda />
      <InformasiCepat />
      <Footer />
    </div>
  );
}