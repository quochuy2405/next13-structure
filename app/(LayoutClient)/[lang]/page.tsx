import { getDictionary } from '@/app/[lang]/locales'
import type { LangType } from '@/app/[lang]/locales'
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from '@/components/client/common/atoms'
import { Title } from '@/components/shared/common'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

const ClientPage = async ({ params: { lang } }: { params: { lang: LangType } }) => {
  const dict = await getDictionary(lang)
  return (
    <main className="flex flex-col">
      <Title>{dict.title.login}</Title>
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
  )
}

export default ClientPage
