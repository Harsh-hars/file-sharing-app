import React, { useEffect, useRef, useState } from 'react'
import { uploadfile } from './api/api';

const App = () => {
    const fileinput_ref = useRef();
    const [file, Setfile] = useState()
    const [result, setResult] = useState('');

    const openfile = () => {
        fileinput_ref.current.click()
    }

    useEffect(() => {

        // here get image is use to store the information of file ie. filename and the whole file
        const getimage = async () => {

            // here formdata is use to store theb file info 
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadfile(data);
                setResult(response.path);
            }
        }

        getimage();
      
    }, [file])


    return (
        <div className='flex h-screen w-full overflow-hidden'>

            <div className='h-screen overflow-hidden'>
                <img className='h-screen w-[55vw]' alt='sry' src="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg" />
            </div>

            <div className='h-screen w-[100vw] bg-slate-900 flex justify-center items-center'>
                <div className='bg-zinc-500 h-[70%] w-[70%] p-3 text-center rounded-md flex flex-col gap-3 items-center'>
                    <h2 className=' font-semibold text-4xl mb-3'>Simple File Sharing</h2>

                    <input ref={fileinput_ref} type='file' className='hidden' onChange={(e) => { Setfile(e.target.files[0]) }}></input>

                    <button className='mb-3 bg-blue-600 p-2' onClick={() => { openfile() }} >upload</button>

                    <a href={result} target='_blank' rel='noreferer'>{result}</a>
                    {console.log({result})}


                </div>

            </div>
        </div>
    )
}

export default App
