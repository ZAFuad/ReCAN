const products = [
  {
    _id:"12345",
    manufacturerID: "124254245zxfzw213",
    size: "100mL",
    weight_with_content: "500gm",
    weight_without_content: "100gm",
    content: "coca-cola",
    geo_location: "123-134-234",
    manufacturing_unit: "CocaCola Ltd",
    recycled_time: "1",
    recycle_rate: "80%",
    recyclerID: "0154615",
  },
  {
    _id:"678910",
    manufacturerID: "udgfauihrui63",
    size: "200mL",
    weight_with_content: "700gm",
    weight_without_content: "200gm",
    content: "fanta",
    geo_location: "123-134-234",
    manufacturing_unit: "Fanta Ltd",
    recycled_time: "1",
    recycle_rate: "80%",
    recyclerID: "0154df615",
  },
];

const bins = [
  {
    binID: "sfredf2425",
    geo_location: "123-134-234",
    collectorID: "1246781bdj",
  },
];

const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Aafreen Khan",
  timeStamp: "12:47 PM",
  recentText: "Good Day!",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Sujitha Mathur",
  timeStamp: "11:11 PM",
  recentText: "Cheer up, there!",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "Anci Barroco",
  timeStamp: "6:22 PM",
  recentText: "Good Day!",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Aniket Kumar",
  timeStamp: "8:56 PM",
  recentText: "All the best",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}, {
  id: "28694a0f-3da1-471f-bd96-142456e29d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
}];

export default { data,bin, products};