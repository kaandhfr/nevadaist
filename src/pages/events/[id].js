import { useRouter } from 'next/router'

export default function EventDetail({ event }) {
  const router = useRouter()
  // fallback moddaysa: henüz oluşturulmamışsa gösterim
  if (router.isFallback) {
    return <div>Yükleniyor…</div>
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Tarih: {event.date}</p>
      {/* vs. */}
    </div>
  )
}

// 1) Hangi id’ler için sayfa oluşturacağız?
export async function getStaticPaths() {
  const events = await fetchEvents()
  const paths = events.map(ev => ({
    params: { id: ev.id.toString() }
  }))

  return {
    paths,
    fallback: true  // ya da 'blocking' / false tercihi
  }
}

// 2) Her id için veri çek
export async function getStaticProps({ params }) {
  const event = await fetchEventById(params.id)
  if (!event) {
    return { notFound: true }
  }
  return {
    props: { event },
    revalidate: 60  // opsiyonel: 60 saniyede bir yeniden oluştur
  }
}
