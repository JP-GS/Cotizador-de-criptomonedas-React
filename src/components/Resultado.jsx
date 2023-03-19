import styled from "@emotion/styled"

const ResultadoBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: start;
    color: #fff;
    font-family: 'Lato', sans serif;
    gap: 1rem;
    margin-top: 20px;
`;

const Imagen = styled.img `
    display: block;
    width: 120px;
`;
const Texto = styled.p `
    font-size: 18;    
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p `
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

const resultado = ({resultado}) => {
    const { PRICE, CHANGEPCT24HOUR, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE } = resultado
  return (
    <ResultadoBox>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt='Imagen Cripto'
        />
        <div>
            <Precio>El precio es: <span>{PRICE}</span></Precio>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Variación últimas 24 hs: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </ResultadoBox>
  )
}

export default resultado