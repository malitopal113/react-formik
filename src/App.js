import logo from './logo.svg';
import {useFormik} from 'formik'
import { FaCpanel } from 'react-icons/fa';
import validation from './validation';


function App() {
  const {handleChange,handleSubmit, values,errors, touched, handleBlur} = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      checkboxRemember: '',
    },
    onSubmit: values => {
        console.log(values);
        // you can see all entries in console :)
        alert('Giriş başarılı :)')
    },
    validationSchema: validation
  });
  return (
    <main className='flex items-center justify-center h-screen bg-slate-300'>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <div className='bg-slate-400 w-96 p-6 rounded shadow-sm'>
              <div className='flex items-center justify-center'>
                <FaCpanel  className='text-orange-500 text-9xl animate-pulse' />
              </div>
              

              <label className='label'>Email</label>
              <input 
                className='input'
                name='email'
                type='email'
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                placeholder='malitopal113@gmail.com'
                 />

                 {errors.email && touched.email && <div className='error'>{errors.email}</div>}

              <label className='label'>Password</label>
              <input 
                className='input'
                name='password'
                type='password'
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                placeholder='*******'

                 />

                  {errors.password && touched.password && <div className='error'>{errors.password}</div>}
                

              <label className='label'>Confirm Password</label>
              <input 
                className='input'
                name='confirmPassword'
                type='password'
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur} 
                placeholder='*******'
                   />
                 {errors.confirmPassword && touched.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}

                 <input 
                
                name='checkboxRemember'
                type='checkbox'
                onChange={handleChange}
                value={values.checkboxRemember}
                onBlur={handleBlur} 
                className="w-3 mr-2  h-3 peer border rounded-sm focus:outline-none
                checked:bg-gray-500 "
                   />
                <label className='text-gray-900 font-semibold text-xl mb-8'>Remember me</label>

              <button type='submit' className='button'>
                Login</button>
            


            </div> 
            

        </form>
    </main>
    
  );
}

export default App;
