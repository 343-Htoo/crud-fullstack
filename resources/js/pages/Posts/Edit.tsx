import AppLayout from "@/layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";
import { Loader } from "lucide-react";

interface Post{
    id:number,
    title:string,
    content:string,

}
interface PostProps{
    post?:Post
}


export default function Edit({post} : PostProps){

      if (!post) {
        return <div className="text-center mt-10 text-gray-500">Loading post...</div>;
    }

    const{data,setData,put,processing} = useForm({
        title:post.title,
        content:post.content
    });

    const updateSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        put(route('posts.update' ,post.id))
    }


    return (
        <AppLayout breadcrumbs={[{title: 'Edit a Post' , href : `/posts/${post.id}/edit`}]}>
            <Head title="Create the post"/>
             <div className="bg-white dark:bg-neutral-800 rounded border-1 border-purple-500  p-6 w-100 mt-5 shadow-lg mx-auto">
                    <form onSubmit={updateSubmit} method="post">
                        <div className="mb-4">
                            <label htmlFor="title" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
                                Title
                            </label>
                            <input
                                value={data.title} onChange={(e) => setData('title',e.currentTarget.value)}
                                type="text"
                                id="title" name="title"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter post title"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
                                Content
                            </label>
                            <textarea
                                value={data.content} onChange={(e) => setData('content', e.currentTarget.value)}
                                id="content" name="content"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                rows={6}
                                placeholder="Enter post content"

                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                                 {processing ? <Loader className="animate-spin w-4 h-4" />:' Update Post'}
                            </button>
                        </div>
                    </form>
                </div>
        </AppLayout>
    )
}
