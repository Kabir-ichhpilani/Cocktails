import {cocktailLists, mockTailLists} from "../../constants/index.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";


const Cocktails = () => {
    useGSAP(()=>{
       const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
              },
       });
       timeline.from("#c-left-leaf", {
           x: -100,y:100
       })
        timeline.from("#c-right-leaf", {
              x: 100,y:100

        })

    });
    return (
       <section id="cocktails" className="noisy">
           <img src="/images/cocktail-left-leaf.png" id="c-left-leaf"/>

           <img src="/images/cocktail-right-leaf.png" id="c-right-leaf"/>
            <div className="list">
                <div className="popular">
                    <h2>Most Popular Drinks:</h2>
                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>

                                        <p>{country} | {detail}</p>

                                    </div>
                                    <span>-{price}</span>

                                </li>


                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Loved Mocktails:</h2>
                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>

                                    <p>{country} | {detail}</p>

                                </div>
                                <span>-{price}</span>

                            </li>


                        ))}
                    </ul>
                </div>
            </div>

       </section>
    )
}
export default Cocktails
