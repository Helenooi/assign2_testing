import React, {useEffect} from "react";
import "../css/AboutPenang.css";
import NavbarLanding from "../components/navbarLanding.jsx";
import Footer from "../components/footer.jsx";

function AboutPenang(){
    useEffect(() => {
        // Add the 'custom-page' class to the body when this component is rendered
        document.body.classList.add('AboutPenang');
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.classList.add("aboutinput"));
    
        // Cleanup: Remove the class when the component is unmounted
        return () => {
          document.body.classList.remove('AboutPenang');
          inputs.forEach(input => input.classList.remove("aboutinput"));
        };
      }, []);

    return(
        <>
            <NavbarLanding/>
            <div className = 'aboutbox'>
                <input type="radio" id="insightbutton" value="1" name="tractor" defaultChecked/>    
                <input type="radio" id="historybutton" value="2" name="tractor" />      
                <input type="radio" id="transportbutton" value="3" name="tractor" />
                <input type="radio" id="weatherbutton" value="4" name="tractor" />
                <input type="radio" id="preparebutton" value="5" name="tractor" />
  
                <nav className = "AboutNav" >   
                    <label for="insightbutton" >Insight</label>
                    <label for="historybutton" >History</label>
                    <label for="transportbutton" >Transportation</label>
                    <label for="weatherbutton" >Weather</label>
                    <label for="preparebutton" >Preparation</label>
                </nav>
  
                <article className="insightarticle">
                    <h2 className="abouth2">
                    <img src={'AboutPenang/intro.jpg'} alt="insight" />
                    </h2>                    
                    <p>Penang is one of the states in Malaysia located on the northwest coast of Peninsular Malaysia with its capital George Town, located on Penang Island. Penang is a special state in Malaysia because it consists of two parts which are Penang Island and Seberang Perai. Penang is a thriving vacation destination with many cultural sights and natural sceneries listed as UNESCO World Heritage Site. It is a must-visit destination when traveling to Malaysia, and it offers a variety of iconic dishes from different cultural heritages. This has also made Penang another name, the food lover’s paradise in Malaysia. </p>
                </article>
  
                <article className="historyarticle">
                    <h2 className="abouth2">
                    <img src={'AboutPenang/history.jpg'} alt="history" />
                    </h2>  
                    <p>Before British colonization, Penang was part of the Sultanate of Kedah. In 1786, Francis Light from the British East India Company secured Penang island from the Sultan of Kedah through a treaty. Under British settlement, Penang Island was called Prince of Wales Island and became part of the Straits Settlements together with Singapore and Malacca in 1826. Seberang Perai was also incorporated into the British colony by acting as a base for Penang Island. Seberang Perai plays a significant role by providing agriculture and also acting as a trade route connecting Penang Island to the mainland. </p>
                    <p>In 1948, Penang became part of the Federation of Malaya together with Johor, Kedah, Kelantan, Malacca, Negeri Sembilan, Pahang, Penang, Perak, Perlis, Selangor and Terengganu. On 31 August 1957, the Federation of Malaya gained independence from British rule, marking the birth of a new nation. In 1963, the Federation of Malaya expanded to include Sabah, Sarawak, and Singapore to form Malaysia. However, Singapore was separated from Malaysia in 1965, leaving the remaining states to continue as Malaysia until the present day. </p>
                </article>
  
                <article className="transportationarticle">
                    <h2 className="abouth2">
                    <img src={'AboutPenang/transportation.jpg'} alt="transport" />
                    </h2>                    
                    <h3>TRAVEL TO PENANG</h3>
                    <h4>Air</h4>
                    <p>Penang offers a wide range of flight options that connect to both domestic and international airports. There a numerous daily flights from major cities in Malaysia such as Kuala Lumpur, Langkawi, and Johor Bahru. Penang International Airport is located on Penang Island and is about 20km from the city centre. </p>
                    <h4>Road</h4>
                    <p>Traveling to Penang by road is efficient and convenient as there is a North-South Highway that connects Penang to major cities on the West side of Peninsular Malaysia. This highway runs through 7 states and connects the Thailand and Singapore border so it is easy to come to Penang by road. It takes around 5 hours from Kuala Lumpur to Penang depending on traffic and road conditions. </p>
                    <h4>Railway</h4>
                    <p>Butterworth Railway Station provides another transportation to reach mainland Penang. This railway station connects to the mainline that stretches from Bangkok, Thailand to Johor Bahru, Malaysia. It provides the traveler an additional choice to travel here if they want to avoid the hassle of driving or long bus rides. Besides that, travelers can enjoy the picturesque views of lush greenery and paddy fields along the railway. </p>                   
                    <a href="https://malaysiatrains.com/butterworth-railway-station/" target="_blank" className = "linkbutton"><bu>Butterworth Railway Station Website</bu></a>
                    <h4>Passenger Ferry</h4>
                    <p>There is an alternative way to travel to Penang Island from the mainland which is through the ferry. Sultan Abdul Halim Ferry Terminal provides a ferry service that plies between Penang Island and the mainland by just a 10-minute ferry ride. It is easy to reach here as it is located next to the Butterworth Railway Station and Penang Sentral. The operating intervals for the ferry are 20 minutes during peak hours and 30/60 during non-peak hours. </p>
                    <a href="https://www.penangport.com.my/services/ferry-services" target="_blank" className="linkbutton"><bu>Ferry Schedule</bu></a>
                    <h3>EXPLORING PENANG</h3>
                    <h4>Taxi</h4>
                    <p>Taxi is a widely used transportation that is available all around Penang. They are easily accessible in areas like hotels, shopping mall, and popular tourist attractions. It is suggested to ask for the fare before starting your journey to avoid any misunderstanding. Negotiation can be done if you feel that the prices quoted by the taxi driver are too high for you. </p>
                    <h4>E-hailing Service</h4>
                    <p>E-hailing service is also quite popular in Penang nowadays. E-hailing apps such as Grab can be downloaded from PlayStore or AppStore to book a ride from anywhere in Penang. It is more convenient as the pricing is known upon booking the ride and negotiation can be avoided. Other than that, Grab often provides discounts for first-time users or during special events. The payment method for E-hailing can be made through various ways such as cash, credit, or debit card. </p>
                    <h4>Bus</h4>
                    <p>Two types of bus services operate in Penang which are Rapid Penang and CAT (Central Area Transit) bus. Rapid Penang is a public bus service that covers the island and mainland areas, making it an excellent option for budgeting travelers. The routes and schedules are displayed at terminals and bus stops and travelers should inform the driver about their destination to have the exact fare to pay unless they have Mutiara Card. The CAT bus operates within George Town and it is free to board. It allows travelers to go around George Town attractions without any cost. </p>
                    <a href="https://myrapid.com.my/bus-train/rapid-penang/" target="_blank" className="linkbutton"><bu>Rapid Penang Website</bu></a>
                    <h4>Trishaw</h4>
                    <p>Trishaws, an iconic symbol of Penang, offers a nostalgic and leisurely way to explore George Town’s charming streets. These pedal-powered vehicles provide a unique perspective on the city, allowing travelers to soak in the sights at a relaxed pace. Trishaw rides are more enjoyable on short distances, such as visiting nearby attractions or exploring areas with limited vehicle access. The average rate of RM40-50 per hour is reasonable for a cultural experience, but agreeing on the fare beforehand is essential. Drivers often share local stories and recommendations, making the ride more engaging.</p>
                    <h4>Car Rental</h4>
                    <p>Car rentals are ideal for travelers who prioritize flexibility and want to explore Penang at their own pace. Whether visiting beaches, hill stations, or local markets, having a car ensures convenience and time savings. However daily rental rates are competitive, and most services require a deposit. Many hotels can assist with car rental arrangements, ensuring a hassle-free process for guests.</p>
                    <h4>Bike/Bicycle Rental</h4>
                    <p>Exploring Penang by bicycle or motorbike is economical and enjoyable, especially for adventurers who want to experience the island’s charm up close. Bicycle rental services are abundant in George Town and along Batu Ferringhi, offering travelers a chance to explore at a leisurely pace. For those who prefer motorbikes, rental shops provide affordable options for zipping around the island. Bike-sharing systems also operate in urban areas, making picking up and dropping off bikes at designated stations easy. This mode of transport is perfect for short distances, allowing travelers to appreciate Penang’s scenic views and vibrant streets.</p>
                </article>
  
                <article className="weatherarticle">
                    <h2 className="abouth2">
                    <img src={'AboutPenang/sunny.jpg'} alt="weather" />
                    </h2>  
                    <p>Penang experiences a tropical rainforest climate characterized by warm temperatures ranging from 24 to 32 degree Celsius and high humidity throughout the year. Penang weather is slightly different depending on the monsoon season, which is the Southwest Monsoon and Northeast Monsoon. The Southwest Monsoon starts from May to September bringing a drier condition while the Northeast Monsoon starts from November to March bringing heavier rainfall. The best time to visit Penang is between April and August because of its comfortable weather and minimal rainfall.</p>
                </article>

                <article className="preparearticle">
                    <h2 className="abouth2">
                    <img src={'AboutPenang/prepare.jpg'} alt="prepare" />
                    </h2>                      
                    <h4>Outfit</h4>
                    <p>The right clothing is essential due to the tropical climate in Penang. Short-sleeved shirts, shorts, or lightweight dresses are suitable for daytime activities to keep your body cool on a sunny day. For rainy days, especially during the monsoon season (November to March), an umbrella or a waterproof jacket is important to keep you dry and comfortable while exploring Penang without disruption. If you are going to visit places of worship, make sure that you dress modestly and respectfully. </p>
                    <h4>Communication</h4>
                    <p>Malay is the official language of Malaysia but most of the locals are also proficient in English. Although English is sufficient for most situation but sometimes local languages such as Mandarin and Malay could help you to engage with the community and also enhance your experience. “Terima Kasih” (Malay) and “Xie Xie” (Mandarin) which means “Thank You” are one of the useful phrases to use here. </p>
                    <h4>Health and Safety</h4>
                    <p>A small first-aid kit can help you to enjoy your vacation without any worries or concerns. Basic supplies like plasters, antiseptic cream, and medication for headaches and stomachaches should be included in the first-aid kit. Insect-repellent patches are also essential especially during the rainy season or during the evening as there will be many mosquitoes that may spread diseases such as dengue fever. If there is an emergency case, call 999 for help. </p>
                    <h4>Electronics and Connectivity</h4>
                    <p>Take note that the electrical supply in Malaysia is between 220 to 240 volts. Other than that, make sure that you bring the necessary adapters to charge your device, as Malaysia uses type G socket adapters. If you are traveling internationally, a local SIM card or international roaming plan can be purchased to get affordable calls and data so that you can get connected although you are outdoors. No worries if you do not have both of these as most of the hotels and restaurants in Penang will provide free Wi-Fi for their customers. </p>
                </article>
            </div>
        
            <div class="containers">
                <div class="child-containers">
                    <img src="AboutPenang/background.jpg" alt="pic 1"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background2.jpg" alt="pic 2"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background3.jpg" alt="pic 3"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background4.jpg" alt="pic 4"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background5.jpg" alt="pic 5"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background6.jpg" alt="pic 6"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background7.jpg" alt="pic 7"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background8.jpg" alt="pic 8"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background9.jpg" alt="pic 9"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background10.jpg" alt="pic 10"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background11.jpg" alt="pic 11"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background12.jpg" alt="pic 12"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background13.jpg" alt="pic 13"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background14.jpg" alt="pic 14"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background15.jpg" alt="pic 15"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background16.jpg" alt="pic 16"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background17.jpg" alt="pic 17"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background18.jpg" alt="pic 18"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background19.jpg" alt="pic 19"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background20.jpg" alt="pic 20"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background21.jpg" alt="pic 21"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background22.jpg" alt="pic 22"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background23.jpg" alt="pic 23"/>
                </div>
                <div class="child-containers">
                    <img src="AboutPenang/background24.jpg" alt="pic 24"/>
                </div>
            </div>

            <div class="space-box"></div>
            
            <Footer />
        </>        
    );
}

export default AboutPenang;