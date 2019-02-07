import React from 'react';

const Category = (props) => {
	return (
		<article className="category" onClick={() => props.sort(props.cat) }>
			{props.title}
		</article>
	)
}

export default Category