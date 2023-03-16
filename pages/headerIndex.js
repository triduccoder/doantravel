
const HeaderIndex = () =>{
	return(
		<>
		<main class="main">
		<section class="home" id="home">
		<div class="home__container container grid" style={{backgroundImage:"url(https://metricleo.com/wp-content/uploads/2022/02/27.jpg)", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
		<div class="home__data">
			<h1 class="home__data-title" style={{color:"red"}}>Welcome to the<br/> Best <b> Travel <br/> Villa</b></h1>
		</div>
		</div>
			<div class="home__container container grid" style={{backgroundImage:"url(https://dulichphuonghoang.vn/upload/images/review-nhung-diem-den-chup-anh-cuoi-xuat-sac-o-phu-quoc.jpg)", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
				<div class="home__data">
					<span class="home__data-subtitle">Discover your place</span>
					<h1 class="home__data-title">Explore The <br/> Best <b> Beautiful <br/> Beaches</b></h1>
					<a href="#" class="button">Explore</a>
				</div>

				<div class="home__social">
					<a href="https://www.facebook.com/" target="_blank" class="home__social-link">
						<i class="ri-facebook-box-fill"></i>
					</a>

					<a href="https://instagram.com/" target="_blank" class="home__social-link">
						<i class="ri-instagram-fill"></i>
					</a>

					<a href="https://twitter.com/" target="_blank" class="home__social-link">
						<i class="ri-twitter-fill"></i>
					</a>
				</div>

				<div class="home__info">
					<div>
						<span class="home__info-title" style={{color: "#fff"}}>5 best place to visit</span>
						<a href="#" class="button button--flex button--link home__info-button">
							More
							<i class="ri-arrow-right-line"></i>
						</a>
					</div>

					<div class="home__info-overlay">
						<img src="https://info-imgs.vgcloud.vn/2020/07/09/10/bo-anh-du-lich-cua-gia-dinh-nho-dep-mong-mo-nhu-tranh-ve-6.jpg" alt="" class="home__info-img"/>
					</div>
				</div>
			</div>
		</section>


		<section class="about section" id="about" style={{backgroundImage:"url(https://dongkhoi2.ttchotels.com/uploads/images/tin-tuc/10-kieu-chup-hinh-hut-trieu-like-khi-di-du-lich-4.jpg)",backgroundSize: "cover"}}>
			<div class="about__container container grid">
				<div class="about__data">
					<h2 class="section__title about__title">
						More Information <br/> About The Best Beaches
					</h2>
					<p class="about__description" style={{color:"black"}}>You can find the most beautiful and pleasant places at the best 
						prices with special discounts, you choose the place we will guide you all the way to wait, get your place now.
					</p>
					<a href="#" class="button">Reserver a place</a>
				</div>

				<div class="about__img">
					<div class="about__img-overlay">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvz_zDJrSxMkmBh3hjRyYTakAli4ac4_s9hg&usqp=CAU"/>
					</div>

					<div class="about__img-overlay">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6c_ndK24DMhfLGnAOpUocwwLoG0wodj6bVPiNuyDKHQxGT5NVPalz8dp8J0j-Aony2Q4&usqp=CAU" alt="" class="about__img-two"/>
					</div>
				</div>
			</div>
		</section>
		<section class="discover section" id="discover" style={{backgroundImage:"url(https://info-imgs.vgcloud.vn/2020/07/09/10/bo-anh-du-lich-cua-gia-dinh-nho-dep-mong-mo-nhu-tranh-ve-1.jpg)",backgroundSize: "cover"}}>
			<h2 class="section__title">Discover the most <br/> attractive places</h2>

			<div class="discover__container container swiper mySwiper">
				<div class="swiper-wrapper">
					<div class="discover__card swiper-slide">
						<img src="https://info-imgs.vgcloud.vn/2020/07/09/10/bo-anh-du-lich-cua-gia-dinh-nho-dep-mong-mo-nhu-tranh-ve-14.jpg" alt="" class="discover__img"/>
						<div class="discover__data">
							<h2 class="discover__title">Bali</h2>
							<span class="discover__description">24 tour available</span>
						</div>
					</div>


					<div class="discover__card swiper-slide">
						<img src="https://info-imgs.vgcloud.vn/2020/07/09/10/bo-anh-du-lich-cua-gia-dinh-nho-dep-mong-mo-nhu-tranh-ve-16.jpg" alt="" class="discover__img"/>
						<div class="discover__data">
							<h2 class="discover__title">Hawaii</h2>
							<span class="discover__description">15 tour available</span>
						</div>
					</div>

					<div class="discover__card swiper-slide">
						<img src="https://kenh14cdn.com/thumb_w/660/2019/3/24/5560405322551102780758147974057765180014592n-1553411572588643838761.jpg" alt="" class="discover__img"/>
						<div class="discover__data">
							<h2 class="discover__title">Hvar</h2>
							<span class="discover__description">18 tour available</span>
						</div>
					</div>

					<div class="discover__card swiper-slide">
						<img src="https://icdn.dantri.com.vn/thumb_w/640/2020/05/12/khanh-ngan-mu-cang-chai-yen-bai-1589271780819.jpg" alt="" class="discover__img"/>
						<div class="discover__data">
							<h2 class="discover__title">Whitehaven</h2>
							<span class="discover__description">32 tour available</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="experience section" id="experience" style={{backgroundImage:"url(https://khostock.net/wp-content/uploads/2019/12/20-hinh-anh-du-lich-bien-8.png)",backgroundSize: "cover"}}>
			<h2 class="section__title">With Our Experience <br/> We Will Sever You</h2>

			<div class="experience__container container grid">
				<div class="experience__content grid">
					<div class="experience__data">
						<h2 class="experience__number">20</h2>
						<span class="experience__description">Year <br/> Experience</span>
					</div>

					<div class="experience__data">
						<h2 class="experience__number">75</h2>
						<span class="experience__description">Complete <br/> Tour</span>
					</div>

					<div class="experience__data">
						<h2 class="experience__number">650+</h2>
						<span class="experience__description">Tourist <br/> Destination</span>
					</div>
				</div>

				<div class="experience__img grid">
					<div class="experience__overlay">
						<img src="https://lethuytravel.com/uploaded/Anh-Cam-Nang/cn-dl-phu-quoc/phuquocquangbahinhanhdulichtrenyoutube.JPG" alt="" class="experience__img-one"/>
					</div>

					<div class="experience__overlay">
						<img src="https://phuquocsensetravel.com/view-800/at_du-lich-bien-dao-hut-khach-dip-cuoi-nam_65959017841f95d9c616200fcd82b711.jpg" alt="" class="experience__img-two"/>
					</div>
				</div>
			</div>
		</section>
</main>
		</>
	)
}

export default HeaderIndex