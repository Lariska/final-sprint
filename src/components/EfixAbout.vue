<template>
    <section>
        <nav class="about">
            <!--<ul>-->
                <li class="text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </li>
                <li class="text_">
                    <h5>Contacts:</h5>
                    <p class="number">0526773854</p>
                    <p class="number">036993074</p>

                    <a><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a><i class="fa fa-google-plus-official" aria-hidden="true"></i></a>
                    <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                    <a><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                </li>
                <li class="text">
                    <h5>Address:</h5>
                    <p>Netanya st. Salomon 14/1</p>
                    <iframe class="map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.210371493814!2d34.85770968513921!3d32.33306151379665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d6aaeeb1ff429%3A0xeaed525c1ac056b2!2z15nXldeQ15wg16HXnNeV157XldefLCDXoNeq16DXmdeU!5e0!3m2!1siw!2sil!4v1487368018084">
                    </iframe>
                </li>
            <!--</ul>-->
        </nav>
    </section>
</template>
<script>

export default {
  name: 'efix-about',
}
</script>

<style scoped>
    a{
        padding: 10px;
    }
    .number{
        display: flex;
        align-content: center;
        justify-content: center; 
    }
    .text, .text_{
        margin-right: 10px;
        list-style-type: none;
        padding-right: 5%;
        padding-left: 5%;
        width: 20%;
    }
    .text_{
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
    }
    .about{
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 25px;
        border-top: 1px solid lightgray;
    }
    .map{
        /*height: 70%;*/
        width: 120%;
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>