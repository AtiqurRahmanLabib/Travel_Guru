import React, { useContext, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/icons/google.png'
import FacebookLogo from '../../assets/icons/fb.png'
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = () => {
        e.preventDefault(); // Prevent form reload
        setError('')
        setSuccess('')
        const form = new FormData(e.target); // e.target refers to the form
        const email = form.get('email');
        const password = form.get('password');
        console.log(firstName, lastName, email, password);
        login(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login successfully')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    return (
        <div className='items-center justify-center align-middle content-center]'>
            <Navbar></Navbar>
            <div className='w-[570px] h-[457px] border border-[#ABABAB] mx-auto items-center align-middle mt-25 rounded-[4px]'>
                <h1 className='font-bold font-montserrat text-[24px] text-[#000000]  top-6 left-11 relative'>Login</h1>
                <form action="submit">
                    <div className='mx-auto w-[461px] mt-22'>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto' type="text" name="email" id="email" placeholder='Username or Email' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='mx-auto w-[461px] mt-10'>
                        <input className='text-[16px] font-medium font-montserrat text-[#000000 ] w-[461px] mx-auto' type="password" name="password" id="password" placeholder='password' />
                    </div>
                    <hr className='w-[461px] mx-auto border-[#C5C5C5]' />
                    <div className='flex gap-2 mx-auto mt-5 w-[461px] justify-between'>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" placeholder='' />
                            <h1 className='text-[16px] font-medium font-montserrat'>remamber me</h1>
                        </div>
                        <h1 className='underline text-[16px] font-medium font-montserrat text-[#F9A51A] cursor-pointer'>Forget password</h1>
                    </div>
                    <div className='mx-auto w-[461px] mt-5'>
                        <button type='submit' onClick={handleSubmit} className='bg-[#F9A51A] w-[461px] h-[50px] mx-auto ext-[16px] font-medium font-montserrat text-[#000000] cursor-pointer'>Login</button>
                        <p className='text-[16px] font-montserrat font-medium text-center pt-5'>Don't have an account? <Link to='/signup'><span className='text-[#F9A51A]'>create an account</span></Link></p>
                    </div>
                </form>
            </div>
            <div className='flex items-center gap-1 w-[461px] mx-auto mt-5'>
                <hr className='w-[200px] border-[#AAAAAA]' />
                <p className='text-[16px] font-medium font-montserrat'>Or</p>
                <hr className='w-[200px] border-[#AAAAAA]' />
            </div>
            <div>
                <div className='cursor-pointer flex w-[461px] h-[51px] rounded-[57px] border-[#C7C7C7] border mx-auto mt-5 items-center gap-24 pl-8'>
                    <img className='w-[31px] h-[31px]' src={FacebookLogo} alt="" />
                    <h1 className=''>Contineo with Facebook</h1>
                </div>
                <div className='cursor-pointer flex w-[461px] h-[51px] rounded-[57px] border-[#C7C7C7] border mx-auto mt-5 items-center gap-24 pl-8'>
                    <img className='w-[31px] h-[31px]' src={GoogleLogo} alt="" />
                    <h1 className=''>Contineo with Google</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;