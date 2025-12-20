function Admin() {
  return (
    <div>
        <Header
            headerText="Admin Sayfası"
            motto="Yönetim Paneli"
        />
        <InputWithLabel
            id="email"
            label="E-Posta:"
            type="text"
            isFocused
        />
    </div>
  );
}

// Bileşeni dışa aktar
export default Admin;
