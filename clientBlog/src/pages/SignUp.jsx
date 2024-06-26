import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setformData] = useState({});
    // const [errorMessage, setErrorMessage] = useState('');
     const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value.trim() });
    };
    //  console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();
         if (!formData.username || !formData.email || !formData.password) {
             return setErrorMessage('Please fill out all fields.');
            }
        try {
                setLoading(true);
                setErrorMessage(null);
                const res = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                const data = await res.json();
                if (data.success === false) {
                    return setErrorMessage(data.message);
                }
                setLoading(false);
                if(res.ok) {
                    navigate('/sign-in');
                }
                } catch (error) {
                setErrorMessage(error.message);
                setLoading(false);
                }
            };
    return (<div className='min-h-screen mt-20'>
        <div className=' flex p-3 max-w-3xl mx-auto flex-col md:flex-row 
        md:items-center gap-5'>
            {/* guache */}
            <div className='flex-1'>
            <Link to='/' className='whitespace-nowrap 
                text-sm sm:text-xl font-bold dark:text-white'>
                <span className='px-2 py-2 bg-gradient-to-r from-indigo-500
                via-purple-500 to-pink-500 rounded-lg text-white' >BALDEV'S</span>
                Blog
            </Link>
            <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo.</p>
            </div>
            {/* droite */}
            <div className='flex-1'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div>
                       <Label value='Your username'/>
                       <TextInput type='text' placeholder='Username' id='username'
                       onChange={handleChange} />
                    </div>
                    <div>
                       <Label value='Your Email'/>
                       <TextInput type='email' placeholder='name@company.com' id='email'
                       onChange={handleChange} />
                    </div>
                    <div>
                       <Label value='Your Password'/>
                       <TextInput type='password' placeholder='password' id='password'
                       onChange={handleChange} />
                    </div>
                    <Button gradientDuoTone='purpleToPink' type='submit'
                     disabled={loading} >
                {loading ? (
                    <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                    </>
                ) : (
                    'Sign Up'
              )}
                    </Button>
                </form>
                <div className='flex gap-2 text-sm mt-5'>
                    <span>Have an account?</span>
                    <Link className='text-blue-500' to='/singn-in'> Sign In</Link>
                </div>
                  {errorMessage &&  (
                        <Alert className='mt-5 text-red-500' color='failure'>
                        {errorMessage}
                        </Alert>
                    )}
            </div>
        </div>
    </div>);
}
export default SignUp;