import React from 'react';
import {reduxForm, Field} from 'redux-form'

const EditReviewForm = props => {

    const {handleSubmit} = props;

    return (
        <div>
            <h3>Insert Comment</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productComment">Comment</label>
                    <div>
                    <Field 
                        name="text" 
                        component='textarea' 
                        type="textArea" >
                    </Field>
                    </div>
                </div>
                <div>
                    <label htmlFor="productRate">Rate</label>
                    <Field 
                        name="rate" 
                        component='input' 
                        type="number">
                    </Field>
                </div>
                <button type="submit">Submit Comment</button>
            </form>
        </div>
    )
}

export default reduxForm({ form: 'ProductReview'})(EditReviewForm)