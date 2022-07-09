import React from "react";

interface FormComponentProps {
  handleSubmit: (event: any) => void
}

const FormComponent: React.FC<FormComponentProps> = (props) => {

  return (
    <div className="form">
      <h3>Create New Blogs</h3>

      <div>
        <form onSubmit={props.handleSubmit}>
          <label>Blog Name</label>
          <input type="text" id="nameField" placeholder="Name of your blog.." />

          <label>Blog Content</label><br />
          <textarea id="contentField" placeholder="Write your blog here.." />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
