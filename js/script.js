let vm = new Vue({
    el: "#js-wrapper",
    data: {
        status: {
            webStatus: true,
            designStatus: false,
            brandStatus: false,
            integrationStatus: false,
        },
        aboutIter: 0,
        burgerMenuStatus: false,
        backstage: "img/backstage.png",
        castle: "img/castle.png",
        page: "img/page.png",
        twitter: "img/twitter.jpeg",
        digital: "img/digital.jpeg",
        showDesign: false,
        showPage: true,
        writeUsPrewStatus: true,
        writeUsMain: false,
    },
    methods: {
        pageUp(){
            document.querySelector(".b-page-screen-one").scrollIntoView({behavior: "smooth"});
        },
        aboutTo(){
            document.querySelector(".b-page-screen-two").scrollIntoView({behavior: "smooth"});
        },
        projectTo(){
            document.querySelector(".b-page-screen-three").scrollIntoView({behavior: "smooth"});
        },
        servicesTo(){
            document.querySelector(".b-page-screen-four").scrollIntoView({behavior: "smooth"});
        },
        pricesTo(){
            document.querySelector(".b-page-screen-five").scrollIntoView({behavior: "smooth"});
        },
        contactTo(){
            document.querySelector(".b-page-screen-six").scrollIntoView({behavior: "smooth"});
        },
        animScreenThree(){
            document.querySelector(".projects").style.transform = "translateX(0px)"
        },
        scrollEvent(){
            let coordScreenTwo = - document.querySelector(".b-page-screen-two").getBoundingClientRect().top;
            let coordScreenThree = - document.querySelector(".b-page-screen-three").getBoundingClientRect().top;

            if(coordScreenThree >= 0){
                this.animScreenThree();
                document.querySelector(".page-up").style.display = "block";
            }
        },
        greetingAnim(event) {
            let x = event.pageX;
            let y = event.pageY;

            if (window.matchMedia('(min-width: 1200px)').matches) {
                document.querySelector(".b-page-screen-one__right-block").style.transform = "translate(" + "-" + x / 20 + "px, " + "-" + y / 20 + "px)";
            }

            if (window.matchMedia('(max-width: 1200px)').matches) {
                document.querySelector(".b-page-screen-one__right-block").style.transform = "translate(" + "-" + x / 50 + "px, " + "-" + y / 50 + "px)";
            }
        },
        noActive() {
            for (key in this.status) {
                this.status[key] = false;
            }

            document.querySelectorAll(".b-page-screen-one__check-number p").forEach(function (item) {
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                }
            });
        },
        changeActive(item, i) {
            this.noActive();

            this.status[item] = true;

            document.querySelectorAll(".b-page-screen-one__check-number p")[i].classList.add("active");
        },
        burgerOpen() {
            this.burgerMenuStatus = true;
            document.querySelector("#js-wrapper").classList.add("fixed");
        },
        burgerClose() {
            this.burgerMenuStatus = false;
            document.querySelector("#js-wrapper").classList.remove("fixed");
        },
        autoHeight() {
            document.querySelectorAll(".b-page-screen-five__icon").forEach(function (item) {
                item.style.height = item.offsetWidth + 25 + "px";
            });
        },
        titlePruning() {
            document.querySelectorAll(".b-page-screen-five__title").forEach(function (item) {
                if (item.innerText.length > 38) {
                    item.innerText = item.innerText.slice(0, 38) + "...";
                }
            });
        },
        subtitlePruning() {
            document.querySelectorAll(".b-page-screen-five__subtitle").forEach(function (item) {
                if (item.innerText.length > 100) {
                    item.innerText = item.innerText.slice(0, 100) + "...";
                }
            });
        },
        sendChange() {
            let title = document.querySelector(".write-us__change-title").value;
            let subtitle = document.querySelector(".write-us__change-subtitle").value;

            if(title.split(" ").length <= 2 || subtitle.split(" ").length <= 2){
                alert("Ошибка, введите больше двух слов или используйте пробелы");
                return;
            }

            document.querySelectorAll(".b-page-screen-five__title")[1].innerText = title;
            document.querySelectorAll(".b-page-screen-five__subtitle")[1].innerText = subtitle;

            document.querySelector(".write-us__change-title").value = "";
            document.querySelector(".write-us__change-subtitle").value = "";

            this.titlePruning();
            this.subtitlePruning();
        }
    },
    mounted() {
        setInterval(this.autoHeight, 1000);
        this.titlePruning();
        this.subtitlePruning();
        document.body.onscroll = this.scrollEvent;
    },
});
