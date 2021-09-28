import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/1.png";
import i2 from "./assets/images/2.png";
import ReactPlayer from 'react-player';
import i4 from "./assets/images/4.png";
import i9 from "./assets/images/9.png";
import i6 from "./assets/images/6.png";
import i8 from "./assets/images/8.png";
import i10 from "./assets/images/10.png";
import i11 from "./assets/images/11.png";
import i12 from "./assets/images/avrillabee.png";
import i13 from "./assets/images/beebaked.png";
import i14 from "./assets/images/beedapper.png";
import i15 from "./assets/images/BeeDevilish.png";
import i16 from "./assets/images/beehippie.png";
import i17 from "./assets/images/BeeMoney.png";
import i18 from "./assets/images/BeeOhazard.png";
import i19 from "./assets/images/BeeWitched.png";
import i20 from "./assets/images/breakfastbee.png";
import i21 from "./assets/images/DontBeeSuspicious.png";
import i22 from "./assets/images/donutking.png";
import i23 from "./assets/images/drunkensailor.png";
import i24 from "./assets/images/icecreambee.png";
import i25 from "./assets/images/nursebee.png";
import i26 from "./assets/images/piratebee.png";
import i27 from "./assets/images/purgebee.png";
import i28 from "./assets/images/shelbysfavoritebee.png";
import i29 from "./assets/images/snowboardbee.png";
import i30 from "./assets/images/sweetbee.png";
import i31 from "./assets/images/vikingbee.png";
import i90 from "./assets/images/90.png";

