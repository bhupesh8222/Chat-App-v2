import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import './Input.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Input = ({ message, setMessage, sendMessage }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [convertedContent, setConvertedContent] = useState(null);

	const handleEditorChange = (state) => {
		setEditorState(state);
	};

	useEffect(() => {
		let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
		setMessage(currentContentAsHTML);
		setConvertedContent(currentContentAsHTML);
		console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	}, [editorState]);

	return (
		<div>
			<Editor
				toolbarClassName='toolbarClassName'
				editorState={editorState}
				wrapperClassName='demo-wrapper'
				editorClassName='demo-editor'
				onEditorStateChange={handleEditorChange}
			/>
			<button onClick={sendMessage}>SEND</button>
		</div>
	);
};

export default Input;
