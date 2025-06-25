import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ISTANBUL_DISTRICTS = [
  'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 'Başakşehir', 'Bayrampaşa',
  'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt',
  'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe',
  'Pendik', 'Sancaktepe', 'Sarıyer', 'Şile', 'Şişli', 'Sultanbeyli', 'Sultangazi', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  return (
    <header className='sticky top-12 z-50 my-12'>
        <div className='container mx-auto'>
            <div className='header-content flex justify-between items-center bg-white border border-[#dee2e6] rounded-2xl p-4'>
                <div className='flex items-center -my-12'>
                    <Link href="/" className='block'>
                        <Image src="/logo.png" alt='logo' width={150} height={150} />
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <Link href="/" className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition'>
                        <span>Yaklaşan Etkinlikler</span>
                    </Link>
                    <Link href="/members" className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition'>
                        <span>Üye Listesi</span>
                    </Link>
                    <Link target='_blank' href="https://chat.whatsapp.com/Hf7i08M73Ws9NJtxuzN2BU" className='flex items-center gap-2 text-[#5faf2a] font-medium p-2 rounded-md hover:bg-[#5faf2a23] transition'>
                        <svg width="22" height="22" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00033 0.879396C3.66533 0.880434 0.879026 3.67033 0.879041 7.00258C0.879047 8.20393 1.2366 9.39065 1.90395 10.3939L0.877136 13.1258L4.31554 12.504C5.15547 12.9145 6.07779 13.1202 7.00033 13.1208C10.3382 13.1231 13.1271 10.3369 13.1271 7.00258C13.1271 3.67208 10.3372 0.877426 7.00033 0.879396Z" stroke="#5faf2a" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.33732 9.69917C8.16569 10.231 9.02934 9.84363 9.63081 9.39504C10.0463 9.08518 10.0325 8.48754 9.67763 8.10978L8.97792 7.36488C8.7125 7.6303 8.19528 7.76167 7.83591 7.65229C7.06346 7.4172 6.73926 7.01469 6.47653 6.60542C6.17479 6.13536 6.51554 5.43333 6.78096 5.16792L6.00105 4.45591C5.67225 4.15575 5.17283 4.1051 4.88595 4.44555C4.31833 5.11913 3.96532 6.14177 4.38339 6.79292C5.13389 7.96184 6.16833 8.94878 7.33732 9.69917Z" stroke="#5faf2a" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Davet Linki</span>
                    </Link>
                    {/* Üyelik Butonu */}
                    <button
                        className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer'
                        onClick={() => { setPopupOpen(true); setShowRegister(false); }}
                    >
                        {/* User Icon (SVG) */}
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9439 9.49085C13.217 9.93013 14.3837 10.6558 15.364 11.636C17.0638 13.3359 18 15.596 18 18H16.5938C16.5938 13.8128 13.1872 10.4062 9 10.4062C4.81279 10.4062 1.40625 13.8128 1.40625 18H0C0 15.596 0.936176 13.3359 2.63605 11.636C3.61631 10.6558 4.78308 9.93013 6.05609 9.49085C4.69262 8.55179 3.79688 6.9802 3.79688 5.20312C3.79688 2.33413 6.131 0 9 0C11.869 0 14.2031 2.33413 14.2031 5.20312C14.2031 6.9802 13.3074 8.55179 11.9439 9.49085ZM5.20312 5.20312C5.20312 7.29675 6.90641 9 9 9C11.0936 9 12.7969 7.29675 12.7969 5.20312C12.7969 3.1095 11.0936 1.40625 9 1.40625C6.90641 1.40625 5.20312 3.1095 5.20312 5.20312Z" fill="black"/>
                        </svg>
                        <span>Hesabım</span>
                    </button>
                    {/* Mobil Menü Butonu */}
                    <button
                        className='p-2 rounded-md hover:bg-gray-100 transition cursor-pointer md:hidden'
                        onClick={() => setMenuOpen(true)}
                        aria-label='Menüyü Aç'
                    >
                        {/* Menubar Icon (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* Sağdan Açılan Menü */}
        {menuOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
                <div className="bg-black/30 w-full h-full" onClick={() => setMenuOpen(false)} />
                <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col">
                    <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Menüyü Kapat">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col gap-4">
                        <a href="#" className="text-lg font-medium hover:text-blue-600">Anasayfa</a>
                        <a href="#" className="text-lg font-medium hover:text-blue-600">Hakkımızda</a>
                        <a href="#" className="text-lg font-medium hover:text-blue-600">İletişim</a>
                    </nav>
                </div>
            </div>
        )}
        {/* Üyelik Popup */}
        {popupOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[25rem] relative overflow-hidden">
                    <button className="absolute top-2 right-2 cursor-pointer w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100" onClick={() => setPopupOpen(false)} aria-label="Kapat">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="relative w-full min-h-[22rem] flex">
                        <div className={`shrink-0 w-full transition-all duration-500 flex flex-col justify-center ${showRegister ? 'opacity-0 translate-x-[50%] pointer-events-none' : 'opacity-100 translate-x-0'}`} style={{zIndex: showRegister ? 0 : 2}}>
                            <h2 className="text-xl font-bold mb-4 text-center">Giriş Yap</h2>
                            <div className="my-auto">
                                <form className="flex flex-col gap-3">
                                    <input type="text" placeholder="Telefon numarası veya kullanıcı adı" className="border border-gray-400 rounded-lg px-3 py-2" />
                                    <input type="password" placeholder="Şifre" className="border border-gray-400 rounded-lg px-3 py-2 transition" />
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="accent-blue-500" />
                                        Şifremi hatırla
                                    </label>
                                    <button type="submit" className="bg-black text-white rounded-lg py-2 font-semibold mt-2 hover:bg-gray-800 transition-all cursor-pointer">Giriş Yap</button>
                                </form>
                                <button type="button" className="w-full mt-4 text-blue-600 hover:underline text-sm font-medium cursor-pointer" onClick={() => setShowRegister(true)}>
                                    Yoksa hala üye değil misin?
                                </button>
                            </div>
                        </div>
                        <div className={`shrink-0 w-full transition-all duration-500 flex flex-col justify-center ${showRegister ? 'opacity-100 -translate-x-[100%]' : 'opacity-0 -translate-x-[50%] pointer-events-none'}`} style={{zIndex: showRegister ? 2 : 0}}>
                            <h2 className="text-xl font-bold mb-4 text-center">Üye Ol</h2>
                            <div className="my-auto">
                                <form className="flex flex-col gap-3">
                                    <input type="text" placeholder="İsim Soyisim" className="border border-gray-400 rounded-lg px-3 py-2" />
                                    <input type="text" placeholder="Telefon numarası" className="border border-gray-400 rounded-lg px-3 py-2" />
                                    <select className="border border-gray-400 rounded-lg px-3 py-2" defaultValue="">
                                        <option value="" disabled>İlçe Seçiniz</option>
                                        {ISTANBUL_DISTRICTS.map((ilce) => (
                                            <option key={ilce} value={ilce}>{ilce}</option>
                                        ))}
                                    </select>
                                    <input type="password" placeholder="Şifre Belirle" className="border border-gray-400 rounded-lg px-3 py-2" />
                                    <input type="password" placeholder="Şifreyi Tekrar Girin" className="border border-gray-400 rounded-lg px-3 py-2" />
                                    <button type="submit" className="bg-black text-white rounded-lg py-2 font-semibold mt-2 hover:bg-gray-800 transition-all cursor-pointer">Üye Ol</button>
                                </form>
                                <button type="button" className="w-full mt-4 text-blue-600 hover:underline text-sm font-medium cursor-pointer" onClick={() => setShowRegister(false)}>
                                    Zaten hesabın var mı? Giriş yap
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </header>
  )
}
