import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link ,Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
               <Link href="/posts">
                        <span className="m-4 rounded p-2 bg-blue-200 hover:bg-blue-800 text-red-800">
                            Posts
                        </span>

                </Link>
                    </div>
        </AppLayout>
    );
}
