const friends = document.querySelector(".friends");
const chatroom = document.querySelector(".chatroom");

const getFriends = async () => {
  const response = await fetch("./friends.json");
  const data = await response.json();
  for (let [index, i] of data.entries()) {
    const friendDiv = document.createElement("div");
    const statusDiv = document.createElement("div");
    const notificationDiv = document.createElement("div");

    friendDiv.className = "friend";
    statusDiv.className = "status";
    notificationDiv.className = "notification";

    const friendImg = document.createElement("img");
    friendImg.src = i.imgUrl;

    const statusName = document.createElement("b");
    statusName.textContent = i.name;
    const statusMessage = document.createElement("p");
    statusMessage.textContent = i.message;

    const notificationTime = document.createElement("p");
    notificationTime.textContent = i.time;

    statusDiv.appendChild(statusName);
    statusDiv.appendChild(statusMessage);

    notificationDiv.appendChild(notificationTime);

    if (index <= 2) {
      const notificationNumber = document.createElement("div");
      const randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber.toString());
      notificationNumber.className = "notificationNumber";
      notificationNumber.style.setProperty(
        "--notifiactionNumber",
        `'${randomNumber}'`
      );
      console.log(notificationNumber.style);
      notificationDiv.appendChild(notificationNumber);
    }
    friendDiv.appendChild(friendImg);
    friendDiv.appendChild(statusDiv);
    friendDiv.appendChild(notificationDiv);
    friends.appendChild(friendDiv);
  }

  //   friends.innerHTML = coll;
  return data;
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    const messageInput = document.querySelector("#messageInput");
    if (messageInput.value !== "") {
      const messagePopUpDiv = document.createElement("div");
      const messageTextDiv = document.createElement("div");
      const message = document.createElement("p");
      messagePopUpDiv.className = "message-pop-up";
      messageTextDiv.className = "message-text";
      message.textContent = messageInput.value;

      messageTextDiv.appendChild(message);

      messagePopUpDiv.appendChild(messageTextDiv);

      chatroom.appendChild(messagePopUpDiv);

      messageInput.value = "";
    }
  }
});

getFriends();
