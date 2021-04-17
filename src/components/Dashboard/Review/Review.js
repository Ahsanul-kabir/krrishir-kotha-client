import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const Review = () => {
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
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('description', info.description);

        fetch('https://cryptic-island-29877.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Review Posted Successfully!')
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
                <div style={{width: '100%'}} className="col-md-6 mt-5">
                        <h5 className="text-brand">Leave a Review</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="name" defaultValue={loggedInUser.name} placeholder="Your name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="designation" placeholder="Company Name/Designation" className="form-control" />
                            {errors.designation && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" ref={register({ required: false })} placeholder="Description" className="form-control" name="description" id="" cols="10" rows="3"></textarea>
                        </div>                                                
                        <div className="form-group d-flex justify-content-between align-items-center">
                            <input onChange={handleFileChange} ref={register({ required: false })} type="file" style={{ width:'48%'}} className="form-control" name="file" placeholder="Upload project File" id=""/>
                        </div>
                        <div className="form-group text-left">
                            <button type="submit" className="btn main-btn" style={{textTransform: 'uppercase'}}>Send</button>
                        </div>
                    </form>
                </div>                
            </div>
        </div>
    );
};

export default Review;