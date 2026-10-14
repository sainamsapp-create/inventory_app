const API_URL = 'http://localhost:3000/api/products';

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const tbody = document.getElementById('productTableBody');
        tbody.innerHTML = '';
        
        data.products.forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>${product.quantity}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">ลบ</button></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, quantity })
        });

        if (response.ok) {
            document.getElementById('productForm').reset();
            fetchProducts();
        } else {
            alert('Failed to add product');
        }
    } catch (error) {
        console.error('Error adding product:', error);
    }
});

async function deleteProduct(id) {
    if (!confirm('คุณต้องการลบสินค้านี้ใช่หรือไม่?')) return;
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
            fetchProducts();
        } else {
            alert('Failed to delete product');
        }
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}

fetchProducts();
