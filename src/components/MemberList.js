import React from 'react'

// Örnek üyeler
const members = [
  { name: 'Kaan Uçar', location: 'Ümraniye', phone: '0532 123 45 67' },
  { name: 'S. Said Ç,çek', location: 'Beşiktaş', phone: '0555 987 65 43' },
  { name: 'Enes Narlı', location: 'Ümraniye', phone: '0544 111 22 33' },
  { name: 'Burak Polat', location: 'Maltepe', phone: '0555 344 81 81' },
  { name: 'Ahmet Ateş', location: 'Ataşehir', phone: '0543 407 67 82' },
  { name: 'Emre Işık', location: 'Bakırköy', phone: '0556 251 63 46' },
  { name: 'Ayşe Sarı', location: 'Bahçelievler', phone: '0552 817 90 90' },
  { name: 'Ali Tan', location: 'Beşiktaş', phone: '0547 150 30 12' },
  { name: 'Deniz Sezer', location: 'Kartal', phone: '0557 922 74 62' },
  { name: 'Merve Uçar', location: 'Sancaktepe', phone: '0539 658 17 77' },
  { name: 'Tolga Yıldız', location: 'Üsküdar', phone: '0541 838 52 23' },
  { name: 'Zeynep Taş', location: 'Şişli', phone: '0543 393 60 42' },
  { name: 'Hakan Kaya', location: 'Fatih', phone: '0547 579 56 84' },
  { name: 'Gizem Öztürk', location: 'Pendik', phone: '0554 932 42 53' },
  { name: 'Kerem Demir', location: 'Beylikdüzü', phone: '0559 804 29 21' },
  { name: 'Melis Arslan', location: 'Kadıköy', phone: '0531 101 26 64' },
  { name: 'Derya Koç', location: 'Maltepe', phone: '0540 657 31 41' },
  { name: 'Baran Şahin', location: 'Ataşehir', phone: '0551 301 50 94' },
  { name: 'İpek Çetin', location: 'Bakırköy', phone: '0534 766 25 22' },
  { name: 'Ece Polat', location: 'Bahçelievler', phone: '0558 208 93 68' },
  { name: 'Burak Bayraktar', location: 'Beşiktaş', phone: '0544 312 70 34' },
  { name: 'Ahmet Yıldız', location: 'Kartal', phone: '0557 416 68 92' },
  { name: 'Merve Tan', location: 'Sancaktepe', phone: '0536 472 33 17' },
  { name: 'Tolga Işık', location: 'Üsküdar', phone: '0543 987 71 42' },
  { name: 'Zeynep Sezer', location: 'Şişli', phone: '0555 829 82 75' },
  { name: 'Hakan Taş', location: 'Fatih', phone: '0552 674 39 54' },
  { name: 'Gizem Kaya', location: 'Pendik', phone: '0548 970 85 63' },
  { name: 'Kerem Öztürk', location: 'Beylikdüzü', phone: '0556 295 49 29' },
  { name: 'Melis Demir', location: 'Kadıköy', phone: '0530 649 74 55' },
  { name: 'Derya Arslan', location: 'Maltepe', phone: '0542 319 87 10' },
  { name: 'Baran Koç', location: 'Ataşehir', phone: '0559 274 64 35' },
  { name: 'İpek Şahin', location: 'Bakırköy', phone: '0533 715 90 58' },
  { name: 'Ece Çetin', location: 'Bahçelievler', phone: '0554 206 11 41' },
  { name: 'Burak Polat', location: 'Beşiktaş', phone: '0546 723 82 94' },
  { name: 'Ahmet Bayraktar', location: 'Kartal', phone: '0551 440 75 65' },
  { name: 'Merve Uçar', location: 'Sancaktepe', phone: '0538 548 32 17' },
  { name: 'Tolga Yıldız', location: 'Üsküdar', phone: '0545 159 78 22' },
  { name: 'Zeynep Taş', location: 'Şişli', phone: '0541 209 35 41' },
  { name: 'Hakan Kaya', location: 'Fatih', phone: '0556 631 49 86' },
  { name: 'Gizem Öztürk', location: 'Pendik', phone: '0544 780 65 53' },
  { name: 'Kerem Demir', location: 'Beylikdüzü', phone: '0553 990 38 27' },
  { name: 'Melis Arslan', location: 'Kadıköy', phone: '0532 549 41 55' },
  { name: 'Derya Koç', location: 'Maltepe', phone: '0547 619 84 10' },
  { name: 'Baran Şahin', location: 'Ataşehir', phone: '0550 224 24 35' },
  { name: 'İpek Çetin', location: 'Bakırköy', phone: '0537 415 20 58' },
  { name: 'Ece Polat', location: 'Bahçelievler', phone: '0555 506 51 41' },
  { name: 'Burak Bayraktar', location: 'Beşiktaş', phone: '0543 622 72 94' },
  { name: 'Ahmet Yıldız', location: 'Kartal', phone: '0559 540 65 65' },
  { name: 'Merve Tan', location: 'Sancaktepe', phone: '0531 718 32 17' },
  { name: 'Tolga Işık', location: 'Üsküdar', phone: '0542 259 78 22' },
  { name: 'Zeynep Sezer', location: 'Şişli', phone: '0549 319 35 41' },
  { name: 'Hakan Taş', location: 'Fatih', phone: '0554 781 49 86' },
  { name: 'Gizem Kaya', location: 'Pendik', phone: '0546 670 65 53' },
  { name: 'Kerem Öztürk', location: 'Beylikdüzü', phone: '0557 190 38 27' },
  { name: 'Melis Demir', location: 'Kadıköy', phone: '0535 749 41 55' },
  { name: 'Derya Arslan', location: 'Maltepe', phone: '0549 719 84 10' },
  { name: 'Baran Koç', location: 'Ataşehir', phone: '0552 374 64 35' },
  { name: 'İpek Şahin', location: 'Bakırköy', phone: '0538 915 20 58' },
  { name: 'Ece Çetin', location: 'Bahçelievler', phone: '0553 606 51 41' },
  { name: 'Burak Polat', location: 'Beşiktaş', phone: '0541 822 72 94' },
  { name: 'Ahmet Bayraktar', location: 'Kartal', phone: '0558 640 65 65' },
  { name: 'Merve Uçar', location: 'Sancaktepe', phone: '0534 848 32 17' },
  { name: 'Tolga Yıldız', location: 'Üsküdar', phone: '0547 359 78 22' },
  { name: 'Zeynep Taş', location: 'Şişli', phone: '0545 419 35 41' },
  { name: 'Hakan Kaya', location: 'Fatih', phone: '0557 881 49 86' },
  { name: 'Gizem Öztürk', location: 'Pendik', phone: '0543 560 65 53' },
  { name: 'Kerem Demir', location: 'Beylikdüzü', phone: '0555 390 38 27' },
  { name: 'Melis Arslan', location: 'Kadıköy', phone: '0536 949 41 55' },
  { name: 'Derya Koç', location: 'Maltepe', phone: '0548 819 84 10' },
  { name: 'Baran Şahin', location: 'Ataşehir', phone: '0551 424 64 35' }
];



export default function MemberList() {
  return (
    <div className="member-list bg-white rounded-2xl p-4">
      {/* Tablo başlıkları */}
      <div className="flex bg-gray-100 rounded-t-lg border-b border-gray-200 text-gray-700 font-semibold text-sm">
        <div className="flex-1 p-3">İsim Soyisim</div>
        <div className="flex-1 p-3">Lokasyon</div>
        <div className="flex-1 p-3">Telefon</div>
      </div>
      {/* Tablo satırları */}
      {members.map((member, idx) => (
        <div
          key={idx}
          className={`flex items-center border-b border-gray-100 last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="flex-1 p-3 text-gray-900">{member.name}</div>
          <div className="flex-1 p-3 text-gray-700">{member.location}</div>
          <div className="flex-1 p-3 text-gray-700">{member.phone}</div>
        </div>
      ))}
    </div>
  )
}
