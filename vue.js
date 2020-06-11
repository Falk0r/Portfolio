Vue.component('graduate', {
    props: ['mygraduate'],
    template :` <div class="graduate">
                    <div class="graduate-content">
                    <h3>{{ mygraduate.title }}</h3>
                    <hr>
                    <p><i class="fas fa-school"></i>{{ mygraduate.school }}</p>
                    <p><i class="far fa-calendar-alt"></i>{{ mygraduate.years }}</p>
                    </div>                    
                    <i class="fas fa-award"></i>
                </div>`
});

const app = new Vue({
    el: '#certifications',
    data: {
        message : "welcome to Vue !",
        certifs : [
            {
                "title" : "Optimisez votre déploiement en créant des conteneurs avec Docker",
                "obtention" : "24 Avril 2020",
                "number" : "4541590390",
                "url" : "https://openclassrooms.com/fr/courses/2035766-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker",
                "path" : "./public/certificates/dockerC.png"
            },
            {
                "title" : "Apprenez à créer votre site web avec HTML5 et CSS3",
                "obtention" : "22 Avril 2017",
                "number" : "9464915864",
                "url" : "https://openclassrooms.com/fr/courses/1603881",
                "path" : "./public/certificates/HTMLCSS.png"
            },
            {
                "title" : "Apprenez à coder avec JavaScript",
                "obtention" : "30 Septembre 2016",
                "number" : "5895882806",
                "url" : "https://openclassrooms.com/fr/courses/2984401",
                "path" : "./public/certificates/js.png"
            },
            {
                "title" : "Découpez et intégrez une maquette",
                "obtention" : "28 Janvier 2020",
                "number" : "2847579393",
                "url" : "https://openclassrooms.com/fr/courses/3504431",
                "path" : "./public/certificates/maquette.png"
            },
            {
                "title" : "Démarrez votre projet avec Python",
                "obtention" : "20 Novembre 2017",
                "number" : "8356247956",
                "url" : "https://openclassrooms.com/fr/courses/4262331",
                "path" : "./public/certificates/pythonC.png"
            },
            {
                "title" : "Testez l'interface de votre site",
                "obtention" : "4 Février 2020",
                "number" : "1897776237",
                "url" : "https://openclassrooms.com/fr/courses/3504461",
                "path" : "./public/certificates/tester.png"
            },
            {
                "title" : "Découvrez les solutions CMS",
                "obtention" : "2 mars 2018",
                "number" : "5118032016",
                "url" : "https://openclassrooms.com/fr/courses/3013691",
                "path" : "./public/certificates/CMS.png"

            },
            {
                "title" : "Réalisez des sites modernes et beaux grâce à WordPress",
                "obtention" : "28 Janvier 2020",
                "number" : "3349595306",
                "url" : "https://openclassrooms.com/fr/courses/3504421",
                "path" : "./public/certificates/wordpressC.png"
            }
        ],
        counter : 0,
        width : document.getElementsByTagName('body')[0].clientWidth
    },
    methods : {
        next(){
            this.counter ++
            if (this.counter > 7) {
                this.counter = 0
            }
            return this.counter
        },
        precedent(){
            this.counter --
            if (this.counter < 0) {
                this.counter = 7
            }
            return this.counter
        },
    }
})





const graduates = new Vue({
    el: '#studies',
    data : {
        mygraduates : [
            { id: 1, title: "Développement Web et Mobile", school : "IT-Akademy", years : "2020"},
            { id: 2, title: "Licence Administration Economique et Social", school : "Université Paul Valery", years : "2010 - 2011"},
            { id: 3, title: "B.T.S Comptabilité et Gestion des Organisations", school : "Lycée Jules Guesdes", years : "2007 - 2009"},
            { id: 4, title: "Baccalauréat S.T.I Génie Mécanique", school : "Lycée Louis Pasquet", years : "2001 - 2005"},
        ]
    }
        
})
