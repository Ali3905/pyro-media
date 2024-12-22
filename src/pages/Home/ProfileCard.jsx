import { Heart } from 'lucide-react'
import React from 'react'
// import { useNavigate, Link } from 'react-router-dom'

const ProfileCard = ({ creator }) => {
    // const navigate = useNavigate()
    console.log({ creator });

    return (
        <div>
            <div className='flex justify-between items-start'>
                {/* <div className='flex flex-col gap-[20px]'> */}
                <img
                    src="https://instagram.fpnq4-1.fna.fbcdn.net/v/t51.2885-19/318204171_213856611049220_467295535015950048_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fpnq4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=jsSfNlkv-KUQ7kNvgH3AsRG&_nc_gid=7b3189ae54d743fd82e058f28a592e9c&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYD9MUd0ewGjml1J3OQKEhsqcwZ6ji677nuesVUKjUKzNA&oe=676E1AAD&_nc_sid=8b3546"
                    alt="profile"
                    height={150}
                    width={150}
                    className='rounded-full border-4 border-white sm:w-[150px] w-[100px] aspect-square'
                />                {/* <p className='bg-[color:var(--green)] px-[10px] py-[5px] font-bold text-[20px] text-[color:var(--sea-green)] cursor-pointer rounded-md'>{(creator?.qualityScore * 100).toFixed(0)} - Excellent</p> */}
                {/* </div> */}
                <div className=''>
                    <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{creator?.name || "Not available"}</p>
                    <p>{creator.categoryInstagram} - {creator.categoryYouTube}</p>
                    <span className='sm:flex gap-[60px] mt-[30px] hidden'>
                        <span>
                            <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{new Intl.NumberFormat("en-US", { notation: 'compact', compactDisplay: 'short' }).format(creator?.userCount)}</p>
                            <p>Followers</p>
                        </span>
                        <span>
                            <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{new Intl.NumberFormat("en-US", { notation: 'compact', compactDisplay: 'short' }).format(creator?.avgLikes || 0)}</p>
                            <p>Average Likes</p>
                        </span>
                        <span>
                            <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{((creator.avgER || 0) * 100).toFixed(2)}</p>
                            <p>Engagement Rate</p>
                        </span>
                    </span>
                </div>
                <div className='flex items-start gap-4'>
                    {/* <button className='border-2 border-[color:var(--green)] px-[20px] py-[5px] rounded-xl h-[50px]'><Link to={creator?.url} target='_blank' >View on instagram</Link></button> */}
                    <button className='border-2 border-[color:var(--green)] px-[20px] py-[5px] rounded-xl h-[50px]'><Heart size={20} color='#169B00' /></button>
                </div>
            </div>
            <span className='flex gap-[60px] mt-[30px] sm:hidden'>
                <span>
                    <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{new Intl.NumberFormat("en-US", { notation: 'compact', compactDisplay: 'short' }).format(creator?.userCount)}</p>
                    <p>Followers</p>
                </span>
                <span>
                    <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{new Intl.NumberFormat("en-US", { notation: 'compact', compactDisplay: 'short' }).format(creator?.avgLikes || 0)}</p>
                    <p>Average Likes</p>
                </span>
                <span>
                    <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>{((creator.avgER || 0) * 100).toFixed(2)}</p>
                    <p>Engagement Rate</p>
                </span>
            </span>
        </div>
    )
}

export default ProfileCard