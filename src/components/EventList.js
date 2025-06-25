import { useState } from "react";

const EventList = () => {
  return (
    <div className="event-list grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300">
          <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-700">22</span>
            <span className="text-sm font-medium text-gray-500">Haz.</span>
          </div>
          <div className="event-item-content flex flex-col gap-2">
            <div className="event-item-title flex items-center justify-between">
              <h3 className="text-lg font-semibold">Şile Turu</h3>
              <div className="event-item-date flex gap-2 text-sm text-gray-500">
                <span>24.06.2025 10:00</span>
              </div>
            </div>
            <div className="event-item-description text-sm text-gray-700 mb-1">
              İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
              Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
            </div>
            <div className="event-item-participants text-sm text-gray-600">
              Aktif Katılımcı: <span className="font-semibold">17</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300">
          <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-700">19</span>
            <span className="text-sm font-medium text-gray-500">Tem.</span>
          </div>
          <div className="event-item-content flex flex-col gap-2">
            <div className="event-item-title flex items-center justify-between">
              <h3 className="text-lg font-semibold">Şile Turu</h3>
              <div className="event-item-date flex gap-2 text-sm text-gray-500">
                <span>24.06.2025 10:00</span>
              </div>
            </div>
            <div className="event-item-description text-sm text-gray-700 mb-1">
              İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
              Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
            </div>
            <div className="event-item-participants text-sm text-gray-600">
              Aktif Katılımcı: <span className="font-semibold">17</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300">
          <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-700">13</span>
            <span className="text-sm font-medium text-gray-500">Kas.</span>
          </div>
          <div className="event-item-content flex flex-col gap-2">
            <div className="event-item-title flex items-center justify-between">
              <h3 className="text-lg font-semibold">Şile Turu</h3>
              <div className="event-item-date flex gap-2 text-sm text-gray-500">
                <span>24.06.2025 10:00</span>
              </div>
            </div>
            <div className="event-item-description text-sm text-gray-700 mb-1">
              İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
              Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
            </div>
            <div className="event-item-participants text-sm text-gray-600">
              Aktif Katılımcı: <span className="font-semibold">17</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300">
          <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-700">22</span>
            <span className="text-sm font-medium text-gray-500">Haz.</span>
          </div>
          <div className="event-item-content flex flex-col gap-2">
            <div className="event-item-title flex items-center justify-between">
              <h3 className="text-lg font-semibold">Şile Turu</h3>
              <div className="event-item-date flex gap-2 text-sm text-gray-500">
                <span>24.06.2025 10:00</span>
              </div>
            </div>
            <div className="event-item-description text-sm text-gray-700 mb-1">
              İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
              Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
            </div>
            <div className="event-item-participants text-sm text-gray-600">
              Aktif Katılımcı: <span className="font-semibold">17</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300">
          <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-700">19</span>
            <span className="text-sm font-medium text-gray-500">Tem.</span>
          </div>
          <div className="event-item-content flex flex-col gap-2">
            <div className="event-item-title flex items-center justify-between">
              <h3 className="text-lg font-semibold">Şile Turu</h3>
              <div className="event-item-date flex gap-2 text-sm text-gray-500">
                <span>24.06.2025 10:00</span>
              </div>
            </div>
            <div className="event-item-description text-sm text-gray-700 mb-1">
              İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
              Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
            </div>
            <div className="event-item-participants text-sm text-gray-600">
              Aktif Katılımcı: <span className="font-semibold">17</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="event-item bg-white rounded-2xl p-4 flex gap-4 hover:shadow-lg transition-all duration-300">
          <div className="event-item-date bg-gray-200 rounded-xl w-40 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-gray-700">13</span>
            <span className="text-sm font-medium text-gray-500">Kas.</span>
          </div>
          <div className="event-item-content flex flex-col gap-2">
            <div className="event-item-title flex items-center justify-between">
              <h3 className="text-lg font-semibold">Şile Turu</h3>
              <div className="event-item-date flex gap-2 text-sm text-gray-500">
                <span>24.06.2025 10:00</span>
              </div>
            </div>
            <div className="event-item-description text-sm text-gray-700 mb-1">
              İstanbul'un doğal güzelliklerini keşfetmek için harika bir fırsat!
              Şile'nin eşsiz doğasında keyifli bir gün geçireceğiz.
            </div>
            <div className="event-item-participants text-sm text-gray-600">
              Aktif Katılımcı: <span className="font-semibold">17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
