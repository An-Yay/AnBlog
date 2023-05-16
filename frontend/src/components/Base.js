import CustomNavbar from "./Navbar/CustomNavbar";

const Base=({title="Welcome to My Blogs", children})=>{

      return(
            <div className="container-fluid">
                  <CustomNavbar/>

                  {children}
                  <h1>This is footer</h1>
            </div>

      );
};

export default Base;
