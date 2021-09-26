import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/1.png";
import i2 from "./assets/images/2.png";
import ReactPlayer from 'react-player';
import i3 from "./assets/images/3.png";

export const StyledNumberInput = styled.input.attrs((props) => ({
  type: 'number',
  min: 1,
  max: 1000,
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
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 340px;
    height: 240px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg2 = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 900px;
    height: 260px;
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

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Make Payment or Tip ScrawnyViking | 1 TWEE = .05 ETH");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintQuantity, setMintQuantity] = useState(1)

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Preparing your Bee NFT and Sending Payment/Tip to TWECryptoDev...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: "285000",
        to: "0x688db0131c807a3495c23bc1b25726a76ea31f49",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((.05 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("It seems the transaction was cancelled | 1 TWEE = .05 ETH");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Your Payment/Tip for TWEcryptoDev's Services has completed!"
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
      <s.Container flex={1} ai={"center"} style={{ padding: 50 }}>
        <s.TextTitle
          style={{ textAlign: "center", fontSize: 32, fontWeight: "bold" }}
        >
          TWECryptoDev "ScrawnyViking"<p/> 
          Fullstack Blockchain Development
          
        </s.TextTitle>
        <s.TextTitle style={{ textAlign: "center" }}>
                Knowledge | Truth | Understanding
                </s.TextTitle>
        <ResponsiveWrapper flex={10} style={{ padding: 2 }}>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg1 alt={"example"} src={i1} />
            <s.SpacerSmall/>
            <s.TextSubTitle style={{ textAlign: "center" }}>
                  Tomorrow Won't Exist... <p/>If There's Never a Right Now{" "}
                  <a
                    target={""}
                    href={"https://TomorrowWontExist.com"}
                  >
                    <p/>LiveInTheNowMovement
                  </a>
                </s.TextSubTitle>
            <StyledImg2 alt={"example"} src={i2} />
            <s.TextTitle
              style={{ textAlign: "center", fontSize: 26, fontWeight: "bold" }}
            >
              {/* {data.totalSupply}/10000 */}
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
                  You can still trade Bee NFTs {" "}
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
                        <s.SpacerSmall />
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
                      {claimingNft ? "BUSY..." : `SEND  ${mintQuantity} TWEE`}
                    </StyledButton>
                  </s.Container>
                )}
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.TextDescription style={{ textAlign: "center", fontSize: 18 }}>
            Team TWE's Payment Center includes a Free Bee NFT for every .05 ETH
          </s.TextDescription>
        <s.TextDescription style={{ textAlign: "center", fontSize: 14 }}>
          Opt Out and send Payments/Tips directly to TWECryptoDev<p/>
          <button 
  onClick={() =>  navigator.clipboard.writeText('0x2cb473fDdEBDe10c66BC2312b6b6109F594ef56d')}
>
Click to copy Wallet Address
</button>
          </s.TextDescription>
          <s.SpacerLarge />
          <StyledImg3 alt={"example"} src={i3} />
          <s.TextDescription style={{ textAlign: "center" }}>
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
                </s.TextDescription>
          <s.SpacerMedium />
                <s.TextDescription style={{ textAlign: "center" }}>
                  Participate in our NFT TBC Token Presale Event {" "}
                  <a
                    target={""}
                    href={"https://opensea.io/collection/tweethebee"}
                  >
                    Twee the Bee Special Edition Collection
                  </a>
                </s.TextDescription>
        <s.Container jc={"top"} ai={"center"} style={{ width: "70%" }}>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  Check out the Bee Charity / Rewards Token {" "}
                  <a
                    target={""}
                    href={"https://tbc.exchange"}
                  >
                    The Bee Collaborative
                  </a>
                </s.TextDescription>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  Save the Bees with NFTs and Play BEEingo {" "}
                  <a
                    target={""}
                    href={"https://tomorrowwontexist.github.io/tbcnft/"}
                  >
                    Buy your BEEingo NFT
                  </a>
                </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription style={{ textAlign: "center", fontSize: 14 }}>
            *.*.*TBC Token and $1000 Daily NFT BEEingo Launching Soon*.*.*
          </s.TextDescription>
          <s.SpacerMedium />
          <ReactPlayer url='https://youtu.be/HgjwmDoPNx4' />
        </s.Container>
      </s.Container>
    <s.SpacerMedium />
    <s.TextDescription style={{ textAlign: "center", fontSize: 14 }}>
            *.*.*This custom DApp will be upgraded frequently*.*.*<p/>
            ***More Instructional Videos are on the way***
          </s.TextDescription>
  </s.Screen>
  );
}

export default App;
