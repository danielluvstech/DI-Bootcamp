import React, { useId, useState } from "react";

type BookFormProps = {
  onAdd: (title: string, author: string) => void;
};

export default function BookForm({ onAdd }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const titleId = useId();
  const authorId = useId();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd(title.trim(), author.trim());
    setTitle("");
    setAuthor("");
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="field">
        <label htmlFor={titleId}>Title</label>
        <input
          id={titleId}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="The Pragmatic Programmer"
          required
        />
      </div>

      <div className="field">
        <label htmlFor={authorId}>Author</label>
        <input
          id={authorId}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Andrew Hunt, David Thomas"
          required
        />
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
}