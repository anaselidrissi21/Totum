import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './createActivity.scss';
import axios from '../../utils/axiosPool';

function CreateActivity({
    ...rest
}){
    const [ categories, setCategories] = React.useState([]);
    const userId = localStorage.getItem("id");
    const [activity, setActivity] = React.useState({
        name: "",
        description: "",
        max_participants: "",
        date: "",
        level: "",
        address: "",
        zip_code: "",
        city: "",
        country: "",
        landmark: "landmarkFake",
        id_user: userId,// localStorage.getItem(user.id)
        id_category: "" //requete get pour créer un select
    });
    
    
    useEffect(() => {   
       // setCategories (getCategories());   
        //console.log(categories);   
        //categories.forEach(category => console.log(category.name))
       console.log('rien');
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios({
                method:'get',
                url:'/category/categories'
            })
            
            setCategories(response.data);
            //const categoriesNames = categories.map(category => {return category.name});
           // return categories;
           // return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = e =>{
        const { name, value } = e.target;
        setActivity(previousActivity => ({
            ...previousActivity,
            [name]: value
        }));
        console.log(activity)
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const response = await axios({
                method:'post',
                url:'/activity/createNew',
                body:{activity}
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        console.log(`new activity object${activity}`)
    }
/*
    const categoriesNames = (myCategories) => {
        myCategories.forEach(category => {
            console.log (category.name);
        })
    }
*/
   return (
       <form
           className={'createActivity'}
           {...rest}
           onSubmit={handleSubmit}
       >
           {/**
            * input activité
            * input lieu
            * input nbre participants
            * input nbre invités
            * input date
            * input niveau
            * textarea description
            */}
            <div className='field'>
                <label className='label'>Activité</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    placeholder='intitulé'
                    name='name' 
                    value={activity.name} 
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Catégorie</label>
                <div className='select'>
                    <select 
                    className='input' 
                    type='text' 
                    placeholder='intitulé'
                    name='id_category' 
                    value={activity.id_category} 
                    onChange={handleChange}
                    >
                        <option value='1'>truc</option>
                        <option value='2'>truc</option>
                        <option value='3'>truc</option>
                        {/*categories.map(category => (
                        <option>{category.name}</option>             
                        )
                        )*/}
                    </select>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Adresse</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    placeholder='addresse'
                    name='address'
                    value={activity.address}
                    onChange={handleChange}
                    />
                </div>
            
                <label className='label'>Ville</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    placeholder='ville' 
                    name='city'
                    value={activity.city}
                    onChange={handleChange}
                    />
                </div>
        
                <label className='label'>Code Postal</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    placeholder='code postal'
                    name='zip_code'
                    value={activity.zip_code}
                    onChange={handleChange}
                     />
                </div>
            </div>
            {/*<div className='field is-grouped'>
                <label className='label'>Nombre de participants</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    placeholder='Nombre de participants'
                    />
                </div>
                <label className='label'>Invités</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text'
                    />
                </div>
        </div>*/}
            <div className='field'>
                <label className='label'>Date</label>
                {/*Find a calendar module */}
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    name='date'
                    value={activity.date}
                    onChange={handleChange} 
                    />
                </div>
            </div>
            <div className='field'>
                {/*might be a select and give options according to ux */}
                <label className='label'>Niveau</label>
                <div className='control'>
                    <input 
                    className='input' 
                    type='text' 
                    name='level'
                    value={activity.level}
                    onChange={handleChange} 
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                    <textarea 
                    className='textarea' 
                    type='text' 
                    name='description'
                    placeholder='Description' 
                    value={activity.description}
                    onChange={handleChange} 
                    />
                </div>
            </div>
            <div className='field is-grouped'>
                <p className='control'>
                    {/*redirect to the activity page */}
                    <button 
                    className='button is-primary'
                    type='submit'
                    >
                    Submit
                    </button>
                </p>
                <p className='control'>
                    {/*redirect to root */}
                    <button 
                    className='button is-light'
                    >
                    Cancel
                    </button>
                </p>
            </div>

       </form>
   );
};

CreateActivity.propTypes = {
    className: PropTypes.string,
};
CreateActivity.defaultProps = {
    className: '',
};
export default CreateActivity;
