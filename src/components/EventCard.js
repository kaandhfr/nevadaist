import Link from 'next/link'

export default function EventCard({ event }) {
  return (
    <Link
      href={"/events/3fa85f64-5717-4562-b3fc-2c963f66afa6"}
      className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300"
    >
      <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold text-gray-700">
          {new Date(event.dateTime).getDate()}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {new Date(event.dateTime).toLocaleString('tr-TR', { month: 'short' }).toUpperCase()}
        </span>
      </div>
      <div className="event-item-content flex flex-col gap-2">
        <div className="event-item-title flex items-center justify-between">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <div className="event-item-date flex gap-2 text-sm text-gray-500">
            <span>{event.dateTime.split('T')[0] + ' ' + event.dateTime.split('T')[1].split(':')[0] + ':' + event.dateTime.split('T')[1].split(':')[1]}</span>
          </div>
        </div>
        <div className="event-item-description text-sm text-gray-700 mb-1">
          İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
          Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
        </div>
        <div className="event-item-participants text-sm text-gray-600">
          Aktif Katılımcı: <span className="font-semibold">{event.attendingCount}</span>
        </div>
      </div>
    </Link>
  );
}
