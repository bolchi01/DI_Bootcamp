
const checkParam = function (input) {
	const checkInput = new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (typeof input === 'string'){
				resolve(input.toUpperCase())
			} else {
				reject(`error ${input}`)
			}
		}
		, 5000)
	})

	return checkInput;
}

checkParam("hello")
.then(res => console.log(res+res)) //HELLOHELLO
.catch(error => console.log(error))

checkParam(123)
.then(res => console.log(res+res))
.catch(error => console.log(error)) //error 123


