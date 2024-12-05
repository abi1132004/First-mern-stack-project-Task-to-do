// import { useEffect, useState } from "react"

// export default function Todo() {
//     const [title, setTitle] = useState("");
//     const [description, setDesciption] = useState("");
//     const [todos, setTodos] = useState([]);
//     const [error, setError] = useState("");
//     const [message, setMessage] = useState("");
//     const [editId, setEditId] = useState(-1);

//     // Edit
//     const [editTitle, setEditTitle] = useState("");
//     const [editDescription, setEditDesciption] = useState("");

//     const apiUrl = "http://localhost:8000"
    
//     const handleSubmit = () => {
//         setError("")
//         //check inputs
//         if (title.trim() !== '' && description.trim() !== '') {
//             fetch(apiUrl+"/todos", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type':'application/json'
//                 },
//                 body: JSON.stringify({title, description})
//             }).then((res) => {
//                 if (res.ok) {
//                     //add item to list
//                     setTodos([...todos, {title, description}])
//                     setTitle("");
//                     setDesciption("");
//                     setMessage("Item added successfully")
//                     setTimeout(() => {
//                         setMessage("");
//                     },3000)
    
//                 }else {
//                     //set error
//                     setError("Unable to create Todo item")
//                 }
//             }).catch(() => {
//                 setError("Unable to create Todo item")
//             })
//         }
//     }

//     useEffect(() => {
//         getItems()
//     }, [])

//     const getItems = () => {
//         fetch(apiUrl+"/todos")
//         .then((res) => res.json())
//         .then((res) => {
//             setTodos(res)
//         })
//     }

//     const handleEdit = (item) => {
//         setEditId(item._id); 
//         setEditTitle(item.title); 
//         setEditDesciption(item.description)
//     }

//     const handleUpdate = () => {
//         setError("")
//         //check inputs
//         if (editTitle.trim() !== '' && editDescription.trim() !== '') {
//             fetch(apiUrl+"/todos/"+editId, {
//                 method: "PUT",
//                 headers: {
//                     'Content-Type':'application/json'
//                 },
//                 body: JSON.stringify({title: editTitle, description: editDescription})
//             }).then((res) => {
//                 if (res.ok) {
//                     //update item to list
//                     const updatedTodos = todos.map((item) => {
//                         if (item._id === editId) {
//                             item.title = editTitle;
//                             item.description = editDescription;
//                         }
//                         return item;
//                     })

//                     setTodos(updatedTodos)
//                     setEditTitle("");
//                     setEditDesciption("")
//                     setMessage("Task updated successfully")
//                     setTimeout(() => {
//                         setMessage("");
//                     },3000)

//                     setEditId(-1)
    
//                 }else {
//                     //set error
//                     setError("Unable to create Todo item")
//                 }
//             }).catch(() => {
//                 setError("Unable to create Todo item")
//             })
//         }
//     }

//     const handleEditCancel = () => {
//         setEditId(-1)
//     }

//     const handleDelete = (id) => {
//         if (window.confirm('Are you sure want to delete?')) {
//             fetch(apiUrl+'/todos/'+id, {
//                 method: "DELETE"
//             })
//             .then(() => {
//                const updatedTodos = todos.filter((item) => item._id !== id)
//                setTodos(updatedTodos)
//             })
//         }
//     }

//     return <>
//         <div className="row p-5 bg-secondary text-light">
//             <h1>Task to Do Project</h1><br/>
//         </div>
//         <div className="row">
//             <h3>Add Tasks</h3>
//             {message && <p className="text-success">{message}</p>}
//             <div className="form-group border border-gray-300 rounded-md p-5 w-1">
//                 <br/><input placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" type="text" /><br/>
//                 <input placeholder="Description" onChange={(e) => setDesciption(e.target.value)} value={description} className="form-control" type="text" /><br/>
//                 <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>                <br/>
//             </div>
//            {error && <p className="text-danger">{error}</p>}
//         </div>
//         <div className="row mt-3">
//             <h3>Tasks</h3>
//             <div className="col-md-6">

//                 <ul className="list-group">
//                     { 
//                     todos.map((item) =>  <li className="list-group-item bg-info d-flex justify-content-between align-items-center my-2">
//                     <div className="d-flex flex-column me-2">
//                         {
//                             editId === -1 || editId !==  item._id ? <>
//                                 <span className="fw-bold">{item.title}</span>
//                                 <span>{item.description}</span>
//                             </> : <>
//                             <div className="form-group d-flex gap-2">
//                                 <input placeholder="Title" onChange={(e) => setEditTitle(e.target.value)} value={editTitle} className="form-control" type="text" /><br/>
//                                 <input placeholder="Description" onChange={(e) => setEditDesciption(e.target.value)} value={editDescription} className="form-control" type="text" />
//                             </div>
//                             </>
//                         }
                    