export const StyledNumberInput = styled.input.attrs((props) => ({
  type: 'number',
  min: 1,
  max: 10,
  defaultValue: props.value,
}))`
border-radius: 50px;
border: none;
background-color: #999000;
padding: 5px;
font-weight: bold;
color: #000000;
width: 50px;
cursor: ;
box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
-webkit-box-shadow: 2px 3px 10px -2px rgba(0, 0, 0, 0.5);
-moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
:active {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}
`;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #000000;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  width: 300px;
  cursor: pointer;
  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 1.0);
  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    -webkit-box-shadow: 2px 3px 20px -2px rgba(100, 0, 250, 0.9);
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: ;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledImg1 = styled.img`
height: 0px;
center
position: fixed;
  @media (min-width: 767px) {
    width: 950px;
    height: 320px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg3 = styled.img`
  width: 300px;
  height: 300px;
  @media (min-width: 767px) {
    width: 300px;
    height: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg4 = styled.img`
border-radius: 50px;
color: #ffffff;
cursor: pointer;
box-shadow: 2px 8px 4px -2px rgba(100, 0, 250, 0.5);
-webkit-box-shadow: 2px 3px 10px -2px rgba(100, 0, 250, 1.0);
-moz-box-shadow: 2px 8px 4px -2px rgba(100, 0, 250, 0.5);
:active {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}
:hover {
  -webkit-box-shadow: 2px 3px 20px -2px rgba(250, 250, 0, 0.9);
}
`;

export const Gallery = styled.div`
  height: 0px;
  position: fixed;
  margin-bottom: 10px;

  .photobanner {
    position: fixed;
    top: 540px;
    right: 0px;
    overflow: hidden;
    white-space: nowrap;
    animation: bannermove 60s linear infinite alternate;

    &:hover {
      animation-play-state: ;
    }
  }

  .photobanner img {
    height: 200px;
    margin: 0 .0em;
  }

  @keyframes bannermove {
    70% {
      transform: translate( -50%, 0);
    }
    70% {
      transform: translate( 50%, 0);
    }
  }
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState(" 1 TBC NFT = .02 ETH");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintQuantity, setMintQuantity] = useState(1)

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Preparing your Twee the Bee NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "0x688db0131c807a3495c23bc1b25726a76ea31f49",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((.02 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("It seems the transaction was cancelled | 1 TBC NFT = .02 ETH");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Woohoo! Your Twee the Bee Bingo NFT is swarming at Opensea.io, go get him!"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen style={{ backgroundColor: "var(--black)" }}>
      <s.Container flex={1} ai={"center"} style={{ padding: 0 }}>
        <s.TextTitle
          style={{ textAlign: "center", fontSize: 42, fontWeight: "bold" }}
        >
          <StyledImg1 alt={""} src={i90}/>
          
        </s.TextTitle>
        <ResponsiveWrapper flex={10} style={{ padding: 0 }}>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <s.TextTitle
              style={{ textAlign: "center", fontSize: 26, fontWeight: "bold" }}

            >
              {data.totalSupply}/10000
              <s.SpacerMedium/>
            </s.TextTitle>
          </s.Container>
          <s.Container
            flex={10}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor: "#000000", padding: 2 }}
          >
            {Number(data.totalSupply) == 10000 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                SOLD OUT!
                </s.TextTitle>
                <s.SpacerMedium />
                <s.TextDescription style={{ textAlign: "center" }}>
                  You can still trade Bee NFTs at {" "}
                  <a
                    target={""}
                    href={"https://opensea.io/collection/the-bee-collaborative"}
                  >
                    The Bee Collaborative
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT WALLET
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.TextDescription style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledNumberInput 
                    value={mintQuantity}
                      onChange={(e) => setMintQuantity(e.target.value) }
                    />
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(mintQuantity);
                        getData();
                      }}
                    >
                      {claimingNft ? "BUZZY..." : `Purchase ${mintQuantity} Bees`}
                    </StyledButton>
                  </s.Container>
                )}
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.TextDescription style={{ textAlign: "center", fontSize: 20 }}>
                   <s.TextDescription style={{ textAlign: "center", fontSize: 16 }}>
                   {" "}
                  <Gallery>
          <div className='photobanner'>
            <img src={i10} alt='' />
            <img src={i26} alt='' />
            <img src={i25} alt='' />
            <img src={i24} alt='' />
            <img src={i23} alt='' />
            <img src={i22} alt='' />
            <img src={i21} alt='' />
            <img src={i20} alt='' />
            <img src={i19} alt='' />
            <img src={i12} alt='' />
            <img src={i31} alt='' />
            <img src={i30} alt='' />
            <img src={i29} alt='' />
            <img src={i28} alt='' />
            <img src={i27} alt='' />
            <img src={i10} alt='' />
            <img src={i12} alt='' />
            <img src={i13} alt='' />
            <img src={i14} alt='' />
            <img src={i15} alt='' />
            <img src={i16} alt='' />
            <img src={i17} alt='' />
            <img src={i18} alt='' />
            <img src={i19} alt='' />
            <img src={i20} alt='' />
            <img src={i21} alt='' />
            <img src={i22} alt='' />
            <img src={i23} alt='' />
            <img src={i24} alt='' />
            <img src={i25} alt='' />
            <img src={i26} alt='' />
            <img src={i10} alt='' />
          </div>
        </Gallery>
                </s.TextDescription>
          {/* <button 
  onClick={() =>  navigator.clipboard.writeText('https://etherscan.io/token/0x688db0131c807a3495c23bc1b25726a76ea31f49')}
>
Click to Copy Etherscan Address | Buy Straight from Contract
</button> */}
          </s.TextDescription>
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerLarge />
          <s.SpacerMedium />
          <div>
            <a href="https://opensea.io/collection/the-bee-collaborative">
<StyledImg4 src={i9} style={{ width: 260, height: 200, padding: 0 }}/>
</a>
........
<a href="https://t.me/TBCToken">
<StyledImg4 src={i11} style={{ width: 260, height: 200, padding: 20 }}/>
</a>
........
<a href="https://opensea.io/collection/tweethebee">
<StyledImg4 src={i8} style={{ width: 260, height: 200 }}/>
</a>
</div>
          {/* <s.TextDescription style={{ textAlign: "center" }}>
                  {" "}
                  <a
                    target={""}
                    href={"https://t.me/TBCToken"}
                  >
                    Telegram
                  </a>
                </s.TextDescription>
                <s.TextDescription style={{ textAlign: "center" }}>
                   {" "}
                  <a
                    target={""}
                    href={"https://discord.gg/Rx2b4JTxJr"}
                  >
                    Discord
                  </a>
                </s.TextDescription> */}
        <s.Container jc={"top"} ai={"center"} style={{ width: "70%" }}>
        <s.SpacerLarge />
          <s.SpacerLarge/>
          <s.SpacerLarge/>
          <s.SpacerLarge/>
          <s.SpacerLarge/>
          <ReactPlayer url='https://youtu.be/HgjwmDoPNx4'/>
          <s.SpacerLarge />
          <s.SpacerLarge />
        </s.Container>
      </s.Container>
      <s.SpacerLarge />
      <s.SpacerLarge/>
      <s.SpacerLarge/>
      <s.SpacerLarge/>
      <s.SpacerLarge/>
  </s.Screen>
  );
}

export default App;
