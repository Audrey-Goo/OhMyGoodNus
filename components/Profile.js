/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
    CogIcon
} from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
//import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
//import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { PlayIcon, BookmarkIcon } from '@heroicons/react/outline';

const Profile = () => {
    return (
        <div className = "max-w-6xl mx-5 p-10 xl:mx-auto">
            <div className="grid grid-cols-4 gap-4"
            >
                <div className='avatar'>
                    <div className='rounded-full w-36 h-36'>
                        <img src='https://daisyui.com/
                        tailwind-css-component-profile-1@94w.png' /> 
                    </div>
                </div>
                <div className='col-span-2'>
                    <span className='text-gray-700 text-2xl mr-4'>Ckmobile</span>
                    <div className='cursor-pointer inline text-sm text-gray-700
                    font-semibold p-1 px-2 border border-gray-200 rounded mr-4'>Edit 
                    Profile</div>
                    <CogIcon className='cursor-pointer h-6 inline flex-1' />
                    <div className='mt-4 flex'>
                        <div><span className='font-semibold'>200</span> posts</div>
                        <div className='ml-4'><span className='font-semibold'>200</span> followers</div>
                        <div className='m1-4'><span className='font-semibold'>200</span> following</div>
                    </div>
                    <div >
                        <div className='  pt-3'>
                        <span className='text-lg font-semibold text-gray-700'>ckmobile javascript</span>
                        </div>
                        <div className='  pt-3'>
                            <p className='text-base text-blue-700 mr-2'>#javascript #vuehs #reader #blogger #digitalmarketer</p>
                            <p className='text-base font-medium text-blue-700-mr-2'>https://www.youtube.com/</p>
                        </div>
                    </div>
                </div>




            </div>
            <hr className='border-gray-500 mt-6' />
            <div className='flex justify-center gap-10'>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><FontAwesomeIcon icon ={faGripVertical}size='lg' />POSTS</button>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><PlayIcon className='h-6' />VIDEOS</button>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><BookmarkIcon className='h-6' />SAVED</button>
                <button className='focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><FontAwesomeIcon  icon ={faAddressCard} size='lg' />TAGGED</button>
            </div>
        </div>
    )
}

export default Profile