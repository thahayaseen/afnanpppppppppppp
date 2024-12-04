// At the top of your file, add:
let productTypes = []; // This will store our product types
let materialsByType = {}; // This will store materials for each type

// Function to fetch product types from the server
// function fetchProductTypes() {
//   fetch('/api/product-types')
//     .then(response => response.json())
    // .then(data => {
      productTypes = [fasdfd,4324,fasdfad];
      populateProductTypeDropdowns();
//     })
//     .catch(error => console.error('Error fetching product types:', error));
// }

// Function to populate product type dropdowns
function populateProductTypeDropdowns() {
  const addTypeSelect = document.getElementById('newProductType');
  const editTypeSelect = document.getElementById('editProductType');
  
  productTypes.forEach(type => {
    const option = new Option(type.name, type.id);
    addTypeSelect.add(option.cloneNode(true));
    editTypeSelect.add(option);
  });
}

// Modify the existing addMaterial function
function addMaterial(inputId, listId, hiddenInputId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const hiddenInput = document.getElementById(hiddenInputId);
  const material = input.value.trim();

  if (material) {
    const typeSelect = inputId.includes('edit') ? document.getElementById('editProductType') : document.getElementById('newProductType');
    const typeId = typeSelect.value;

    if (!materialsByType[typeId]) {
      materialsByType[typeId] = [];
    }

    if (!materialsByType[typeId].includes(material)) {
      materialsByType[typeId].push(material);
      
      const li = document.createElement('li');
      li.textContent = material;
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.className = 'btn btn-danger btn-sm';
      deleteBtn.onclick = function() {
        list.removeChild(li);
        materialsByType[typeId] = materialsByType[typeId].filter(m => m !== material);
        updateHiddenMaterialInput(typeId, hiddenInputId);
      };
      
      li.appendChild(deleteBtn);
      list.appendChild(li);
      
      updateHiddenMaterialInput(typeId, hiddenInputId);
      input.value = '';
    }
  }
}

function updateHiddenMaterialInput(typeId, hiddenInputId) {
  const hiddenInput = document.getElementById(hiddenInputId);
  hiddenInput.value = JSON.stringify(materialsByType[typeId] || []);
}

// Add event listeners for product type changes
document.getElementById('newProductType').addEventListener('change', function() {
  document.getElementById('materialList').innerHTML = '';
  updateHiddenMaterialInput(this.value, 'newProductMaterials');
});

document.getElementById('editProductType').addEventListener('change', function() {
  document.getElementById('editMaterialList').innerHTML = '';
  updateHiddenMaterialInput(this.value, 'editProductMaterials');
});



// Modify your existing code to use these new functions
// ...
