import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  body: string;
  id: number;
}

export default function PostItem({id, title, body}: Props) {
  return (
		<div>
			<h4>
				<Link to={`${id}`}>{title}</Link>
			</h4>
			<p>{body}</p>
		</div>
	);
}