import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
     
        <header className='flex justify-between p-4 mx-4 border-b-2'>
            <h1 className=' text-3xl '>Knowlodge Cafe</h1>
            <img src={profile} alt="" />
            </header>
      
    );
};

export default Header;