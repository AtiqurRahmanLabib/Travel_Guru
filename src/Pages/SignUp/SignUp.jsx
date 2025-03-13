import React, { useContext, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/icons/google.png'
import FacebookLogo from '../../assets/icons/fb.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {

    const { createUser, googleSignIn } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSubmite = (e) => {
        e.preventDefault(); // Prevent form reload
        setError('')
        setSuccess('')
        const form = new FormData(e.target); // e.target refers to the form
        const firstName = form.get('firstName');
        const lastName = form.get('lastName');
        const email = form.get('email');
        const password = form.get('password');

        console.log(firstName, lastName, email, password);
        
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Account created successfully')
                navigate('/home')
            })
        
            .catch(error => {
                console.log(error)
                setError(error.message)
            });

        }
        const handleGoogleSignIn = () => {
            googleSignIn(provider)
            .then(result => {
                console.log(result.user)
                setSuccess('Signin with google successfully')
                navigate('/home')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
        }
    return (
        <div className='items-center justify-center align-middle content-center'>
            <Navbar></Navbar>
            <div className='w-[570px] h-[651px] border border-[#ABABAB] mx-auto items-center align-middle mt-25 rounded-[4px]'>
                <h1 className='font-bold font-montserrat text-[24px] text-[#000000]  top-6 left-11 relative'>Create an account</h1>
                <form onSubmit={handleSubmite}>
                    <div className='mx-auto w-[461px]'>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto mt-22' type="text" name="firstName" id="firstName" placeholder='First name' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='mx-auto w-[461px]'>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto mt-10' type="text" name="LastName" id="LastName" placeholder='Last name' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='mx-auto w-[461px]'>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto mt-10' type="email" name="email" id="email" placeholder='Username or Email' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='mx-auto w-[461px]'>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto mt-10' type="password" name="password" id="password" placeholder='Passwordl' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='mx-auto w-[461px] '>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto mt-10' type="password" name="password" id="password" placeholder='Confirm password' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='mx-auto w-[461px] mt-10'>
                   <div className='mx-auto text-center'>
                   {
                        error && <p className='text-1xl font-bold text-red-500 mt-2'>{String(error)}</p>
                    }
                    {
                        success && <p className='text-1xl font-bold text-green-500 mt-2'>{String(success)}</p>
                    }
                   </div>
                        <button type='submit' onSubmit={handleSubmite} className='bg-[#F9A51A] w-[461px] mt-5 h-[50px] mx-auto ext-[16px] font-medium font-montserrat text-[#000000]'>Create an account</button>
                        <p className='text-[16px] font-montserrat font-medium text-center pt-5'>Already have account?<Link to='/login'><span className='text-[#F9A51A]'>Login</span></Link></p>

                    </div>
                </form>
            </div>
            <div className='flex items-center gap-1 w-[461px] mx-auto mt-5'>
                <hr className='w-[200px] border-[#AAAAAA]' />
                <p className='text-[16px] font-medium font-montserrat'>Or</p>
                <hr className='w-[200px] border-[#AAAAAA]' />
            </div>
            <div>
                <div className='flex w-[461px] h-[51px] rounded-[57px] border-[#C7C7C7] border mx-auto mt-5 items-center gap-24 pl-8'>
                    <img className='w-[31px] h-[31px]' src={FacebookLogo} alt="" />
                    <h1 className=''>Contineo with Facebook</h1>
                </div>
                <button onClick={handleGoogleSignIn} className='flex w-[461px] h-[51px] rounded-[57px] border-[#C7C7C7] border cursor-pointer mx-auto mt-5 items-center gap-24 pl-8'>
                    <img  className='w-[31px] h-[31px]' src={GoogleLogo} alt="" />
                    <h1 className=''>Contineo with Google</h1>
                </button>
            </div>
        </div>
    );
};

export default SignUp;