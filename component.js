Vue.component('my-card',{
    props: ['title', 'size','goto'],
    data : function(){
        return { }
    },
    computed: {
        imglink : function(){
            let x = this.size ??=100;
            return "https://picsum.photos/"+x;
        }
    },
    template :
    `<div class="card col-sm">
        <img class="card-img-top" :src="imglink" alt="CArd Image Cap">
        <div class="card-body">
            <h3 class="card-title">{{title}}</h3>
            <slot> </slot>
            <a :href="goto" class="btn btn-primary">Go Somewhere</a>
        </div>
    </div>`
})
let app = new Vue ({
    el : "#app",
    data : {
        message : "Hello",
        fsize : "42px",
        msg2 : "Dummy"
    },
    methods : {
        updateMsg() {
            if(this.message=="Hello") {
                this.message = "Back to square one";
            }
            else {
                this.message= "Hello";
            }
            
        }
    },
    computed : {
        myFontSize : function() {
            return `${this.message.length + 10}px`;
            
        }
    },
    watch : {
        message : function(omsg,nmsg){
            this.msg2 = `New: ${omsg} , Old : ${nmsg}`;
        }
    }
})