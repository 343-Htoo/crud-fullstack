import AppLayout from '@/layouts/app-layout';
import { Link, Head, useForm } from '@inertiajs/react';


interface Post{
    id:number,
    title:string,
    content:string,
    created_at:string
}

interface postProps{
    posts:Post[]
}


export default function Index({posts} : postProps) {

    const {processing,delete:destory} = useForm()
    const deleteHandle = (id:number)=> {
        if(confirm(`Do you want to delele ${id}`)){
             destory(route('posts.destroy',id));
        }

    }
    return (
        <AppLayout>
            <Head title="Post index" />

            <div className="container mx-auto px-4 py-8">
                <div className='flex justify-between align-center m-3'>
                    <h2 className='font-bold px-4 py-1 border-1'>Post All</h2>
                    <Link href={route('posts.create')}
                     className='bg-green-800 px-4 py-1 rounded shadow cursor-pointer'>
                        Add Posts
                    </Link>
                </div>

                {/* {flash?.message && <div className="mb-4 rounded border border-green-300 bg-green-100 p-3 text-green-700"></div>} */}
                <div className="overflow-x-auto">
                    <table className="min-w-full rounded bg-white shadow dark:bg-neutral-800">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-neutral-700">
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Title</th>
                                <th className="px-4 py-2 text-left">Content</th>
                                <th className="px-4 py-2 text-left">Created</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post , index) => (
                                        <tr key={index} className="border-b dark:border-neutral-700">
                                        <td className="px-4 py-2">{post.id}</td>
                                        <td className="px-4 py-2">{post.title}</td>
                                        <td className="px-4 py-2">{post.content.length >30 ? post.content.slice(0,50)+'...' : post.content}</td>
                                        <td className="px-4 py-2">{post.created_at}</td>
                                        <td className="space-x-2 px-4 py-2">
                                            <Link href={`/posts/${post.id}/edit`}
                                            className='inline-block cursor-pointer bg-blue-400 px-2 py-1 rounded hover:bg-blue-800 text-sky-50'>
                                            Edit
                                            </Link>
                                            <button disabled={processing} onClick={() => deleteHandle(post.id)}
                                            className='inline-block px-2 py-1 bg-red-500 rounded hover:bg-red-700 text-sky-100'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                                            {/* <Link
                                                href=""
                                                className="inline-block rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600"
                                            >
                                                Edit
                                            </Link>
                                            <button

                                                className="inline-block rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"

                                            >
                                                Delete */}



                                <tr>
                                    <td colSpan={5} className="py-4 text-center text-gray-500">
                                        No posts found.
                                    </td>
                                </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
