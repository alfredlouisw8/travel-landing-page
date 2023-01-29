//translated words
const languages = [
	{
		id: "LT-1",
		en: "For Corporations",
		fr: "Pour les sociétés",
		zh: "对于公司",
	},
	{
		id: "LT-2",
		en: "Font Size",
		fr: "Taille de police",
		zh: "字体大小",
	},
	{
		id: "LT-3",
		en: "S",
		fr: "S",
		zh: "小",
	},
	{
		id: "LT-4",
		en: "M",
		fr: "M",
		zh: "中",
	},
	{
		id: "LT-5",
		en: "XL",
		fr: "XL",
		zh: "大",
	},
	{
		id: "LT-6",
		en: "Shrines",
		fr: "Sanctuaires",
		zh: "神社",
	},
	{
		id: "LT-7",
		en: "Tourism",
		fr: "Tourisme",
		zh: "旅游",
	},
	{
		id: "LT-8",
		en: "Event",
		fr: "Événement",
		zh: "事件",
	},
	{
		id: "LT-9",
		en: "Flower",
		fr: "Fleur",
		zh: "花",
	},
	{
		id: "LT-10",
		en: "Model Course",
		fr: "Cours modèle",
		zh: "示范课程",
	},
	{
		id: "LT-11",
		en: "Gourmet",
		fr: "Gourmet",
		zh: "美食",
	},
	{
		id: "LT-12",
		en: "Onsen & Accommodations",
		fr: "Onsen et hébergement",
		zh: "温泉住宿",
	},
	{
		id: "LT-13",
		en: "Access",
		fr: "Accès",
		zh: "访问奈良",
	},
	{
		id: "LT-14",
		en: "Welcome to Nara",
		fr: "Bienvenue à Nara",
		zh: "欢迎来到奈良",
	},
	{
		id: "LT-15",
		en: "Ryokan",
		fr: "Ryokan",
		zh: "旅馆",
	},
	{
		id: "LT-16",
		en: "Tourist Guidebook",
		fr: "Guide touristique",
		zh: "旅游指南",
	},
	{
		id: "LT-17",
		en: "Nara Prefecture Tourism Official App",
		fr: "Application officielle du tourisme de la préfecture de Nara",
		zh: "奈良县旅游官方应用程序",
	},
	{
		id: "LT-18",
		en: "Nara Yamato Road Calendar",
		fr: "Calendrier de la route de Nara Yamato",
		zh: "奈良大和道路日历",
	},
	{
		id: "LT-19",
		en: "Notice",
		fr: "Avis",
		zh: "注意",
	},
	{
		id: "LT-20",
		en: "Stock Photo Library",
		fr: "Bibliothèque de photos",
		zh: "库存照片库",
	},
	{
		id: "LT-21",
		en: "Film Commission",
		fr: "Commission du cinéma",
		zh: "电影委员会",
	},
	{
		id: "LT-22",
		en: "Movie Information Related to Nara",
		fr: "Informations sur le film liées à Nara",
		zh: "奈良的电影信息",
	},
	{
		id: "LT-23",
		en: "Recommended Link",
		fr: "Lien recommandé",
		zh: "推荐链接",
	},
	{
		id: "LT-24",
		en: "Nara Yamato Road World Heritage Site",
		fr: "Site du patrimoine mondial de la route Nara Yamato",
		zh: "奈良大和路世界遗产",
	},
	{
		id: "LT-25",
		en: "Recommended spots for the four seasons",
		fr: "Spots recommandés pour les quatre saisons",
		zh: "四个季节的推荐景点",
	},
	{
		id: "LT-26",
		en: "Inquiries about tourism",
		fr: "Enquêtes sur le tourisme",
		zh: "旅游咨询",
	},
	{
		id: "LT-27",
		en: "News from autumn leaves from Nara Yamato Road",
		fr: `Des nouvelles des feuilles d'automne de Nara Yamato Road`,
		zh: "来自奈良大和路的秋叶通知",
	},
	{
		id: "LT-28",
		en: "News from cherry blossoms from Nara Yamato Road",
		fr: "Des nouvelles des cerisiers en fleurs de Nara Yamato Road",
		zh: "奈良大和路樱花的通知",
	},
	{
		id: "LT-29",
		en: "Fantastic Deer Nara Japanese Marriage",
		fr: "Fantastique Cerf Nara Mariage Japonais",
		zh: "梦幻鹿奈良日本联姻",
	},
	{
		id: "LT-30",
		en: "site map",
		fr: "plan du site",
		zh: "站点地图",
	},
	{
		id: "LT-31",
		en: "site policy",
		fr: "politique du site",
		zh: "网站政策",
	},
	{
		id: "LT-32",
		en: "about the link",
		fr: "sur le lien",
		zh: "关于链接",
	},
	{
		id: "LT-33",
		en: "Nara Prefecture Visitors Bureau",
		fr: "Office du tourisme de la préfecture de Nara",
		zh: "奈良县观光局",
	},
	{
		id: "LT-34",
		en: "School trip guidebook",
		fr: "Guide de voyage scolaire",
		zh: "学校旅行指南",
	},
	{
		id: "LT-35",
		en: "Tour / day tour",
		fr: "Visite / visite d'une journée",
		zh: "游览/一日游",
	},
	{
		id: "LT-36",
		en: "Notice",
		fr: "Avis",
		zh: "注意",
	},
	{
		id: "LT-37",
		en: "Inquiries",
		fr: "Enquêtes",
		zh: "查询",
	},
	{
		id: "LT-38",
		en: "日本語",
		fr: "",
		zh: "",
	},
	{
		id: "LT-39",
		en: "Online Store",
		fr: "",
		zh: "",
	},
];

