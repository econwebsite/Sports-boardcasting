import React, { useRef, useState } from 'react';
import InteractiveImage from './InteractiveImage';
import CategorySection from './CategorySection';
import { CategoryProps } from './types';

const BigImageWithCategories: React.FC = () => {
  // Refs for scrolling
  const point1Ref = useRef<HTMLDivElement>(null);
  const point2Ref = useRef<HTMLDivElement>(null);
  const point3Ref = useRef<HTMLDivElement>(null);

  // Blink state
  const [blink, setBlink] = useState({ point1: false, point2: false, point3: true });

  const handlePointClick = (point: string) => {
    if (point === 'point3') {
      setBlink({ point1: false, point2: true, point3: false });
      point2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (point === 'point2') {
      setBlink({ point1: true, point2: false, point3: false });
      point1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (point === 'point1') {
      setBlink({ point1: false, point2: false, point3: true });
      point3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Data for each category
  const categories: CategoryProps[] = [
    {
      id: 'point-3',
      title: 'Swing Analysis Cameras',
      description:
        'Capture every detail of your swing, review it in slow motion, and gain the insights you need to perfect your technique and boost your performance. Our cameras provide the precision and clarity needed to track and analyze your swing history over time...',
      features: [
        '<b>Global Shutter for Perfect Motion Capture:</b> Eliminates motion blur for sharp, clear images.',
        '<b>Resolution:</b> Full HD (1920*1080P)',
        '<b>Frame rate:</b> 120 FPS',
        '<b>USB 3.1 High-Speed Interface:</b> Driverless, plug-and-play setup.',
        '<b>Versatile Optics:</b> Multiple lens options to match your desired field of view and working distance.',
      ],
      images: [
        'https://www.e-consystems.com/images/golf-simulator/golf-swing-analysis-with-fov-img.jpg',
        'https://www.e-consystems.com/images/golf-simulator/golf-swing-analysis-image.jpg',
      ],
      productImages: [
        'https://www.e-consystems.com/images/golf-simulator/full-hd-global-shutter-color-camera-with-enclosure-thumb.png',
        'https://www.e-consystems.com/images/golf-simulator/full-hd-global-shutter-color-camera-with-typec-connector-thumb.png',
      ],
      productLinks: [
        '/industrial-cameras/ar0234-usb3-global-shutter-camera.asp',
        '/industrial-cameras/ar0234-usb3-global-shutter-camera.asp',
      ],
      datasheetLink: '/doc-2mp-global-shutter-color-camera.asp',
      buyNowLink: '/order-now/see3cam_24cug.asp#see3cam24cug',
      contactLink: '#',
    },
    {
      id: 'point-2',
      title: 'Ceiling Cameras/Simulator Cameras',
      description:
        'Our high-speed cameras are designed to capture and analyze club and ball dynamics with unparalleled precision. Mounted on ceilings or integrated into floor-based devices, these cameras track key metrics such as speed, angle, distance, spin etc., providing critical inputs to simulator software for accurate performance analysis and improvement.',
      features: [
        'High Speed Global Shutter Camera',
        'Frame rate up to 1100fps with Custom ROI*',
        'Color & Monochrome Options',
        'Supports Multi Camera Synchronization',
        'Supports embedded platforms such as NVIDIA, NXP, Qualcomm and more.',
      ],
      images: [
        'https://www.e-consystems.com/images/golf-simulator/overhead-simulator-image.jpg',
        'https://www.e-consystems.com/images/golf-simulator/ball-dynamics-image.jpg',
      ],
      productImages: [
        'https://www.e-consystems.com/images/golf-simulator/5mp-imx568-global-shutter-color-camera-for-nvidia-jetosn-orin-nx-thumb.png',
        'https://www.e-consystems.com/images/golf-simulator/5mp-imx264-color-usb-camera-thumb.png',
        'https://www.e-consystems.com/images/golf-simulator/5mp-high-sensitivity-fixed-focus-camera-thumb.png',
      ],
      productLinks: [
        '/nvidia-cameras/jetson-orin-nx-cameras/5mp-imx568-global-shutter-camera.asp',
        '/sony-imx264-camera.asp',
        '/sony-imx264-camera.asp',
      ],
      contactLink: '#',
      showContactOnly: true,
    },
    {
      id: 'point-1',
      title: 'Cameras for Launch Monitors',
      description:
        'Launch monitors are portable, compact, and battery-powered devices typically used to capture golf trajectory information, especially in outdoor play areas. They utilize radar, cameras, or a combination of both to measure key metrics such as ball speed, launch angle, and distance. This data provides valuable feedback to help improve your game.',
      features: [
        'High Resolution Autofocus and Fixed Focus Cameras',
        'USB & MIPI Interface',
        'Supports embedded platforms such as NVIDIA, NXP, Qualcomm and more',
        '<b>13MP Auto focus Camera</b> <a href="/13mp-autofocus-usb-camera.asp" target="_blank" style="font-weight: normal;">click here »</a>',
        '<b>20MP Fixed focus Camera</b> <a href="/usb-cameras/ar2020-20mp-high-resolution-camera.asp" target="_blank" style="font-weight: normal;">click here »</a>',
      ],
      images: ['https://www.e-consystems.com/images/golf-simulator/launch-monitor-golfing-image.jpg'],
      productImages: [
        'https://www.e-consystems.com/images/See3cam/See3CAM_130/Thumb-See3CAM_130.png',
        'https://www.e-consystems.com/images/eCAM/e-CAM131_IMX8/13mp-mipiimx8m-camera-board-thumb.png',
        'https://www.e-consystems.com/images/see3cam/See3CAM_CU200/20mp-ar2020-onsemi-usb-lowlight-camera-thumb.png',
      ],
      productLinks: [
        '/13mp-autofocus-usb-camera.asp',
        '/toradex/13mp-camera-for-imx8-quad-max.asp',
        '/usb-cameras/ar2020-20mp-high-resolution-camera.asp',
      ],
      // No datasheet/buy now for this category; only features list
    },
  ];

  return (
    <div className="col-lg-12 d-lg-flex flex-column align-items-center text-justify mb-3">
      <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12 text-justify d-lg-flex justify-content-between flex-row align-items-start markets-sections flex-wrap">
        <div className="col-sm-12 col-lg-12 col-md-12 col-xl-12 d-lg-flex justify-content-center align-items-center">
          <InteractiveImage onPointClick={handlePointClick} blinkState={blink} />
        </div>
      </div>

      {/* Category sections with refs */}
      <div ref={point3Ref}>
        <CategorySection {...categories[0]} />
      </div>
      <div ref={point2Ref}>
        <CategorySection {...categories[1]} />
      </div>
      <div ref={point1Ref}>
        <CategorySection {...categories[2]} />
      </div>
    </div>
  );
};

export default BigImageWithCategories;