import btc from '../../assets/Criptomonedas/btc.jpg'
import eth from '../../assets/Criptomonedas/eth.jpg'
import bnb from '../../assets/Criptomonedas/bnb.jpg'
import ada from '../../assets/Criptomonedas/ada.jpg'
import usdc from '../../assets/Criptomonedas/usdc.jpg'
import ust from '../../assets/Criptomonedas/ust.jpg'
import xrp from '../../assets/Criptomonedas/xrp.jpg'
import nft1 from '../../assets/NFTS/nft1.png'
import nft2 from '../../assets/NFTS/nft2.jpg'
import nft3 from '../../assets/NFTS/nft3.png'
import nft4 from '../../assets/NFTS/nft4.png'
import nft5 from '../../assets/NFTS/nft5.png'
import nft6 from '../../assets/NFTS/nft6.png'
import nft7 from '../../assets/NFTS/nft7.png'



export const arregloProductos = [
    {id:1, title:'Bitcoin', price:'$21.200', image: btc , categoria:'Criptomonedas', details:"Bitcoin es la criptomoneda mas famosa y segura del mundo. Fue la pionera en este mundo.", stock:"30"},
    {id:2, title:'Ethereum', price:'$1292', image: eth , categoria:'Criptomonedas', details:"Ethereum es la segunda criptomoneda mas conocida del mercado, cuenta con un sistema de transacciones muy moderno.", stock:"30"},
    {id:3, title:'BNB', price:'$270', image: bnb , categoria:'Criptomonedas', stock:"30", details:"BNB es la criptomoneda de la empresa Binance, el banco de criptomonedas mas grande del mundo."},
    { id: 4, title: 'ADA', price: '$0.39', image: ada, categoria: 'Criptomonedas', stock:"30", details:"ADA es la criptomoneda de la empresa Cardano, cuenta con la primer Blockchain de tercera generacion." },
    {id:5, title:'USDC', price:'$0.98', image: usdc , categoria:'Criptomonedas', stock:"30", details:"UDSC es la segunda Stable Coin mas famosa del mundo."},
    {id:6, title:'UST', price:'$1', image: ust , categoria:'Criptomonedas', stock:"30", details:"UST es la Stable Coin mas famosa del mundo y es la Criptomoneda con mas volumen en el mercado."},
    {id:7, title:'XRP', price:'$0.76', image: xrp , categoria:'Criptomonedas', stock:"30", details:"XRP es la criptomoneda de la empresa Ripple y es un proyecto de software libre. Es una cripto con mucha proyección. "},

    {id:8, title:'BORED APE', price:'$3000', image: nft1 , categoria:'NFTS', stock:"3", details:"Es un NFT de la colección mas famosa del mundo, esta basado en la cadena de bloques de Ethereum la mas segura del mundo."},
    {id:9, title:'UNICORN CRAZY', price:'$6000', image: nft2 , categoria:'NFTS', stock:"2", details:"Este NFT pertenece a una nueva colección muy prometedora del famoso artista Ralph Gugens."},
    {id:10, title:'TECH-GUY', price:'$4500', image: nft3 , categoria:'NFTS', stock:"4", details:"Es un NFT perteneciente a la colección del artista mas reconocido de NFTS del mundo, John Newman."},
    {id:11, title:'BORED APE', price:'$2600', image: nft4 , categoria:'NFTS', stock:"8", details:"Es un NFT de la colección mas famosa del mundo, esta basado en la cadena de bloques de Ethereum la mas segura del mundo."},
    {id:12, title:'BORED APE', price:'$1000', image: nft5 , categoria:'NFTS', stock:"2", details:"Es un NFT de la colección mas famosa del mundo, esta basado en la cadena de bloques de Ethereum la mas segura del mundo."},
    {id:13, title:'MONKEY', price:'$600', image: nft6 , categoria:'NFTS', stock:"13", details:"Este NFT es parte de la exclusiva colección de NFTS Yatch Club."},
    {id:14, title:'RETRO-POP', price:'$200', image: nft7 , categoria:'NFTS', stock:"120", details:"Es un NFT que pertenece a la exlusiva colección de NFTS de Roman Club."},
]