import type { LangType } from '@/app/[lang]/locales'
import { getDictionary } from '@/app/[lang]/locales'
import Avatar from '@/components/share/avatar.component'
import { Title } from '@/components/share/title.component'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

const ProfilePage = async ({ params: { lang } }: { params: { lang: LangType } }) => {
  const dict = await getDictionary(lang)
  return (
    <main className="flex flex-col">
      <Title>{dict.title.profile}</Title>
      <Avatar />
    </main>
  )
}

export default ProfilePage
