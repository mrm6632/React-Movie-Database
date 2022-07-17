import React, { useRef } from "react";

interface FormComponentProps {
  handleSubmit: (nameField: HTMLInputElement | null, contentField: HTMLTextAreaElement | null) => void
}

const FormComponent: React.FC<FormComponentProps> = (props) => {

  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="form">
      <h3>Create New Blogs</h3>

      <div>
        <form onSubmit={event => {
          event.preventDefault();
          props.handleSubmit(nameRef.current, contentRef.current)
        }}>
          <label>Blog Name</label>
          <input type="text" ref={nameRef} placeholder="Name of your blog.." />

          <label>Blog Content</label><br />
          <textarea ref={contentRef} className="contentField" placeholder="Write your blog here.." />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
