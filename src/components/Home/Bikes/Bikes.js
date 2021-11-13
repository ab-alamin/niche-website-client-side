import React from 'react';
import bike1 from '../../../images/bike/bike-1.png'
import bike2 from '../../../images/bike/bike-2.jpg'
import bike3 from '../../../images/bike/bike-3.png'
import bike4 from '../../../images/bike/bike-4.jpg'
import bike5 from '../../../images/bike/bike-5.png'
import bike6 from '../../../images/bike/bike-6.webp'
import bike7 from '../../../images/bike/bike-7.jpg'
import bike8 from '../../../images/bike/bike-8.jpg'
import bike9 from '../../../images/bike/bike-9.jpg'
import bike10 from '../../../images/bike/bike-10.jpg'
import Bike from '../Bike/Bike';

const bikes = [
    {
        img: bike1,
        Details:
         ' 2021 Yamaha MT-10 Hyper Naked Motorcycle.',

    },
    {
        img: bike2,
        Details: ' 2022 Yamaha YZF-R1 Supersport Motorcycle ',

    },
    {
        img: bike3,
        Details: ' 2019 Yamaha R15 V3 new colour options with decals',

    },
    {
        img: bike4,
        Details: 'Yamaha XSR 155, Expected Price Rs. 1,36,000, ',
    },
    {
        img: bike5,
        Details: ' Buy Yamaha Motorcycle & Scooters Online - Yamaha Motor India. Book FZS FI Bike Online | Check FZS FI Price, Colour and Special Features - Yamaha e-shop,',
    },
    {
        img: bike6,
        Details: '  Hindustan Times Auto News .New 2021 Yamaha MT-25, MT-03 launched in Japan, ',
    },
    {
        img: bike7,
        Details: 'Yamaha Motorcycles: Reviews, Prices, Photos and Videos - Motorcycle.com, ',
    },
    {
        img: bike8,
        Details: ' Is Yamaha Planning To Use The MT-07 Engine For An R7 Supersport, ',
    },
    {
        img: bike9,
        Details: `4:25
        YouTube
        New Yamaha XSR155 2021
        Watch
        Uploaded by: MoToBike, Mar 24, 2021
        546K Views·4.94K Likes
        New Yamaha XSR155Please Subscribe for more videos.,`
    },
    {
        img: bike10,
        Details: 'Yamaha XSR 155, Expected Price Rs. 1,36,000, ',
    },
]

const Bikes = () => {
    return (
        <div id="hotels" classDetails="container">
            <h2 classDetails="text-primary mt-5"> Our Products</h2>
            <div classDetails="row">
                {
                    bikes.map(bike =><Bike
                    key={bike.Details}
                    bike={bike}
                    ></Bike> )
                }

            </div>
        </div>
    );
};

export default Bikes;