//                     </div>
//                     <div className="d-flex gap-2">
//                         { editId === -1 ?<button className="btn btn-warning" onClick={() => handleEdit(item)} >Edit</button>:<button className="btn btn-warning" onClick={handleUpdate} >Update</button>}
//                         { editId === -1 ? <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button> :
//                         <button className="btn btn-danger" onClick={handleEditCancel}>Cancel</button> }
//                     </div>
//                 </li>
                
//                 )
//                     }
                
                
//                 </ul>
//             </div>
//         </div>
//     </>
    
// }
import { useEffect, useState } from "react";
import TaskList from "./TaskList";

export default function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDesciption] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [editId, setEditId] = useState(-1);

    // Edit
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDesciption] = useState("");

    const apiUrl = "http://localhost:8000";
    
    const handleSubmit = () => {
        setError("");
        if (title.trim() !== '' && description.trim() !== '') {
            fetch(apiUrl + "/todos", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            })
                .then((res) => {
                    if (res.ok) {
                        setTodos([...todos, { title, description }]);
                        setTitle("");
                        setDesciption("");
                        setMessage("Item added successfully");
                        setTimeout(() => {
                            setMessage("");
                        }, 3000);
                    } else {
                        setError("Unable to create Todo item");
                    }
                })
                .catch(() => {
                    setError("Unable to create Todo item");
                });
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        fetch(apiUrl + "/todos")
            .then((res) => res.json())
            .then((res) => {
                setTodos(res);
                setMessage("Items fetched successfully!");
                setTimeout(() => setMessage(""), 3000);
            })
            .catch(() => setError("Unable to fetch items"));
    };

    const handleEdit = (item) => {
        setEditId(item._id);
        setEditTitle(item.title);
        setEditDesciption(item.description);
    };

    const handleUpdate = () => {
        setError("");
        if (editTitle.trim() !== '' && editDescription.trim() !== '') {
            fetch(apiUrl + "/todos/" + editId, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: editTitle, description: editDescription }),
            })
                .then((res) => {
                    if (res.ok) {
                        const updatedTodos = todos.map((item) => {
                            if (item._id === editId) {
                                item.title = editTitle;
                                item.description = editDescription;
                            }
                            return item;
                        });
                        setTodos(updatedTodos);
                        setEditTitle("");
                        setEditDesciption("");
                        setMessage("Task updated successfully");
                        setTimeout(() => {
                            setMessage("");
                        }, 3000);
                        setEditId(-1);
                    } else {
                        setError("Unable to update Todo item");
                    }
                })
                .catch(() => {
                    setError("Unable to update Todo item");
                });
        }
    };

    const handleEditCancel = () => {
        setEditId(-1);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            fetch(apiUrl + '/todos/' + id, { method: "DELETE" })
                .then(() => {
                    const updatedTodos = todos.filter((item) => item._id !== id);
                    setTodos(updatedTodos);
                });
        }
    };

    return (
        <>
            <div className="row p-5 bg-secondary text-light">
                <h1>Task to Do Project</h1>
            </div>
            <div className="row">
                <h3>Add Tasks</h3>
                {message && <p className="text-success">{message}</p>}
                <div className="form-group border border-gray-300 rounded-md p-5 w-1">
                    <input
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="form-control"
                        type="text"
                    />
                    <br />
                    <input
                        placeholder="Description"
                        onChange={(e) => setDesciption(e.target.value)}
                        value={description}
                        className="form-control"
                        type="text"
                    />
                    <br />
                    <button className="btn btn-dark" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                {error && <p className="text-danger">{error}</p>}
            </div>
            <div className="row mt-3">
                <h3>Tasks</h3>
                <button className="btn btn-primary mb-5 mt-7" onClick={getItems}>
                    Fetch Items
                </button>
                <TaskList
                    todos={todos}
                    editId={editId}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    handleEditCancel={handleEditCancel}
                    editTitle={editTitle}
                    setEditTitle={setEditTitle}
                    editDescription={editDescription}
                    setEditDesciption={setEditDesciption}
                />
            </div>
        </>
    );
}
