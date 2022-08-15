import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Props = {

};

type Post = {
	title: string;
	body: string;
};

export default function SinglePost({}: Props) {
	const { id } = useParams();
	const [post, setPost] = useState<Post>();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => response.json())
			.then((json) => setPost(json));
	}, []);

	return (
		<div>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
		</div>
	);
}
