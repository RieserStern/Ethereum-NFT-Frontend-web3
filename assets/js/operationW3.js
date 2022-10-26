// import web3 from 'web3'
const totalAmount = 6666;
let mintedAmount = 198;

window.addEventListener('load', function() {

    $(".css-1a9ouqi").on("click", async function() {
        alert('gg');
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();

        // let address = await window.web3.eth.getAccounts();
        // let balance = await window.web3.eth.getBalance(address[0]);
        // let result = balance / 1000000000000000000;
        // $("#ethBalance").text(result);
        // $(".connectbtn").text("CONNECTED");

    })
    $(".s-email-form-button").on("click", async function() {
        alert('gg');
        window.web3 = new Web3(window.web3.currentProvider);
        await window.ethereum.enable();

        const web3 = new Web3(window.ethereum);


        const NameContract = web3.eth.Contract(contract_abi, contract_address);
        // let address = await window.web3.eth.getAccounts();
        // let balance = await window.web3.eth.getBalance(address[0]);
        // let result = balance / 1000000000000000000;
        // $("#ethBalance").text(result);
        // $(".connectbtn").text("CONNECTED");

    })

    // $(".connectbtn").text("CONNECT");
    // $(".mintedAmunt").text(restAmount + '/' + totalAmount);
    // Load WEB3
    // Check wether it's already injected by something else (like Metamask or Parity Chrome plugin)
    // if (typeof web3 !== 'undefined') {
    //     window.web3 = new Web3(web3.currentProvider);

    //     // Or connect to a node
    // } else {
    //     window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // }

    // // Check the connection
    // // if (!window.web3.isConnected()) {
    // //     console.error("Not connected");

    // // }
    // window.web3.eth.getAccounts().then(result => { console.log(result) });
    // // console.log(result);
    // var accountInterval = setInterval(function() {
    //     if (web3.eth.accounts[0] !== account) {
    //         account = web3.eth.accounts[0];
    //         document.getElementById("address").innerHTML = account;
    //     }
    // }, 100);
    $(".s-font-body").on("click", async function() {
        alert('gg');
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();

        // let address = await window.web3.eth.getAccounts();
        // let balance = await window.web3.eth.getBalance(address[0]);
        // let result = balance / 1000000000000000000;
        // $("#ethBalance").text(result);
        // $(".connectbtn").text("CONNECTED");

    })
});





// $("#nftBuy").on("click", function() {

//     let restAmount = 2000;
//     let mintAmount = $("#mintAmount").val();
//     let cost = 0.0017;
//     if (mintAmount > restAmount) {
//         $("#nftBut").text("BUY");
//         $("#nftBut").attr(onclick, "window.location.href='https://Opensea.io';");
//         $("#mintAmount").val("0");
//         $(".mintedAmunt").text("SOLD OUT");


//     } else {
//         $("#nftBut").text("OPENSEA");
//         $("#nftBut").removeAttr("onclick");
//         console.log(parseFloat(cost) * parseInt(mintAmount));
//         $(".nftCost").text(parseFloat(cost) * parseInt(mintAmount));
//         // $("#mybar").value("")
//     }
// })