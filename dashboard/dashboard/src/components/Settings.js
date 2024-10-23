import React, { useState, useEffect } from 'react';

const Settings = ({ salesData, setSalesData }) => {
  const [akunTujuan, setAkunTujuan] = useState('');
  const [product, setProduct] = useState('Likes');
  const [platform, setPlatform] = useState('');
  const [value, setValue] = useState('');
  const [harga, setHarga] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    fetch('http://localhost:8080/api/testimonials')
      .then(response => response.json())
      .then(data => setSalesData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [setSalesData]);

  const handleAddOrUpdate = () => {
    const parsedValue = parseInt(value, 10);
    const parsedHarga = parseInt(harga, 10);
    const newData = { akun_tujuan: akunTujuan, product, platform, value: parsedValue, harga: parsedHarga };

    if (editingIndex >= 0) {
      const id = salesData[editingIndex].ID;
      fetch(`http://localhost:8080/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      })
      .then(response => response.json())
      .then(updatedData => {
        const updatedSalesData = [...salesData];
        updatedSalesData[editingIndex] = updatedData;
        setSalesData(updatedSalesData);
        setEditingIndex(-1);
      })
      .catch(error => console.error('Error updating data:', error));
    } else {
      fetch('http://localhost:8080/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      })
      .then(response => response.json())
      .then(addedData => {
        setSalesData([...salesData, addedData]);
      })
      .catch(error => console.error('Error adding data:', error));
    }

    setAkunTujuan('');
    setPlatform('');
    setProduct('');
    setValue('');
    setHarga('');
  };

  const handleEdit = (index) => {
    const dataToEdit = salesData[index];
    setAkunTujuan(dataToEdit.akun_tujuan);
    setPlatform(dataToEdit.platform);
    setProduct(dataToEdit.product);
    setValue(dataToEdit.value.toString());
    setHarga(dataToEdit.harga.toString());
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const id = salesData[index].ID;
    fetch(`http://localhost:8080/api/testimonials/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      const updatedSalesData = salesData.filter((_, i) => i !== index);
      setSalesData(updatedSalesData);
    })
    .catch(error => console.error('Error deleting data:', error));
  };

  return (
    <div style={styles.container}>
      <h2>Settings</h2>
      <form style={styles.form} onSubmit={(e) => { e.preventDefault(); handleAddOrUpdate(); }}>
        <input type="text" placeholder="Akun Tujuan" value={akunTujuan} onChange={(e) => setAkunTujuan(e.target.value)} style={styles.input} />

        <select value={platform} onChange={(e) => setPlatform(e.target.value)} style={styles.input}>
          <option value="Instagram">Instagram</option>
          <option value="TikTok">TikTok</option>
          <option value="Facebook">Facebook</option>
          <option value="Telegram">Telegram</option>
          <option value="Shopee">Shopee</option>
          <option value="YouTube">YouTube</option>
          <option value="Netflix">Netflix</option>
        </select>

        <select value={product} onChange={(e) => setProduct(e.target.value)} style={styles.input}>
          <option value="Likes">Likes</option>
          <option value="Followers">Followers</option>
          <option value="Views">Views</option>
          <option value="Members">Members</option>
          <option value="Reaction">Reaction</option>
          <option value="Private">Private</option>
          <option value="Sharing">Sharing</option>
        </select>

        <input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} style={styles.input} />
        
        <input type="number" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.button}> {editingIndex >= 0 ? 'Update' : 'Add'} </button>
      </form>

      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Akun Tujuan</th>
              <th style={styles.tableHeader}>Platform</th>
              <th style={styles.tableHeader}>Product</th>
              <th style={styles.tableHeader}>Value</th>
              <th style={styles.tableHeader}>Harga</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((data, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{data.akun_tujuan}</td>
                <td style={styles.tableCell}>{data.platform}</td>
                <td style={styles.tableCell}>{data.product}</td>
                <td style={styles.tableCell}>{data.value}</td>
                <td style={styles.tableCell}>{data.harga}</td>
                <td style={styles.tableCell}>
                  <button onClick={() => handleEdit(index)} style={styles.actionButton}>Edit</button>
                  <button onClick={() => handleDelete(index)} style={styles.actionButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  form: {
    display: 'flex',
    marginBottom: '1rem',
    gap: '1rem',
    alignItems: 'center',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  tableContainer: {
    marginTop: '2rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
    textAlign: 'left',
  },
  tableCell: {
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
  },
  actionButton: {
    marginRight: '0.5rem',
    padding: '0.3rem 0.6rem',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
};

export default Settings;
