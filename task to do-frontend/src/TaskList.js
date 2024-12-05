import React from 'react';

export default function TaskList({ todos, editId, handleEdit, handleDelete, handleUpdate, handleEditCancel, editTitle, setEditTitle, editDescription, setEditDesciption }) {
    return (
        <div className="col-md-6">
            <ul className="list-group">
                {todos.map((item) => (
                    <li key={item._id} className="list-group-item bg-info d-flex justify-content-between align-items-center my-2">
                        <div className="d-flex flex-column me-2">
                            {editId === -1 || editId !== item._id ? (
                                <>
                                    <span className="fw-bold">{item.title}</span>
                                    <span>{item.description}</span>
                                </>
                            ) : (
                                <div className="form-group d-flex gap-2">
                                    <input
                                        placeholder="Title"
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        value={editTitle}
                                        className="form-control"
                                        type="text"
                                    />
                                    <input
                                        placeholder="Description"
                                        onChange={(e) => setEditDesciption(e.target.value)}
                                        value={editDescription}
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="d-flex gap-2">
                            {editId === -1 ? (
                                <button className="btn btn-warning" onClick={() => handleEdit(item)}>
                                    Edit
                                </button>
                            ) : (
                                <button className="btn btn-warning" onClick={handleUpdate}>
                                    Update
                                </button>
                            )}
                            {editId === -1 ? (
                                <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            ) : (
                                <button className="btn btn-danger" onClick={handleEditCancel}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
