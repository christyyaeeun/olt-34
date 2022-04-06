import React from 'react';

export default function Button({
  title, onClick, type = "action"
}) {
  return (
    <button className={(type)} onClick={onClick}>
      { title }
    </button>
  )
}
