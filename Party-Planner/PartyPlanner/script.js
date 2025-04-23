document.addEventListener('DOMContentLoaded', () => {
    const partyForm = document.getElementById('party-form');
    const partyDateInput = document.getElementById('party-date');
    const partyDescriptionInput = document.getElementById('party-description');
    const inviteMessageInput = document.getElementById('invite-message');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const guestList = document.getElementById('guest-list');

    let guests = [];

    partyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const partyDate = partyDateInput.value;
        const partyDescription = partyDescriptionInput.value;
        const inviteMessage = inviteMessageInput.value;
        const name = nameInput.value;
        const surname = surnameInput.value;

        if (name && surname) {
            guests.push({ name, surname });
            updateGuestList();
            clearInputs();
        } else {
            alert('Please enter both name and surname.');
        }

        console.log(`Party Date: ${partyDate}`);
        console.log(`Party Description: ${partyDescription}`);
        console.log(`Invite Message: ${inviteMessage}`);
    });

    function updateGuestList() {
        guestList.innerHTML = '';
        guests.forEach(guest => {
            const listItem = document.createElement('li');
            listItem.textContent = `${guest.name} ${guest.surname}`;
            guestList.appendChild(listItem);
        });
    }

    function clearInputs() {
        nameInput.value = '';
        surnameInput.value = '';
    }
});