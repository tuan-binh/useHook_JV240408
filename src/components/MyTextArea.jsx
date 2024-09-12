import { useState } from 'react';

export default function MyTextArea() {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea style={{ resize: 'none' }} name="" id="" onChange={(e) => setText(e.target.value)}>
        {text}
      </textarea>
      <p>{text.length} ký tự</p>
    </div>
  );
}
