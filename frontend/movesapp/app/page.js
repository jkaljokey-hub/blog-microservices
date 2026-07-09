
import First from "./component/First/First";
import Footer from "./component/Footer/Footer";
import RootTrand from "./component/RooTrand/page";
import MoreReason from "./component/MoreReason/MoreReason";
import ApiInfo from "./component/ApiInfo/ApiInfo";
export default function Page() {
  return (
    <>
    <div className="bg-black" >
        <First/>
       
    <RootTrand/>
    <MoreReason/>
    
   	<ApiInfo/>
        <Footer/> 
       
</div>
    </>
  )
}




