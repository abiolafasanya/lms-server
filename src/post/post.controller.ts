import { Body, Controller, Get, Param, Post } from '@nestjs/common';

interface PostDocs {
  id: string;
  title: string;
  body: string;
  user: string;
}

@Controller('post')
export class PostController {
  posts: PostDocs[] = [
    {
      id: '1',
      title: 'post one',
      body: 'post one body',
      user: 'abiola',
    },
  ];

  @Get()
  getPosts(): PostDocs[] {
    return this.posts;
  }

  @Post()
  createPost(@Body() postData: PostDocs) {
    console.log(postData);
    this.posts.push(postData);
    return postData;
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    const findPost = this.posts.find((post) => post.id === id);
    console.log(id);
    return findPost;
  }
}