(function () {
	//Run on initial load of the page

	//1. Translate the page
	// It looks like the dom is not ready yet. So we need to delay
	// the translation process
	setTimeout(() => {
		translatePage();
		//override google search form
		overrideGoogleSearch();
	}, 100);

	//2. Do some tweaks
	prepareThePage();

	//3. Override all back button
	overrideBackButton();

	//4. set shopping as default tab
	setShoppingAsDefault();

	//5. set up campaign image if exl_acp is included in the url
	setUpCampaignImage();

	addEventListeners();

	function overrideGoogleSearch() {
		$("body").on("submit", ".gsc-search-box", function (e) {
			e.preventDefault();
			document.location.href = `http://yamatoji.nara-kankou.or.jp/search_results/index.html?q=${e.target[0].value}`;
		});
	}

	function prepareThePage() {
		document.body.id = getCurrentSeason();
		document.title = "Shop Online | Nara";

		setTimeout(() => {
			showTabsBasedOnDistributor();
		}, 1000);
	}

	function showTabsBasedOnDistributor() {
		const tabs = document.querySelector(".search-control.page-search > .tabs");

		if (!tabs) return;

		if (
			getParameterByName("exl_dn") &&
			getParameterByName("exl_dn").toLowerCase() === "naratabia"
		) {
			//Tab Epicurean
			tabs.children.item(2).style.display = "none";
		} else {
			//Tab Accommodation
			tabs.children.item(0).style.display = "none";
			//Tab Activity
			tabs.children.item(1).style.display = "none";
			//Tab Shopping
			tabs.children.item(3).style.display = "none";
		}
	}

	function getParameterByName(name = "", url = "") {
		if (!url) url = window.location.href;

		name = name.replace(/[\[\]]/g, "\\$&");

		const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		const results = regex.exec(url);

		if (!results) return null;
		if (!results[2]) return "";

		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function getCurrentSeason() {
		let seasons = [];
		seasons[11] = seasons[0] = seasons[1] = "winter";
		seasons[2] = seasons[3] = seasons[4] = "spring";
		seasons[5] = seasons[6] = seasons[7] = "summer";
		seasons[8] = seasons[9] = seasons[10] = "autumn";

		const currentMonthInNumber = new Date().getMonth();
		const seasonFromUrl = getParameterByName("season") || "xx";

		if (seasons.hasOwnProperty(seasonFromUrl)) {
			return seasons[seasonFromUrl];
		} else {
			return seasons[currentMonthInNumber];
		}
	}

	function translatePage() {
		const lang = getParameterByName("lang");
		const exl_lng = getParameterByName("exl_lng");
		let selectedLang = "ja";

		selectedLang = lang || selectedLang;
		selectedLang = exl_lng?.split("-")[0] || selectedLang;

		let translation = "";
		languages.forEach((item, index) => {
			if (item[selectedLang] && selectedLang != "ja") {
				translation = item.hasOwnProperty(selectedLang)
					? item[selectedLang]
					: item["en"];

				const els = document.getElementsByClassName(`${item.id}`);

				for (let el of els) {
					if (el) el.innerHTML = translation;
				}
			}

			//set html lang attribute to selected languages
			document.documentElement.lang = `${selectedLang}`;
		});
	}

	function addEventListeners() {
		jQuery(function ($) {
			// $('.button-lang').click(() => {
			//     const selectedLang = getParameterByName('lang') || 'ja';
			//     const newLang = selectedLang == 'ja' ? 'en' : 'ja';

			//     //1. remove lang in the url
			//     let newUrl = location.href.replace(/&?lang=\w{2}&?/gi, '');

			//     // //2. check whether html file  is included in the url
			//     // newUrl =
			//     //     newUrl + (!newUrl.includes('.html') ? 'index.html' : '');

			//     //3. add lang at the end of url
			//     const langQueryString =
			//         (!newUrl.includes('?')
			//             ? '?'
			//             : newUrl.includes('&')
			//             ? '&'
			//             : '') + `lang=${newLang}`;

			//     newUrl = newUrl + langQueryString;

			//     document.location.href = newUrl;
			// });

			$("body").on("click", ".ac_sitemenu", function () {
				$(this).next().slideToggle();
				$(this).toggleClass("active");
			});

			$("body").on("click", ".btn-navbar", function () {
				if ($(this).hasClass("collapsed")) {
					$(".nav-collapse").addClass("in").css("height", "auto");
					$(this).removeClass("collapsed");
				} else {
					$(".nav-collapse").removeClass("in").css("height", "0px");
					$(this).addClass("collapsed");
				}
			});
		});
	}

	function overrideBackButton() {
		// override all backlink functionality
		$(".navigate-back-link-container > a").click(function (e) {
			e.preventDefault();
			history.back();
		});
	}

	function setShoppingAsDefault() {
		const exlGrp = getParameterByName("exl_grp");
		let urlHasExlGrp = exlGrp !== null && exlGrp.trim() !== "";

		const url = document.location.href;
		// remove all exl_grp in url
		let urlWithoutExlGrp = url.replace(
			/&?exl_grp=\w{3,4}&?|&?exl_grp=\W&?/gi,
			""
		);

		const isCABSearchPage =
			document.location.pathname.toLowerCase() === "/v4/pages/search.aspx";

		if (isCABSearchPage && !urlHasExlGrp && !isLandingPage()) {
			// reload the browser and attach new exl_grp
			// it will open shopping tab by default
			document.location.href = urlWithoutExlGrp + "&exl_grp=shp";
		}
	}

	function setUpCampaignImage() {
		if (getParameterByName("exl_acp")) {
			const campaignImageUrl = $(".campaign-banner.ad-campaign > img").attr(
				"src"
			);

			//hide campaign Image
			$(".campaign-banner.ad-campaign").hide();

			const containerTop = $(".container_top");

			// place a new campaign image right below the header.
			containerTop.append(`
            <div style='margin-top: 80px;height: 400px'>
                <img 
                    height='100%' 
                    width='100%' 
                    style='object-fit: cover;object-position:center;height: 100%' 
                    src='${campaignImageUrl}'/>
            </div>
        `);

			containerTop.css("margin-bottom", "0px");
		}
	}

	function isLandingPage() {
		return (
			document.location.host === "hadi.txi.co.id" ||
			document.location.host === "yamatoji.nara-kankou.or.jp"
		);
	}
})();
