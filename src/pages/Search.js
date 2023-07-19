import {useEffect, useState} from 'react';
import { Alert} from 'react-bootstrap';
import API from '../utils/API';

export const Search = () => {
    /*
    1. Fetch breeds list and show inside datalist
    2. Initial fetch 
    3. get what user searching (value)
    4. submit and fetch images 
    5. show them in UI
    */
   const [breeds, setBreeds] = useState([]);
   const [result, setResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        API.getBreedList()
        .then(res => res.json())
        .then(data => setBreeds(data.message))
        .catch(err => console.log(err))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        // call new fetch and get results
        API.getDogsFromSearch(searchValue)
        .then(res => res.json())
        .then(data => {
            console.log('data', data);
            if(data.status ==="error") {
                throw new Error(data.message);
            }
            setResult(data.message);
            setErrorMessage('');
        }) // [] => [d]
        .catch(err => {
            console.log(err)
            setErrorMessage(err.message);
            setResult([]);
        })  
    }
  return (
    <div className='container pt-5'>
        <h2 className='text-center'>Search By Breed!</h2>

        <div>
            <form className="text-right">
                <label htmlFor='dog-breeds' className="w-100 mb-1">Breed Name:</label>
                <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className="w-100 mb-1" list='dog-breeds' placeholder='Search dog images ...'/>     
                           <datalist id="dog-breeds">
                             { breeds.map((breed, idx) => {
                                let id = breed + idx;
                                    return <option value={breed} key={id}/>
                             })
                                } 
                            </datalist>
                <button onClick={handleSearch} className='btn btn-success p-1' type='submit'>Search</button>
            </form>
        </div>

        {errorMessage && <Alert className='mb-3 mt-3'>{errorMessage}</Alert>}
        <div className='mb-3 mt-3'>
           {
            result.map((imgUrl, idx) => {
                let id = imgUrl + idx;
               return <img src={imgUrl} alt={imgUrl} key={id}/>
            })
           }
        </div>
    </div>
    

  )
}
