import BannerEthernet from './bannercomp/bannerethernet';
import CategoriesEthernet from './categoriescomp/categoriesethernet';
import DeploymentEthernet from './deploymentcomp/deploymentethernet';
import DomeEthernet from './domecomp/domeethernet';
import RouteCAMEthernet from './routecamcomp/routecamethernet';
import PTZEthernet from './ptzcomp/ptzethernet';
import CTAFooterEthernet from './ctafootercomp/ctafooterethernet';
import './ethernetpage.css';

const EthernetPage = () => {
  return (
    <div className="ethernet-page">
      <BannerEthernet />
      <CategoriesEthernet />
      <DeploymentEthernet />
      <DomeEthernet />
      <RouteCAMEthernet />
      <PTZEthernet />
      <CTAFooterEthernet />
    </div>
  );
};

export default EthernetPage;