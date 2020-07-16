import React, { useState } from 'react'
import '../style.css';
import { useDispatch } from 'react-redux'
import { addReviews } from '../../actions/reviewActions'


const AddReviewForm = props => {
	const initialFormState = { id: null,title:'', description: '', stars: '' }
	const [review, setReview] = useState(initialFormState)
	const dispatch = useDispatch();
	const id = props.params.id

	const handleInputChange = event => {
		const { name, value } = event.target

		setReview({ ...review, [name]: value })
	}

	return (
		<form className="formReview" onSubmit={event => {
			event.preventDefault()
			if (!(review.description && review.stars)) return
			dispatch(addReviews(review, id))
			setReview(initialFormState)
		}}
		>
			<label>Review</label>
			<input type="text" name="title" placeholder="¿Qué te pareció el producto?" value={review.title} onChange={handleInputChange} />
			<input type="text" name="description" placeholder="¿Qué te pareció el producto?" value={review.description} onChange={handleInputChange} />
			<input type="text" name="stars" placeholder="¿Qué te pareció el producto?" value={review.stars} onChange={handleInputChange} />

			<button>Agregar review</button>
		</form>
	)
}

export default AddReviewForm