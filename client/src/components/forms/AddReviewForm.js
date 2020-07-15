import React, { useState, useEffect, useSelector } from 'react'
import '../style.css';
import { useDispatch } from 'react-redux'
import { addReviews } from '../../actions/reviewActions'
import { getReviews } from '../../actions/reviewActions'


const AddReviewForm = props => {
	const initialFormState = { id: null, description: '', stars: '' }
	const [review, setReview] = useState(initialFormState)
	const dispatch = useDispatch();

	const handleInputChange = event => {
		const { description, value } = event.target

		setReview({ ...review, [description]: value })
	}

	return (
		<form className="formAddCategory" onSubmit={event => {
			event.preventDefault()
			if (!(review.description && review.stars)) return
			dispatch(addReviews(review))
			setReview(initialFormState)
		}}
		>
			<label>Review</label>
			<input type="text" description="description" placeholder="¿Qué te pareció el producto?" value={review.description} onChange={handleInputChange} />

			<button>Agregar review</button>
		</form>
	)
}

export default AddReviewForm