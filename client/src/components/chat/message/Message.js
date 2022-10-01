import React from 'react';
import './Message.css';
import DOMPurify from 'dompurify';
const Message = ({ message: { name, user_id, text }, current_uid }) => {
	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};
	let isCurrentUser = false;
	if (user_id === current_uid) {
		isCurrentUser = true;
	}
	return isCurrentUser ? (
		<div className='row right-align'>
			<div className='col s12 m8 16 right'>
				<p className='sentbyme'>
					<span>{name}</span>
					<span
						className='preview'
						dangerouslySetInnerHTML={createMarkup(text)}></span>
				</p>
			</div>
		</div>
	) : (
		<div className='row left-align'>
			<div className='col s12 m8 16 left'>
				{/* <p className='opponent'>
					{' '}
					{name}: {text}
				</p> */}
				<p className='opponent'>
					<span>{name}</span>
					<span
						className='preview'
						dangerouslySetInnerHTML={createMarkup(text)}></span>
				</p>
			</div>
		</div>
	);
};

export default Message;
