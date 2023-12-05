		
		const names =[
				{
					name:'majid',
					de:" مطور صفحات الويب",
					imgs:'./images/friend-01.jpg',
					textCont:'majidmajidmajidmajidmajidmajidmajidmajidmajidmajidmajidmajid',
					},
				
				
				{
					name:'majid1',
					de:" مطور صفحات ",
					imgs:'./images/friend-02.jpg',
					textCont:'majidmajidmajidmajidmajidmajidmajidmajidmajidmajidmajidmajid',
					},
				{
					name:'najd1',
					de:" الرسم ", 
					imgs:'./images/n-1.jpg',
					textCont:'najd1najd1najd1najd1najd1najd1najd1najd1',
					},
	/* 			{
					name:'majid3',
					de:" مطور  الويب", 
					imgs:'./images/friend-03.jpg',
					textCont:'majidmajidmajidmajidmajidmajidmajidmajidmajidmajidmajidmajid',
					},
					
					{
					name:'majid4',
					de:" majid4", 
					imgs:'./images/friend-03.jpg',
					textCont:'majid588787jidmajidmajid',
					},{
					name:'majid5',
					de:" majid5", 
					imgs:'./images/friend-03.jpg',
					textCont:'maji888888888565867jidmajidmajidmajidmajidmajidmajid',
					},{
					name:'majid6',
					de:" majid6", 
					imgs:'./images/friend-03.jpg',
					textCont:'majidmajidmajidm8888888888888idmajidmajid',
					},{
					name:'majid7',
					de:"majid7 ", 
					imgs:'./images/friend-03.jpg',
					textCont:'majiidmajidmajid',
					},{
					name:'majid8',
					de:" majid8", 
					imgs:'./images/friend-03.jpg',
					textCont:'majidmaji11111111111111dmajidmajid',
					}, */
		]
		
		
		let index = 0;
		let indexLengthNames = names.length - 1;
			let box = document.querySelector('.box'),
					imgs = box.querySelector('img')
					h2 = box.querySelector('h2')
					p = box.querySelector('p')
					textContentText = box.querySelector('.text')
					iconLeft = box.querySelector('.left')
					iconRight = box.querySelector('.right')
					input = box.querySelector('button')
		
/* 
			iconRight.addEventListener('click',()=>{
				 chekNames()
						let uNumber = names[index++]
						imgs.src =  uNumber.imgs
						h2.textContent = uNumber.name;
						p.textContent = uNumber.de;
						textContentText.textContent = uNumber.textCont;
					} );
				iconLeft.addEventListener('click',()=>{
				 chekNames()
						let uNumber = names[index--]
						imgs.src =  uNumber.imgs
						h2.textContent = uNumber.name;
						p.textContent = uNumber.de;
						textContentText.textContent = uNumber.textCont;
					} );
				
				
			
				input.addEventListener('click',()=>{
						let uNumberRandom = Math.floor(Math.random()* indexLengthNames);
						imgs.src =  names[uNumberRandom].imgs
						h2.textContent = names[uNumberRandom].name;
						p.textContent = names[uNumberRandom].de;
						textContentText.textContent = names[uNumberRandom].textCont;
					} );
					
					
			
			
			function chekNames(){
				
				if(index > names.length - 1){
					index = 0
				}else if( index < 0){
					index = names.length - 1
				}
			}
		 */
			
		
			
			
			
			
			window.addEventListener('DOMContentLoaded',function(){
				showNames()
			})
			
			function showNames(){
				imgs.src =  names[index].imgs
				h2.textContent = names[index].name;
				p.textContent = names[index].de;
				textContentText.textContent = names[index].textCont;
			}
			
			
			
			
			
			iconRight.addEventListener('click',()=>{
				index++
				if(index > names.length - 1){
					index = 0
				}
				showNames()
			})
			iconLeft.addEventListener('click',()=>{
				index--
				if(index < 0){
					index = names.length - 1;
				}
				showNames()
			})
			input.addEventListener('click',()=>{
				index = Math.floor(Math.random() * names.length)
				showNames()
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			