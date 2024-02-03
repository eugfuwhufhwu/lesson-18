import getData from './actions/getData.mjs'
import postData from './actions/postData.mjs'

const form = document.querySelector('form')
const buttonGet = document.querySelector('.get')
const buttonPost = document.querySelector('.post')
const list = document.querySelector('.profiles')

const URL = 'http://localhost:3000/USERS'

buttonPost.addEventListener('click', e => {
	try {
		e.preventDefault()
		const data = new FormData(form)
		const user = {
			form: data.get('name'),
			color: data.get('email')
		}

		postData(URL, user)
		console.log(form, color)
		form.reset()
	} catch (error) {
		console.error(error)
	}
})

buttonGet.addEventListener('click', async e => {
	e.preventDefault()
	const users = await getData(URL)
	users.forEach(user => {
		if (user.form == "rectangle") {
			list.insertAdjacentHTML(
				`beforeend`,
				`
				<div class="rectangle" style="background: ${user.color}"></div>
			`
			)
		}
		else if (user.form == "square") {
			list.insertAdjacentHTML(
				`beforeend`,
				`
				<div class="square" style="background: ${user.color}"></div>
			`
			)
		}
		else if (user.form == "circle") {
			list.insertAdjacentHTML(
				`beforeend`,
				`
				<div class="circle" style="background: ${user.color}"></div>
			`
			)
		}
	})
})
