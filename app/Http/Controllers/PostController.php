<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Posts/Index',compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            $request->validate([
            'title' => ['required' , 'max:255'],
            'content' => ['required']
        ]);

        $data =  Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'user_id' => auth()->id(), // assign the authenticated user's id
    ]);

        return redirect()->route('posts.index', compact('data'));

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Posts/Edit',compact('post'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Post $post)
    {
          $request->validate([
            'title' => ['required' , 'max:255'],
            'content' => ['required']
        ]);

        $post->update($request->only([
            'title','content'
        ]));
        return redirect()->route('posts.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
         return redirect()->route('posts.index');
    }
}
