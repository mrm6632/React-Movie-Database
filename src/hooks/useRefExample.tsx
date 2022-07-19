// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// This example is paired with useRefExample

import { useRef } from "react";

const RefExample = () => {
  const handleSubmit = (
    nameField: HTMLInputElement | null,
    contentField: HTMLTextAreaElement | null
  ) => {
    if (nameField && contentField) {
      const name = nameField.value;
      const content = contentField.value;
      if (name && content) {
        const newBlog = { name, content };
        console.log(newBlog);

        nameField.value = "";
        contentField.value = "";
      }
    }
  };

  const nameRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(nameRef.current, contentRef.current);
        }}
      >
        <label>Blog Name</label>
        <input type="text" ref={nameRef} placeholder="Name of your blog.." />

        <label>Blog Content</label>
        <br />
        <textarea
          ref={contentRef}
          className="contentField"
          placeholder="Write your blog here.."
        />

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default RefExample;
