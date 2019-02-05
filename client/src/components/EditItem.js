import React from 'react';
import { Query } from "react-apollo";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { GET_ITEM } from '../graphql/queries';

const EditItem = (props) => {
  const id = props.match.params.id
  	return (
		<Query 
			query={GET_ITEM}
			variables={{ id }}
		>
			{({ loading, error, data }) => {
				if (loading) return "Loading...";
				if (error) return `Error! ${error.message}`;

				const item = data.findItem
				console.log(item)
				return (
					<div className="content-box">
						<Formik
							initialValues={{
								EAN: item.EAN,
								name: item.name,
							}}
							onSubmit={(values, actions) => {
								alert(values.EAN, values.name)
							}}
							render={({ errors, status, touched, isSubmitting }) => (
								<div className="edit-form">
									<h2>Redigerar artikel #{id}</h2>
									<Form>
										<section className="id-section">
											<label className="ean-lable">Artikel nr</label>
											<Field type="text" name="EAN" disabled={true} className="ean" />
											<ErrorMessage name="name">
												{errorMessage => <div className="error">{errorMessage}</div>}
											</ErrorMessage>
											<label className="name-lable">Namn</label>
											<Field type="text" name="name" className="name" />
											<ErrorMessage name="name">
												{errorMessage => <div className="error">{errorMessage}</div>}
											</ErrorMessage>
										</section>
										<button type="submit" disabled={isSubmitting}>Submit</button>
									</Form>
								</div>
							)}
						/>
					</div>
				);
			}}
		</Query>
  	)
}

export default EditItem