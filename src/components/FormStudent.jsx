import { useState } from 'react';

function FormStudent() {
  const [students, setStudents] = useState([]);

  const [formStudent, setFormStudent] = useState({});
  // [1,2,3] <=> [{...},{...},{...}]

  // lấy thông tin từ form
  const handleChangeForm = (e) => {
    console.dir(e.target);
    const { name, value } = e.target;
    console.log('name = ' + name + ' value = ' + value);

    setFormStudent({ ...formStudent, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    setStudents([...students, formStudent]);
  };

  return (
    <>
      <form action="" onSubmit={handleAddStudent}>
        {console.log(formStudent)}
        <div>
          <label htmlFor="">NAME</label>
          <input type="text" name="fullName" onChange={handleChangeForm} />
        </div>
        <div>
          <label htmlFor="">AGE</label>
          <input type="text" name="age" onChange={handleChangeForm} />
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input type="text" name="gender" onChange={handleChangeForm} />
        </div>
        <button>ADD</button>
      </form>
      {JSON.stringify(students)}
    </>
  );
}

export default FormStudent;
