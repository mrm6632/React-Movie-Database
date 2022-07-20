// Example of manipulating DOM directly instead of using useRef
// This example is paired with useRefExample

const NonRefExample = () => {
  const handleSubmit = () => {
    const nameField =
      (document.getElementById("name") as HTMLInputElement) || undefined;
    const contentField =
      (document.getElementById("content") as HTMLInputElement) || undefined;

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

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <label>Blog Name</label>
        <input type="text" id="name" placeholder="Name of your blog.." />

        <label>Blog Content</label>
        <br />
        <textarea
          id="content"
          className="contentField"
          placeholder="Write your blog here.."
        />

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default NonRefExample;
