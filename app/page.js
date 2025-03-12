'use client'
import dynamic from 'next/dynamic';
import { YMaps, Map, Button, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion'

const wg = localFont({
  src: [
    {
      path: '../public/cirpnova-d.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-wg',
})

const CountDown = dynamic(() => import('./components/CountDown'), {
  ssr: false
})
export default function Home() {

  const [play, setPlay] = useState(false)

  const playMusic = () => {
    setPlay(!play);
    if (play) {
      document.getElementById('audio').pause();
    } else {
      document.getElementById('audio').play();
    }
  }

  return (
  <div className='font-[wg] text-center'>
    <main className='flex flex-col items-center justify-between relative '>
      <img src='/super-hero.jpeg' alt='Hero' className='w-full'/>
      <img src='/oyu2.png' alt='stars' className=' absolute h-60 mt-2 ml-36 p-0 rotate-[-90deg] clip-diagonal-reverse'/>
      {/* <img src='/oyu2.png' alt='stars' className=' absolute bottom-2 h-60 mt-2 mr-36 p-0 rotate-[90deg] clip-diagonal-reverse'/> */}
      <div className=' absolute top-0 left-8 w-[80%] text-white'>
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}  className='text-left relative'>
          <p className={`${wg.className} text-4xl mt-6 m-0 font-extrabold`}>Толеген</p>
          <p className={`${wg.className} text-3xl`}>70 жас мерей тойы <br />10.05.2025</p>
        </motion.div>
      </div>
        <div className=' absolute top-72 font-bold  w-[88%] max-w-[370px] justify-between text-black h-[100%] mt-10'>
          <audio src="./music.mp3" autoPlay loop id='audio'></audio>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}   className=' absolute top-0 right-[6%] z-15 mt-2'>
            <div className='flex justify-center items-center mb-16'>
              { play ? 
              <button onClick={playMusic} className={`rounded-full bg-white/70 hover:bg-white/90 ${play && 'animate-[spin_3s_linear_infinite]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              :
              <button onClick={playMusic} className={`rounded-full bg-white/70 hover:bg-white/90 ${play && 'animate-spin'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9v6a1 1 0 001.546.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              }
            </div>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='mb-4 text-center  p-3 rounded-lg text-2xl bg-[rgba(0,0,0,0.5)]'>
              <h1 className='text-4xl text-[#c1af3b] w-auto mb-2'>Құрметті</h1>
              <i> <p className=' text-lg text-[#fff]'>Ағайын-туыс, құда-жекжат, нағашы-жиен, бөлелер, дос-жаран, көршілер! 
                                          Сіздерді, Асқар таудай әкеміз Төлеген Аманкенұлы
              </p></i>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className=' mt-2 text-center  p-3 rounded-lg text-2xl bg-[rgba(0,0,0,0.5)]'>
              <i> <p className=' text-lg text-[#fff]'>70 жас мерей тойына арналған салтанатты кешіміздің қадірлі қонағы болуға шақырамыз!
              </p></i>
          </motion.div>
      </div>
    </main>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}   className=' flex flex-col w-[80%] mx-auto p-4 rounded-lg relative overflow-hidden right-0 justify-center items-center text-lg mt-32'>
      <p className=' text-3xl font-extrabold'>Aisara Hall</p>
      <p className=' text-2xl font-extrabold'>Банкет залы</p>
      <img src="/aisara.png" alt="aisara" />
      <img src="/favicon.png" alt="2gis" className=' h-[75px] w-[75px] mt-4 cursor-pointer' onClick={(e) => {
            window.location.href = 'https://go.2gis.com/ZQSrG'
          }}/>
      <p className=' text-xl font-extrabold'>Қайым Мұхамедханұлы 52/1 <br />
      Нұра ауданы, Астана</p>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='w-[80%] font-bold mx-auto text-center relative mb-[50px] border-[#96825f] border-[1px] '>
        <i><p className={`text-2xl mt-6 m-0 absolute top-0 right-5`}>10.05.2025 | 13:00 | сенбі</p></i>
    </motion.div>

    <div className='relative flex justify-center mb-[330px] bg-mramor'>
        <motion.img initial={{ rotate: 0, x: -100, opacity: 0 }} whileInView={{ opacity: 1, rotate: 20, x: 0 }} transition={{ duration: 1 }} src='/3.jpeg' alt='Section' className='object-cover w-[40%] mx-auto mt-10   rounded-lg absolute rotate-[20deg] top-10 right-5 h-[200px]'/>
        <motion.img initial={{ rotate: 0, x: 100, opacity: 0 }} whileInView={{ opacity: 1, rotate: -18, x: 0  }} transition={{ duration: 1 }} src='/3.jpeg' alt='Section' className='object-cover w-[40%] mx-auto mt-10 rounded-lg absolute -rotate-[18deg] top-10 left-7 h-[200px]'/>
        <motion.img src='2.JPG' alt='Section' className=' object-cover w-[40%] mx-auto mt-10  rounded-lg absolute h-[250px]'/>
    </div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}   className=' flex flex-col w-[80%] mx-auto mb-[20px] ] p-4 rounded-lg relative overflow-hidden right-0 justify-center items-center text-lg '>
      <img src="/wh.png" alt="2gis" className=' h-[75px] w-[75px] mt-7 cursor-pointer' onClick={(e) => {
            window.location.href = 'https://wa.me/77015359896'
          }}/>
      <p className=' text-2xl font-extrabold'>WhatsApp арқалы байланысу</p>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='w-[80%] font-bold mx-auto text-center relative mb-[35px] border-[#96825f] border-[1px] '>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='pb-12'>
      <h1 className='text-3xl font-extrabold'>Той иелері:</h1>
      <i><p className='text-3xl'>жұбайы, балалары, немерелері!</p></i>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}  className='w-[80%] mx-auto mb-16'>
      <img src="/1.png" alt="Photo" className=' ml-8 rounded-3xl mx-auto'/>
      {/* <p className=' text-xl py-2'>Үйлену той хештегі</p>
      <p > <a className=' font-extrabold text-2xl ' href="https://www.instagram.com/explore/tags/BEKZATVENERA/">#BEKZAT&VENERA</a></p> */}
    </motion.div>

    <p className=' text-xl font-extrabold'>Туған күнге дейін:</p>
    <CountDown />
    <p className=' text-xl font-extrabold mb-0'>қалды</p>
    <br />
    <br />

    <YMaps query={{lang: 'ru_RU', apikey: '536168cc-8dbb-4923-a06f-9a6bd5a9cf15'}}>
      <Map defaultState={{ center: [51.145793,71.347779], zoom: 19 }} width='100%' height='400px' >
        <Placemark geometry={[51.145793,71.347779]} options={{ fillColor: '#f00' }} />
        <Button
          options={{ maxWidth: 128 }}
          data={{ content: 'Заказать Такси' }}
          defaultState={{ selected: true }}
          onClick={(e) => {
            window.location.href = 'https://3.redirect.appmetrica.yandex.com/route?utm_source=yamaps&utm_medium=api&appmetrica_tracking_id=241755468559577482&ref=2334695&domain=ru&lang=ru&start-lat=&start-lon=&end-lat=51.145793&end-lon=71.347779'
          }}
          />
        <Button
          options={{ maxWidth: 400,  }}
          data={{ content: 'Показать в 2ГИС' }}
          defaultState={{ selected: true }}
          onClick={(e) => {
            window.location.href = 'https://go.2gis.com/ZQSrG'
          }}
        />
      </Map>
    </YMaps>
  </div>
  
  );
}
