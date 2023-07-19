const API = {
    getRandomDogImage() {
       return fetch('https://dog.ceo/api/breeds/image/random');
    },
     getBreedList() {
       return fetch('https://dog.ceo/api/breeds/list')
    },
    getDogsFromSearch(breed) {
        return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    }
}
export default API;