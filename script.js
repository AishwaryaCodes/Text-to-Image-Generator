const token = "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"

const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("btn");
const clear = document.getElementById("clear");


async function query() {
    image.src = "/loadingGif.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: { Authorization: `Bearer ${token}` },
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function (){
    query().then((response) => {
        const objUrl = URL.createObjectURL(response)
        image.src = objUrl
    });
})

clear.addEventListener('click', function () {
    inputTxt.value = '';  
    image.src = ''; 
});
