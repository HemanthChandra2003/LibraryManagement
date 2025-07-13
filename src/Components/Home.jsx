import React from 'react'
import '../assets/styles/home.css'

const Home = () => {
  return (
    <>
        <div className="home">
          <div className="img1">
            <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" height={300} />
            <h1>Harry and potter</h1>
            pSet in the backdrop of the Napoleonic era, the novel presents a panorama of Russian society and its descent into the chaos of war. It follows the
          </div>
          <div className="img2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrzU_2C5-ba4-LoLJmF6AQ5rjhsJJ3ff7Ww&s" height={300} />
            <h1>Five on a treasure iland</h1>
            <p>This novel tells the story of a former African-American slave woman who, after escaping to Ohio, is haunted by the ghost of her deceased daughter.</p>
          </div>
          <div className="img3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Hf8LTG2yNVH_82SdwLprgY5RR6b2BJX2TA&s" height={300} />
            <h1>Mocking bird</h1>
            <p>This influential environmental science book presents a detailed and passionate argument against the overuse of pesticides in the mid-20th century.</p>
          </div>
          <div className="img4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwzUWplqEA_y3ejj4QXdRswlWwV1mpTNfaA&s" height={300}/>
            <h1>Black Beauty</h1>
            <p>"Waiting for Godot" is a play that explores themes of existentialism, despair, and the human condition through the story of two characters, Vladimir</p>
          </div>
          <div className="img5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwg2Z0aa2dvl5aRRjFp3FqTjHdu7xs5uL5g&s" height={300} />
            <h1>Ruskin bond</h1>
            <p>Set in Dublin, the novel follows a day in the life of Leopold Bloom, an advertising salesman, as he navigates the city. The narrative, heavily influenced</p>
          </div>
          <div className="img6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWES-NyoKhfQNSsLyBjgybg7Z4CQB80NgtgQ&s" height={300} />
            <h1>Tenali rama</h1>
            <p>This classic novel is a tale of love, revenge and social class set in the Yorkshire moors. It revolves around the intense, complex relationship between Catherine Earnshaw and Heathcliff, an orphan adopted</p>
          </div>
        </div>
    </>
  )
}

export default Home