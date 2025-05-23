'use client'
import Hero from './../../components/hero2'
import NavBar from './../../components/navbar'
import ImagesComponent from "../../components/imagesComponent";
import Benifits from "../../components/benefits";
import Services from "../../components/services";
import Footer from '@/app/components/footer';
import { useState , useEffect} from "react";

const images = [
    "/openspace.jpg",
    "/openspace1.jpg",
    "/openspace2.jpg",
    "/openspace.jpg"
  ];
  

export default function OpenSpaceRoom(){

    const [fetchedData, setFetchedData] = useState([]);


    // useEffect(() => {
    //     async function fetchingSubscriptions() {
    //       try {
    //         const response = await fetch("http://localhost:8000/ELACO/subcription/get/openspace");
    //         if (!response.ok) {
    //           throw new Error("Error in fetching subscriptions");
    //         }
    //         const data = await response.json();
    //         setFetchedData(data.subscriptions);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //     fetchingSubscriptions();
    //   }, []);

    useEffect(() => {
      async function fetchingSubscriptions() {
        try {
          const response = await fetch(`http://localhost:8000/ELACO/subcription/gg/${type}`);
          if (!response.ok) {
            throw new Error("Error in fetching subscriptions");
          }
          const data = await response.json();
          console.log(data?.subscriptions?.table_id?.descriptpion)
          if(roomType === "openspace"){
            setDescription(
              [
                "7/7 Access",
                "Wi-Fi",
                "Kitchen Access",
                "Coffee (extra)"
              ]
            )
          }
          setFetchedData(data.subscriptions);
        } catch (err) {
          console.error(err);
        }
      }
      fetchingSubscriptions();
    }, []);



    return(
        <>
            <NavBar />
            <Hero />
            <ImagesComponent images={images}/>
            <Benifits subs={fetchedData}/>
            <Services />
            <Footer />
        </>
    )
}