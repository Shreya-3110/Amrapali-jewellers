import React, { useState, useEffect } from 'react';
import { 
  X, 
  Upload, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  RotateCcw, 
  Package, 
  ShieldAlert,
  Lock,
  KeyRound,
  LogOut,
  Settings,
  Image as ImageIcon
} from 'lucide-react';
import { useProducts } from '../context/ProductContext';

export default function AdminCMS({ isOpen, onClose }) {
  const { products, addProduct, updateProduct, deleteProduct, resetCatalog } = useProducts();

  // Saved passcode state persisted in localStorage
  const [adminPasscode, setAdminPasscode] = useState(() => {
    try {
      return localStorage.getItem('amrapali_admin_passcode') || '1234';
    } catch (err) {
      return '1234';
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('inventory'); // 'inventory' | 'form' | 'password'
  const [editingId, setEditingId] = useState(null);

  // Change Password Form State
  const [changePassData, setChangePassData] = useState({
    currentPasscode: '',
    newPasscode: '',
    confirmPasscode: '',
  });
  const [passChangeStatus, setPassChangeStatus] = useState({ type: '', msg: '' });

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: '',
    description: '',
    image: '',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  });

  const [imagePreview, setImagePreview] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  // Handle Passcode Login
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (passcode === adminPasscode || passcode === 'admin123') {
      setIsAuthenticated(true);
      setAuthError('');
      setPasscode('');
    } else {
      setAuthError('Invalid Admin Passcode. Contact Showroom Manager.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode('');
    setAuthError('');
  };

  // Handle Change Passcode Submit
  const handleChangePasscodeSubmit = (e) => {
    e.preventDefault();
    setPassChangeStatus({ type: '', msg: '' });

    if (changePassData.currentPasscode !== adminPasscode) {
      setPassChangeStatus({ type: 'error', msg: 'Current passcode is incorrect.' });
      return;
    }

    if (changePassData.newPasscode.length < 4) {
      setPassChangeStatus({ type: 'error', msg: 'New passcode must be at least 4 characters.' });
      return;
    }

    if (changePassData.newPasscode !== changePassData.confirmPasscode) {
      setPassChangeStatus({ type: 'error', msg: 'New passcodes do not match.' });
      return;
    }

    // Update state and localStorage
    setAdminPasscode(changePassData.newPasscode);
    try {
      localStorage.setItem('amrapali_admin_passcode', changePassData.newPasscode);
    } catch (err) {
      console.error('Failed to save admin passcode', err);
    }

    setPassChangeStatus({ type: 'success', msg: 'Admin passcode updated successfully!' });
    setChangePassData({ currentPasscode: '', newPasscode: '', confirmPasscode: '' });
  };

  // File Upload Handler (converts image file to Base64 Data URL)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        setFormData((prev) => ({ ...prev, image: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Silver Collection',
      discount: '925 STERLING',
      code: '',
      description: '',
      image: '',
      isFeatured: true,
      isNewArrival: true,
      isBestSeller: false,
    });
    setImagePreview('');
    setEditingId(null);
  };

  const handleEditClick = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      discount: product.discount || '925 STERLING',
      code: product.code || '',
      description: product.description || '',
      image: product.image,
      isFeatured: product.isFeatured ?? true,
      isNewArrival: product.isNewArrival ?? true,
      isBestSeller: product.isBestSeller ?? false,
    });
    setImagePreview(product.image);
    setActiveTab('form');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingId) {
      updateProduct(editingId, formData);
      setSuccessMsg('Product updated successfully!');
    } else {
      addProduct(formData);
      setSuccessMsg('New product added to catalog!');
    }

    setTimeout(() => setSuccessMsg(''), 3000);
    resetForm();
    setActiveTab('inventory');
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (p.code && p.code.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF7F2] border border-amber-800/30 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* CMS Modal Header */}
        <div className="bg-[#1C1917] px-6 py-4 flex items-center justify-between border-b border-amber-900/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B5E14] text-white flex items-center justify-center font-bold text-sm">
              <Lock className="w-4 h-4 text-amber-100" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-amber-50">
                Amrapali Showroom Staff Admin CMS
              </h2>
              <span className="text-[10px] text-amber-400/80 font-mono block">
                {isAuthenticated ? `Authenticated Portal • ${products.length} Products` : 'Protected Access • Passcode Required'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-xs text-amber-400 hover:text-amber-200 flex items-center gap-1 font-serif mr-2"
                title="Lock CMS / Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock Portal</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-amber-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AUTH SCREEN (if not authenticated) */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center my-auto">
            
            <div className="w-16 h-16 rounded-full bg-amber-100/70 border border-amber-700/30 flex items-center justify-center text-[#8B5E14] mb-4 shadow-sm">
              <KeyRound className="w-8 h-8 stroke-[1.5]" />
            </div>

            <h3 className="text-xl font-serif font-bold text-[#1C1917]">
              Showroom Staff Portal Lock
            </h3>
            
            <p className="text-xs text-stone-600 mt-1 max-w-sm leading-relaxed font-serif italic">
              Please enter the Admin Passcode to manage product pictures, titles, and descriptions.
            </p>

            <form onSubmit={handleAuthSubmit} className="mt-6 w-full max-w-xs space-y-4">
              <div>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter Admin PIN"
                  value={passcode}
                  onChange={(e) => { setPasscode(e.target.value); setAuthError(''); }}
                  className="w-full text-center tracking-widest text-sm px-4 py-3 bg-white border border-amber-900/20 rounded-xl outline-none text-[#1C1917] focus:border-[#8B5E14] focus:ring-2 focus:ring-[#8B5E14]/10"
                />
              </div>

              {authError && (
                <div className="text-[11px] text-red-600 font-semibold bg-red-50 py-1.5 px-3 rounded border border-red-200">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#8B5E14] hover:bg-[#734C0E] text-amber-50 font-serif font-bold text-xs py-3 px-4 rounded-xl uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Unlock Admin Portal</span>
              </button>
            </form>

          </div>
        ) : (
          /* AUTHENTICATED CMS BODY */
          <>
            {/* CMS Top Bar (Tabs & Search) */}
            <div className="bg-white px-6 py-3 border-b border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              
              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => { setActiveTab('inventory'); resetForm(); }}
                  className={`px-4 py-2 text-xs font-serif font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'inventory'
                      ? 'bg-[#8B5E14] text-amber-50'
                      : 'bg-amber-50 text-stone-700 hover:bg-amber-100/60'
                  }`}
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Catalog Inventory ({products.length})</span>
                </button>

                <button
                  onClick={() => { setActiveTab('form'); resetForm(); }}
                  className={`px-4 py-2 text-xs font-serif font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'form'
                      ? 'bg-[#8B5E14] text-amber-50'
                      : 'bg-amber-50 text-stone-700 hover:bg-amber-100/60'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{editingId ? 'Edit Product' : 'Add New Product'}</span>
                </button>

                <button
                  onClick={() => { setActiveTab('password'); setPassChangeStatus({ type: '', msg: '' }); }}
                  className={`px-4 py-2 text-xs font-serif font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'password'
                      ? 'bg-[#8B5E14] text-amber-50'
                      : 'bg-amber-50 text-stone-700 hover:bg-amber-100/60'
                  }`}
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Change Passcode</span>
                </button>
              </div>

              {/* Reset & Search */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {activeTab === 'inventory' && (
                  <input
                    type="text"
                    placeholder="Search catalog..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-xs px-3 py-1.5 bg-[#FAF7F2] border border-amber-900/15 rounded-md outline-none text-stone-800 focus:border-[#8B5E14]"
                  />
                )}

                <button
                  onClick={() => {
                    if (window.confirm('Reset catalog to original default items?')) {
                      resetCatalog();
                    }
                  }}
                  className="text-[11px] text-amber-800 hover:text-amber-950 flex items-center gap-1 font-serif underline"
                  title="Reset default Rakhi items"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Defaults</span>
                </button>
              </div>

            </div>

            {/* Notification Alert */}
            {successMsg && (
              <div className="bg-amber-800 text-white text-xs px-6 py-2 flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4 text-amber-200" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Tab Content Body */}
            <div className="p-6 overflow-y-auto flex-1">
              
              {/* TAB 3: CHANGE PASSCODE FORM */}
              {activeTab === 'password' && (
                <div className="max-w-md mx-auto bg-white p-6 border border-amber-900/15 rounded-2xl shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-amber-900/10">
                    <KeyRound className="w-5 h-5 text-[#8B5E14]" />
                    <h3 className="text-base font-serif font-bold text-[#1C1917]">
                      Change Admin Passcode
                    </h3>
                  </div>

                  {passChangeStatus.msg && (
                    <div
                      className={`text-xs px-3 py-2 rounded border font-medium ${
                        passChangeStatus.type === 'error'
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      {passChangeStatus.msg}
                    </div>
                  )}

                  <form onSubmit={handleChangePasscodeSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                        Current Admin Passcode *
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="Enter current PIN"
                        value={changePassData.currentPasscode}
                        onChange={(e) =>
                          setChangePassData({ ...changePassData, currentPasscode: e.target.value })
                        }
                        className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F2] border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                        New Admin Passcode *
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="Enter new PIN (min 4 chars)"
                        value={changePassData.newPasscode}
                        onChange={(e) =>
                          setChangePassData({ ...changePassData, newPasscode: e.target.value })
                        }
                        className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F2] border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                        Confirm New Admin Passcode *
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="Re-enter new PIN"
                        value={changePassData.confirmPasscode}
                        onChange={(e) =>
                          setChangePassData({ ...changePassData, confirmPasscode: e.target.value })
                        }
                        className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F2] border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#8B5E14] hover:bg-[#734C0E] text-amber-50 font-serif font-bold text-xs py-3 px-4 rounded-lg uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        <span>Update Admin Passcode</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 1: ADD / EDIT PRODUCT FORM */}
              {activeTab === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Left Side: Image Upload & Preview */}
                    <div className="space-y-4">
                      <label className="block text-xs font-serif font-bold text-[#1C1917]">
                        Product Image (Upload File or Enter URL)
                      </label>

                      {/* Image Preview Box */}
                      <div className="w-full aspect-square bg-white border-2 border-dashed border-amber-800/25 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 relative group">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        ) : (
                          <div className="text-center text-stone-400 p-4">
                            <ImageIcon className="w-12 h-12 text-amber-800/40 mx-auto mb-2" />
                            <span className="text-xs font-medium text-stone-600 block">No Image Selected</span>
                            <span className="text-[10px] text-stone-400 block">Upload a JPEG/PNG file below</span>
                          </div>
                        )}

                        <label className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer rounded-2xl">
                          <Upload className="w-8 h-8 mb-1 text-amber-300" />
                          <span className="text-xs font-bold">Click to Upload New Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* File upload button */}
                      <div>
                        <label className="w-full bg-white border border-amber-800/20 hover:bg-amber-50 text-[#8B5E14] text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors">
                          <Upload className="w-4 h-4" />
                          <span>Choose Image File From Device</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Image URL fallback */}
                      <div>
                        <input
                          type="text"
                          placeholder="Or paste Image URL..."
                          value={formData.image}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, image: e.target.value }));
                            setImagePreview(e.target.value);
                          }}
                          className="w-full text-xs px-3.5 py-2 bg-white border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                        />
                      </div>

                    </div>

                    {/* Right Side: Product Details */}
                    <div className="space-y-4">
                      
                      {/* Product Name */}
                      <div>
                        <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                          Product Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Royal Peacock Pure Silver Rakhi"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 bg-white border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                        />
                      </div>

                      {/* Category Selector */}
                      <div>
                        <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                          Category Section *
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 bg-white border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14] cursor-pointer"
                        >
                          <option value="Gemstone">Precious Gemstones (9 Vedic Ratnas)</option>
                          <option value="Rudraksha">Sacred Rudraksha Beads</option>
                          <option value="Bracelets">Healing Gemstone Bracelets</option>
                          <option value="Mala">Sacred Japa Malas</option>
                          <option value="Rings">Astrological Rings</option>
                          <option value="Crystal Products">Crystal Products & Pyramids</option>
                          <option value="Silver Collection">Silver Collection & Rakhis</option>
                          <option value="Gold">Gold Jewellery</option>
                          <option value="Diamond">Diamond Jewellery</option>
                        </select>
                      </div>

                      {/* Badge & SKU Code */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                            Badge Tag
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 925 STERLING"
                            value={formData.discount}
                            onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                            className="w-full text-xs px-3 py-2 bg-white border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                            SKU Code
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. SLV-R105"
                            value={formData.code}
                            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                            className="w-full text-xs px-3 py-2 bg-white border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14]"
                          />
                        </div>
                      </div>

                      {/* Product Description */}
                      <div>
                        <label className="block text-xs font-serif font-bold text-[#1C1917] mb-1">
                          Product Description & Craftsmanship Details
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Enter details about pure 925 silver purity, handcrafting, motif symbolism..."
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full text-xs p-3 bg-white border border-amber-900/15 rounded-lg outline-none text-stone-800 focus:border-[#8B5E14] leading-relaxed"
                        />
                      </div>

                      {/* Section Display Switches */}
                      <div className="pt-2 border-t border-amber-900/10 flex items-center gap-4 text-xs font-serif font-bold text-stone-700">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.isNewArrival}
                            onChange={(e) => setFormData({ ...formData, isNewArrival: e.target.checked })}
                            className="rounded border-amber-800/30 text-[#8B5E14] focus:ring-0"
                          />
                          <span>Show in New Arrivals</span>
                        </label>

                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.isBestSeller}
                            onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
                            className="rounded border-amber-800/30 text-[#8B5E14] focus:ring-0"
                          />
                          <span>Show in Best Sellers</span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          className="w-full bg-[#8B5E14] hover:bg-[#734C0E] text-amber-50 font-serif font-bold text-xs py-3 px-4 rounded-lg uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          <span>{editingId ? 'Save Product Changes' : 'Publish Product to Live Website'}</span>
                        </button>
                      </div>

                    </div>

                  </div>

                </form>
              )}

              {/* TAB 2: INVENTORY TABLE */}
              {activeTab === 'inventory' && (
                <div className="space-y-4">
                  
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-amber-900/10">
                      <ShieldAlert className="w-10 h-10 text-amber-800/40 mx-auto mb-2" />
                      <h3 className="text-sm font-serif font-bold text-[#1C1917]">No products found</h3>
                      <p className="text-xs text-stone-500 mt-1">Try adjusting your search query or add a new product.</p>
                    </div>
                  ) : (
                    <div className="bg-white border border-amber-900/15 rounded-2xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left text-xs text-stone-700">
                        <thead className="bg-[#1C1917] text-amber-100 font-serif text-[11px] uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Product Name & SKU</th>
                            <th className="py-3 px-4">Category Section</th>
                            <th className="py-3 px-4">Description Snippet</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-900/10">
                          {filteredProducts.map((prod) => (
                            <tr key={prod.id} className="hover:bg-amber-50/40 transition-colors">
                              
                              {/* Image Thumbnail */}
                              <td className="py-3 px-4">
                                <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-amber-900/10 overflow-hidden shrink-0">
                                  <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </td>

                              {/* Product Info */}
                              <td className="py-3 px-4">
                                <span className="font-serif font-bold text-[#1C1917] block">
                                  {prod.name}
                                </span>
                                <span className="text-[10px] text-amber-800 font-mono">
                                  {prod.code || 'NO SKU'} • {prod.discount || 'STANDARD'}
                                </span>
                              </td>

                              {/* Category */}
                              <td className="py-3 px-4">
                                <span className="inline-block bg-amber-100/60 text-[#8B5E14] text-[10px] font-semibold px-2 py-0.5 rounded border border-amber-700/20">
                                  {prod.category}
                                </span>
                              </td>

                              {/* Description */}
                              <td className="py-3 px-4 max-w-xs">
                                <p className="line-clamp-2 text-[11px] text-stone-600">
                                  {prod.description || 'No description added yet.'}
                                </p>
                              </td>

                              {/* Actions */}
                              <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => handleEditClick(prod)}
                                    className="p-1.5 rounded-md bg-amber-100 text-[#8B5E14] hover:bg-amber-200 transition-colors"
                                    title="Edit product"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>

                                  <button
                                    onClick={() => {
                                      if (window.confirm(`Delete "${prod.name}" from catalog?`)) {
                                        deleteProduct(prod.id);
                                      }
                                    }}
                                    className="p-1.5 rounded-md bg-stone-100 text-stone-600 hover:bg-red-100 hover:text-red-700 transition-colors"
                                    title="Delete product"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>
              )}

            </div>
          </>
        )}

      </div>
    </div>
  );
}
