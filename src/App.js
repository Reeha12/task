import DentalCare from "./Component/dentalCare";
import Financailly from "./Component/financailly";
import Footer from "./Component/footer";
import FooterBorder from "./Component/footerBorder";
import Headers from "./Component/headers";
import JoinUs from "./Component/joinUs";
import Neutration from "./Component/neutration";
import PageTitle from "./Component/pageTitle";
import SavePets from "./Component/savePets";
import Thanks from "./Component/thanks";

function App() {
  return (
    <div>
      <Headers />
      <PageTitle />
      <SavePets />
      <DentalCare />
      <Neutration />
      <Financailly />
      <JoinUs />
      <Thanks />
      <Footer />
      <FooterBorder />
    </div>
  );
}

export default App;
