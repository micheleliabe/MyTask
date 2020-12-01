# MyTask!

MyTask é um pequeno projeto de lista de tarefas. O objetivo é ser um sistema simples e foi desenvolvido para fins de estudo.

https://micheleliabe.github.io/MyTask/pages/index.html



# Frameworks
Neste projeto, foi utilizado alguns frameworks open source, sendo eles **Bootstrap4!**, **SweetAlert2!** 


https://sweetalert2.github.io/

https://getbootstrap.com/docs/4.0/getting-started/introduction/

# Como utilizar o SweetAlert2
Primeiro adicione uma referencia à biblioteca utilizando uma das opções abaixo:

``npm install sweetalert2``

Ou utilize a CDN
```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
```

Em seguida faça uma chamada aos arquivos necessários

```html
<script src="sweetalert2.all.min.js"></script>  
<!-- Optional: include a polyfill for ES6 Promises for IE11 --> 
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
```

Agora basta fazer uma chamada da função do SweetAlert
```javascript
Swal.fire({ 
	title: 'Error!', 
	text: 'Do you want to continue', 
	icon: 'error', 
	confirmButtonText: 'Cool'
})
```
