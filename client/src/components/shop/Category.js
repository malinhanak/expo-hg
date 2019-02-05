import React from 'react';

const Category = (props) => {
	return (
		<article className={`category ${props.class}`} onClick={() => props.sort(props.cat) }>
			<div className="category-name">{props.title}</div>
		</article>
	)
}

export default Category