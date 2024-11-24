
document.addEventListener('DOMContentLoaded', function() {
  // Edit Product Modal
  

  // Modify your existing edit product form submission logic
  document.getElementById('editProductForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    formData.append('materials', JSON.stringify(editMaterials));
    
    // Send the formData to your server
    fetch('/your-edit-product-endpoint', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Handle successful edit
        $('#editProductModal').modal('hide');
        // Refresh product list or update UI as needed
      } else {
        // Handle error
        console.error('Error editing product:', data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  // Function to populate edit form when modal opens
  function populateEditForm(productData) {
    document.getElementById('productName').value = productData.name;
    document.getElementById('productCategory').value = productData.category;
    document.getElementById('productDescription').value = productData.description;
    document.getElementById('productprice').value = productData.price;
    document.getElementById('productStock').value = productData.stock;
    document.getElementById('productOffer').value = productData.offer;

    // Populate materials
    editMaterials = productData.material || []; // Note: changed from materials to material
    updateEditMaterialList();

    // Populate current images
    const currentImagesContainer = document.getElementById('currentImages');
    currentImagesContainer.innerHTML = '';
    productData.images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = 'Product Image';
      imgElement.className = 'img-thumbnail m-1';
      imgElement.style.width = '100px';
      imgElement.style.height = '100px';
      currentImagesContainer.appendChild(imgElement);
    });
  }

  // Function to open the edit modal and populate data
  window.openEditProductModal = function(productId) {
    // Fetch product data from server
    fetch(`/get-product-data/${productId}`)
      .then(response => response.json())
      .then(data => {
        populateEditForm(data);
        $('#editProductModal').modal('show');
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  };
});
