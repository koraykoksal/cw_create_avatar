

const avatarType=["adventurer",
"adventurer-neutral",
"avataaars",
"avataaars-neutral",
"big-ears",
"big-ears-neutral",
"big-smile",
"bottts",
"bottts-neutral",
"croodles",
"croodles-neutral",
"fun-emoji",
"icons",
"identicon",
"initials",
"lorelei",
"lorelei-neutral",
"micah",
"miniavs",
"notionists",
"notionists-neutral",
"open-peeps",
"personas",
"pixel-art",
"pixel-art-nuetral",
"shapes",
"thumbs"]

const rotate=[10,20,30,40,50,60,70,80,90,100,110,
120,130,140,150,160,170,180,190,200,210,220,230,
240,250,260,270,280,290,300,310,320,330,340,350,360]

const scale=[110,120,130,140,150,160,170,180,190,200]

const radius=[10,15,20,25,30,35,40,45,50]

const backgroundColors=["b6e4f4","c0aede","d1d4f9","ffd5dc","ffdfbf"]

const translateX =[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,-5,-10,-15,-20,-25,-30,-35,-40,-45,-50,-55,-60,-65,-70,-75,-80]

const translateY =[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,-5,-10,-15,-20,-25,-30,-35,-40,-45,-50,-55,-60,-65,-70,-75,-80]


const frm=document.querySelector('.frm')

const selected_avatarType=document.getElementById("select")
const selected_flip=document.getElementById("flip")
const selected_rotate=document.getElementById("rotate")
const selected_scale=document.getElementById("scale")
const selected_radius=document.getElementById("radius")
const selected_background=document.getElementById("background")
const selected_backgroundType=document.getElementById("backgroundType")
const selected_translateX=document.getElementById("translateX")
const selected_translateY=document.getElementById("translateY")


// sayfa yüklenince çalışacak fonksiyonlar
window.addEventListener('load',e=>{

    loadSelectData()

})



const getData= async ()=>{


    try {
        
        
        const response = await fetch(`https://api.dicebear.com/6.x/${selected_avatarType.value}/svg?flip=${selected_flip.value}&rotate=${selected_rotate.value}&scale=${selected_scale.value}&radius=${selected_radius.value}&backgroundColor=${selected_background.value}&translateX=${selected_translateX.value}&translateY=${selected_translateY.value}`)

    
        if(!response.ok){

            throw new Error("hata var")
        }

        const data =  response

        sendToDom(data)

    } catch (error) {
        console.log(error);
    }


}


// avatar stillerini yükle
const loadSelectData=()=>{


    //avatar seçeneklerini yükle
    avatarType.forEach(element=>{

        document.getElementById('select').innerHTML +=`
        
        <option value="${element}">${element}</option>
        
        `

    })


    //background seçeneklerini yükle
    backgroundColors.forEach((element,index)=>{


        const bg= document.getElementById('background')
        
        bg.innerHTML +=`
        
        <option value="${element}">${element}</option>
        
        `

        bg[index+1].style=`background-color:#${element}`


    })


    //rotate bilgisini yükle
    rotate.forEach(element=>{

        document.getElementById('rotate').innerHTML += `
        
        <option value="${element}">${element}°</option>
        
        `

    })


    //scale bilgisini yükle
    scale.forEach(element=>{

        document.getElementById('scale').innerHTML +=`

        <option value="${element}">${element}%</option>
        
        `
    })

    //radius bilgisini yükle
    radius.forEach(element=>{

        document.getElementById('radius').innerHTML +=`

        <option value="${element}">${element}%</option>
        
        `
    })

    //translate X bilgilerini yükle
    translateX.forEach(element=>{

        document.getElementById('translateX').innerHTML +=`
        <option value="${element}">${element}%</option>
        `
    })

    //translate Y bilgilerini yükle
    translateY.forEach(element=>{

        document.getElementById('translateY').innerHTML +=`
        <option value="${element}">${element}%</option>
        `
    })
}




const sendToDom=(gelenDeger)=>{


    const avatarImg = document.getElementById('avatarImg')
    const avatarHref = document.getElementById('avatarHref')

    avatarHref.href=gelenDeger.url
    avatarImg.src=gelenDeger.url

}



frm.addEventListener('submit',e =>{

    e.preventDefault()

    getData()
})
