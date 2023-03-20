// Onload
// Fetch All Pokemons
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(
        function (response) {
            if (response.status != 200) {
                console.log('Error: ' + response.status);
                return;
            }

            response.json().then(
                function (data) {
                    const pokemons = data.results;
                    pokemons.forEach(pokemon => {
                        document.getElementById('pokemonList')
                            .insertAdjacentHTML('beforeend',
                                `                                
                            <div class="max-w-sm p-6 bg-white border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">${pokemon.name}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <a 
                                onclick='detail("${pokemon.url}")'
                                href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                    More detail
                                </a>
                            </div>

                                `
                            );
                    });
                }
            );
        }
    )

    .catch(function (err) {
        console.log(err);
    });

function detail(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {

            document.getElementById('Detail').innerHTML = ''

            document.getElementById('Detail')
                .insertAdjacentHTML('beforeend',
                    `
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg my-4 block mx-auto shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg w-32 block mx-auto" src='${pokemon.sprites.front_default}' alt="" />
                    </a>
                    <div class="px-5 pb-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-bold text-3xl">${pokemon.name}</h5>
                        <h3 class="text-center text-sm font-semibold">Biography</h3>
                        <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Height
                                    </th>
                                    <td class="px-6 py-4">
                                    ${pokemon.height}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Weight
                                    </th>
                                    <td class="px-6 py-4">
                                    ${pokemon.weight}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Abilities
                                    </th>
                                    <td class="px-6 py-4">
                                    ${pokemon.abilities[0].ability.name}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Abilities
                                    </th>
                                    <td class="px-6 py-4">
                                    ${pokemon.abilities[1].ability.name}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Type
                                    </th>
                                    <td class="px-6 py-4">
                                    ${pokemon.types[0].type.name}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                    </div>
                    </div>
                    `
                );
        });
    })
}