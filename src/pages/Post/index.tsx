import { title } from 'process';
import React, { useEffect, useState } from 'react';
import PostItem from '../../components/PostItem';

type Props = {};

export default function Post({}: Props) {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, []);

	return (
		<div>
			<h1>List of Posts</h1>
       {
         posts.map(({id, title, body}) => <PostItem key={id} id={id} title={title} body={body} />)
       }
		</div>
	);
}
