export default function Navbar(){
    return (
     <div className="navbar w-full d-flex justify-content-between align-items-center">
        <div  className="logo ">
              <img className="logo-image" src="/images/sakura-motors-sm-logo.png" alt="" />
        </div>
        <div className="nav-icons d-flex gap-2 align-items-center">
            <span><img className="h-75" src="/icons/phone.png" alt="" /></span>
            <span><img className="h-75" src="/icons/whatsapp.png" alt="" /></span>
            <span><img className="h-100" src="/icons/profile.png" alt="" /></span>
            <span><img className="h-100" src="/icons/menu.png" alt="" /></span>
        </div>
     </div>
    )
}