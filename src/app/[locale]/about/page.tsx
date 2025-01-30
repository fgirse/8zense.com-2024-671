import CreateOrg from '@/src/components/CreateOrg';
import { useServerOrganizationMember } from '@/hooks/useOrganizationMember';
import { authenticatePage } from '@/src/utils/auth';
import { redirect } from 'next/navigation';

export default async function Index() {
    const [user, secret] = await authenticatePage()
    const organizationMember = await useServerOrganizationMember(secret, false)

    if (organizationMember) {
        redirect("/api-keys")
    }

    return (
        <div className="flex w-full flex-1 flex-col items-center">
            {!organizationMember && <CreateOrg user={user} secret={secret} />}

            {/* TODO */}
            {/* <ManageSelfInvites />
            <UsageDashboard /> */}
        </div>
    );
}
