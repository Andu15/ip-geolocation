const $form = document.querySelector('#form');
const $inputIp = document.querySelector('#ip');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');
const $cleanBtn = document.querySelector('#clean-btn');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd53b43b356msh4db0f5e6c6979f0p122c10jsnf86d585b0941',
		'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
	}
};

const fetchIp = (ip) => {
  return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, options)
  .then(response => response.json())
	.catch(err => console.error(err));
}

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { value } = $inputIp
  if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')
  $submit.innerText = "Enviando..."

  const ipInfo = await fetchIp(value)

  if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
  $submit.innerText = "Buscar información de la IP"
})

$cleanBtn.addEventListener('click', () => {
  $cleanBtn.innerText = "Limpiando..."
  $form.reset();
  $results.innerHTML = '';
  $cleanBtn.innerText = "Limpiar registro"
})
