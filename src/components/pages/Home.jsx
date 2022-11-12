import React, { useContext, useState, useEffect,  useRef } from "react";
import { Link } from "react-router-dom";
import { MainContext } from '../Main';
import { DataContacts } from '../../App';
import Girl from '../../images/Girl.png';
import Boy from '../../images/Boy.png';
import GirlBoyBalls from '../../images/GirlBoyBalls.png';
import GoogleMap from '../../images/map_preloder.png'; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


function Home() {
	const { setCreateContent, setNameContent, setContentAbout, ReviewContent } = useContext(MainContext);
	const { setHomeActive,  setAboutActive, setNursaryActive,  setSchoolActive, setPricesActive,  setContactsActive, screenWidth  } = useContext(DataContacts);

	const [isLoading, setLoading] = useState(true);
	const [btn, setBtn] = useState(false);
	const [indxReview, setIndxReview] = useState(0);

	const reviewFull = useRef();
	const refSlider = useRef();

	function pageTop(){
        let mainElem = document.querySelector('.main__content');
        mainElem.scrollIntoView({ block: "start"})
    }

	function handleOnLoad() {
		setLoading(false);
	}

	function Preloader(){
		return (
			<img className='map__preloader' src={GoogleMap} alt="Google map" />
		)	
	}

	function removeBtnReview() {
		let reviewFullElem = reviewFull.current;

		reviewFullElem.style.animation = 'timeout 1s ease-in-out 1 forwards';
		setTimeout(()=>{setBtn(false);setIndxReview(0)}, 1000);
    }

	function setFuncBtn(){
		setBtn(true);
		return;
	}

	function getFuncIndxReview(data){
		setIndxReview(data);
		return;
	}

	useEffect(()=> {
		getItemReview();
	},[])
	
	function getItemReview() {
		let dataFullContentReview = ReviewContent[indxReview];
		if(!dataFullContentReview) return;
			return (
			<div className="review__full-content_wrapper">
				<div ref={reviewFull} className="review__item__full">
					<button onClick={()=>{removeBtnReview();}}className="review__btn_remove"></button>
					<div>
						<div className="review__item__img">
								<img src={dataFullContentReview.src}  alt={dataFullContentReview.alt}></img>
						</div>
						<div className="review__item__title"><span>{dataFullContentReview.name}</span><span>{dataFullContentReview.date}</span></div>
					</div>
					<div>
						<div className="review__full-content">{dataFullContentReview.fullReview}</div>
					</div>
				</div>
			</div>	
		)
	}

	// function slidePrevNext (data){
	// 	let slider = refSlider.current;
	// 	let x = slider.style.transform;
    //     if (!x) {
    //         x = 0;
    //     } else {
    //         x = x.replace('translateX(', '');
    //         x = x.replace('%)', '');
    //         x = Math.abs(x);
    //     }

    //     x += 25 * (data === 'left' ? -1 : 1);
    //     const stopPoint = (ReviewContent.length-2)*25;
	// 	if (x <= stopPoint) slider.style.transform = `translateX(-${x}%)`;
	// 	if (x > stopPoint)  slider.style.transform = `translateX(0%)`;
        
    //     if (x < 0)  slider.style.transform = `translateX(-${stopPoint}%)`;
    // };

	
	return (
		<div className="page__home">
			<div className="home__present">
				<div className="home__present__content">
					<h1 className="home__present__content_title">детский сад — начальная школа «Кей-ДЖЕЙ-Ви»</h1>
					<p className="home__present__content_description">Мы работаем уже более 30 лет! Мы постоянно совершенствуемся, чтобы создавать лучшие условия для творческого и интеллектуального развития учеников.</p>
					<Link onClick={()=>{setHomeActive(false); setAboutActive(true); setNursaryActive(false); setSchoolActive(false); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} className="link__inDetails" to="/about/about/"><span>Подробнее</span><span></span><span className="link__inDetails_arrow"></span></Link>
				</div>
				<div className="home__present__content_photos">
					<div className="home__present__content_curcle1"></div>
					<div className="home__present__content_curcle2"></div>
					<div className="home__present__content_curcle3"></div>
					<div className="home__present__content_photos1"><img src={Girl} alt="Девочка"></img></div>
					<div className="home__present__content_photos2"><img src={Boy} alt="Мальчик"></img></div>
					<div className="home__present__content_photos3"><img src={GirlBoyBalls} alt="Дети в шарах"></img></div>
				</div>
			</div>
			<div className="home__advantages">
				<h3 className="home__advantages_title">Почему стоит выбрать именно нас</h3>
				<ul>
					<li className="advantages__items"><span className="advantages__sign_item1"></span><span>Забота о здоровье каждого ребенка</span></li>
					<li className="advantages__items"><span className="advantages__sign_item2"></span><span>Экологически чистый район Минска</span></li>
					<li className="advantages__items"><span className="advantages__sign_item3"></span><span>Вкусное и сбалансированное питание</span></li>
					<li className="advantages__items"><span className="advantages__sign_item4"></span><span>Индивидуальный подход к каждому ребенку</span></li>
				</ul>
				<ul>
					<li className="advantages__items"><span className="advantages__sign_item5"></span><span>Уникальная модель обучения</span></li>
					<li className="advantages__items"><span className="advantages__sign_item6"></span><span>Углубленное изучение английского</span></li>
					<li className="advantages__items"><span className="advantages__sign_item7"></span><span>Собственная методика развития творчества</span></li>
					<li className="advantages__items"><span className="advantages__sign_item8"></span><span>Логопедические занятия</span></li>
				</ul>
			</div>
			<div className="home__nursary">
				<div className="home__nursary__content">
					<h4 className="home__nursary__content_title">Детский сад</h4>
					<p className="home__nursary__content_description">Теплая и по-семейному добрая обстановка в детском саду создаёт для детей оптимальные условия для их развития и раскрытия всех способностей и талантов.<br/><br/>
					В дошкольном детстве ребенку необходимо освоить много навыков для жизни: самостоятельно переодеваться, красиво кушать, правильно говорить, общаться с детьми и взрослыми.<br/> <br/>
					В коллективе  всему этому научиться гораздо проще. И конечно это драгоценное время  для развития и обучения.</p>
				</div>
				<div className="home__nursary__photo">
					<div className="home__nursary__babies_photo"><ul>В нашем саду функционируют группы:
						<li>Младшая (2-3 года)</li>
						<li>Cредняя (4-5 лет)</li>
						<li>Cтаршая (5-6 лет)</li>
					</ul></div>
					<div className="home__nursary__link" >
						<span className="home__nursary__link_price">от 330 $ в месяц</span><Link onClick={() => {setHomeActive(false); setAboutActive(false); setNursaryActive(true); setSchoolActive(false); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} className="link__inDetails" to="/nursary/junior/"><span>Подробнее</span><span></span><span className="link__inDetails_arrow"></span></Link>
					</div>
				</div>
			</div>
			<div className="home__preparatory">
				<div className="home__preparatory__photo">
					<div className="home__preparatory__kids_photo"><span>Мы предлагаем Вам отдать своих детей в подготовительный класс школы «Кей-Джей-Ви», где Дети будут заниматься по отдельной программе.</span></div>
					<div className="home__preparatory__link" >
						<span className="home__preparatory__link_price">от 372 $ в месяц</span><Link onClick={() => {setHomeActive(false); setAboutActive(false); setNursaryActive(false); setSchoolActive(true); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} className="link__inDetails" to="/school/preparatory/"><span>Подробнее</span><span></span><span className="link__inDetails_arrow"></span></Link>
					</div>
				</div>
				<div className="home__preparatory__content">
					<h4 className="home__preparatory__content_title">Подготовительный класс</h4>
					<p className="home__preparatory__content_description">Расписание занятий будет включать следующие аспекты:</p>
					<ul>
						<li>Развитие речи + обучение чтению, грамоте.</li>
						<li>Математический цикл + логика, конструирование.</li>
						<li>Английский язык.</li>
						<li>Ознакомление с окружающим.</li>
						<li>Музыка.</li>
						<li>Физкультура.</li>
						<li>Изобразительная деятельность.</li>
					</ul>
				</div>
			</div>
			<div className="home__primary">
				<div className="home__primary__content">
					<h4 className="home__primary__content_title">Начальная школа </h4>
					<p className="home__primary__content_description">
					Частное учреждение образования «КЕЙ-ДЖЕЙ-ВИ», обучение с 1 по 4 классы в режиме пребывания в школе с 8.00 до 15.00 или с 8.00 до 17.00.<br/> <br/> 
					Мы растим думающих людей, способных создавать новое и умеющих качественно выполнять задачи.<br/> <br/>
					В обучение включено углубленное изучение английского языка с 1 класса (ведём подготовку к Кембриджскому экзамену (YLE)).<br/> <br/>
					На школьных каникулах предлагаем программу отдыха на территории школы.</p>
				</div>
				<div className="home__primary__photo">
					<div className="home__primary__kids_photo"><span>Обучение с 1 по 4 классы, включая пребывание в группах продленного дня</span></div>
					<div className="home__primary__link" >
						<span className="home__primary__link_price">от 470 $ в месяц</span><Link onClick={() => {setHomeActive(false); setAboutActive(false); setNursaryActive(false); setSchoolActive(true); setPricesActive(false); setContactsActive(false); setPricesActive(false); pageTop();}} className="link__inDetails" to="/school/primary/"><span>Подробнее</span><span></span><span className="link__inDetails_arrow"></span></Link>
					</div>
				</div>
			</div>
			<div className="video_content">
				<div className="video_content_title">Приглашаем в 3D-тур по «КЕЙ-ДЖЕЙ-ВИ» </div>
				<button className="video_content_btn" onClick={() => { setNameContent('video'); setContentAbout('school_tour'); setCreateContent(true); }} ><span>Посмотреть</span><span></span></button>
			</div>

			<div className="home__review">
				<h4 className="home__review__content_title">Отзывы</h4>
				{btn && <>{getItemReview()}</> }
				<div  className="review__content_slider">
					<div ref={refSlider} className="review__content_wrapper">
					<Swiper
        				slidesPerView={screenWidth > 425 ? 2 : 1}
        				spaceBetween={10}
        				loop={true}
        				loopFillGroupWithBlank={true}
        				pagination={{
        				//   clickable: true,
						  type: "fraction",
        				}}
        				navigation={true}
        				modules={[Pagination, Navigation, Mousewheel]}
						mousewheel={true}
						keyboard={true}
						longSwipesMs={1000}
        				className="mySwiper"
      >
					{ <>{ReviewContent.map((item, index) => {
            	    		    return (
            	    		        <SwiperSlide key={index}><div   className={`review__item item${index+1}`} >
										<div>
											<div className="review__item__img">
												<img src={item.src}  alt={item.alt}></img>
											</div>
											<div className="review__item__title"><span>{item.name}</span><span>{item.date}</span></div>
										</div>
										<div>
											<div className="review__short-content">{item.shortReview}</div>
											<button onClick={()=>{setFuncBtn(); getFuncIndxReview(index); }} className="review__btn">Читать полностью</button>
										</div>
									</div>
									</SwiperSlide>
            	    		    )
            	    		})}</>
						}
					</Swiper>
					</div>
            	</div>
					{/* {isBtnShift && <button className='slider__btn-left' onClick={()=>{ slidePrevNext('left');}}><span>&lt;</span></button>}
					{isBtnShift && <button className='slider__btn-right' onClick={()=>{ slidePrevNext();}}><span>&gt;</span></button>} */}
			</div>
			<div className='page__contacts_iframe home_iframe'>
				{isLoading && <Preloader/>}
				{<iframe title='Адрес на карте' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.951570951808!2d27.587888115966827!3d53.950367980110066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf5cad0687f9%3A0x67db471bff3c1228!2z0YPQuy4g0J3QuNC60LjRgtC40L3QsCAzNSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1666895836881!5m2!1sru!2sby" onLoad={handleOnLoad}></iframe>}
				</div>
		</div>
	);
}

export default Home;