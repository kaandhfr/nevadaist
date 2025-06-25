import MemberList from "@/components/MemberList";

export default function MembersPage() {
  return (
    <div className="container mx-auto py-4">
        <div className="page-title flex items-center gap-4 mb-6">
            <h1 className="text-2xl font-medium mr-auto">Üye Listesi</h1>
            <span className="block text-sm font-medium text-gray-500">80 Üye Bulundu</span>
            <button type="button" className="bg-black text-white font-medium px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0.5H0.5L5.5 7.5V13.5L8.5 11.5V7.5L13.5 0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Filtrele</span>
            </button>
        </div>
        <MemberList />
    </div>
  );
}