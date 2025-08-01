let table = document.querySelector(`table tbody`);
let phoneName = document.querySelector(`#phoneName`);
let phonePrice = document.querySelector(`#phonePrice`);
let phoneQty = document.querySelector(`#phoneQty`);
let phones = [];

let showPhones = () => {
  table.innerHTML = ``;
  phones.forEach((el, index) => {
    table.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${el.qty}</td>
            <td><button class="btn btn-danger" onclick="deletePhone(${index})">Remove</button></td>
        </tr>`;
  });
};
let addPhone = () => {
  let index = phones.findIndex((el)=> el.name === phoneName.value)
  if (index == -1) {
    let newObj = {
      name: phoneName.value,
      price: +phonePrice.value,
      qty: +phoneQty.value,
    };
    phones.push(newObj);
    showPhones();
    alert(`The phone was added successfully`);
  } else
  {
    phones[index].qty += +phoneQty.value
    showPhones();
    alert(`Quantity updated for existing phone`);
  }

};
let deletePhone = (index) => {
  ifConfirmed = confirm(`Are you sure you want to delete this product ?`);
  if (ifConfirmed == true) {
    phones.splice(index, 1);
    showPhones();
    alert(`Product deleted successfully`);
  } else {
    alert(`Deletion has been undone`);
  }
};
