import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Service Added Successfully!')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Topbar></Topbar>
                <div style={{width: '100%', background: '#F5F6FA', borderRadius: '10px', padding: '30px 50px'}} className="col-md-6 mt-5">
                        <h5 className="text-brand">Add a Service</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="title" placeholder="Service Title" className="form-control" />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" ref={register({ required: false })} placeholder="Description" className="form-control" name="description" id="" cols="10" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file">Icon</label>
                            <input onChange={handleFileChange} ref={register({ required: false })} type="file" style={{ width:'48%'}} className="form-control" name="file" placeholder="Upload project File" id=""/>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn main-btn" style={{textTransform: 'uppercase'}}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;