import React, { useState, useEffect } from "react";
import SavingsIcon from '@mui/icons-material/Savings';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get activeIndex from location, else fallback to manual state management
  const [activeIndex, setActiveIndex] = useState(location.state?.activeIndex ?? 0);

  useEffect(() => {
    if (location.state?.activeIndex !== undefined) {
      setActiveIndex(location.state.activeIndex);
    }
  }, [location.state?.activeIndex]);

  const menuItems = ["Personnel Data", "My Wallet", "View History", "View Deadlines", "Home"];

  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <PersonnelData />;
      case 1:
        return <MyWallet />;
      case 2:
        return <ViewHistory />;
      case 3:
        return <ViewDeadlines />;
      default:
        return <PersonnelData />;
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="bg-[#191A19] h-full w-[20vw] flex flex-col items-start pt-6 pl-4 rounded-lg shadow-lg">
        <div className="Logo-Container flex items-center cursor-pointer text-white" onClick={() => navigate("/")}>
          <SavingsIcon sx={{ fontSize: "4rem" }} />
          <h1 className="ml-2 font-bold text-[30px]">SHARE POOL</h1>
        </div>
        <div className="Item-Container text-white mt-4 w-full">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 py-2 ${
                  activeIndex === index ? "bg-[#28A745] text-white rounded-md" : "hover:bg-gray-700"
                }`}
                onClick={() => {
                  if (index === 4) {
                    navigate("/"); // Redirect to Home if "Home" is clicked
                  } else {
                    setActiveIndex(index); // Manually update active index
                  }
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">{renderComponent()}</div>
    </div>
  );
}


export const PersonnelData = () => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || {
      name: "John Doe",
      dob: "",
      gender: "Male",
      email: "",
      phone: "",
      occupation: "",
      address: "",
      priorityLevel: "High",
      accounts: { salary: "", secondary: "" },
      itrReceipt: null,
    };
  
    const [userData, setUserData] = useState(storedData);
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});
  
    useEffect(() => {
      localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]);
  
    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };
  
    const handleAccountChange = (e) => {
      setUserData({
        ...userData,
        accounts: { ...userData.accounts, [e.target.name]: e.target.value },
      });
    };
  
    const handleFileChange = (e) => {
      setUserData({ ...userData, itrReceipt: e.target.files[0].name });
    };
  
    const validateForm = () => {
      let newErrors = {};
      if (!userData.name.trim()) newErrors.name = "Name is required";
      if (!userData.dob) newErrors.dob = "Date of Birth is required";
      if (!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        newErrors.email = "Enter a valid email";
      if (!userData.phone.match(/^\d{10}$/))
        newErrors.phone = "Enter a valid 10-digit phone number";
      if (!userData.accounts.salary.trim())
        newErrors.salary = "Salary account is required";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const toggleEdit = () => {
      if (isEditing) {
        if (!validateForm()) return;
        alert("Profile updated successfully!");
      }
      setIsEditing(!isEditing);
    };
  
    return (
      <div className="bg-[#f0c77b71]  p-6 rounded-lg shadow-lg w-[100%] text-black">
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Personnel Information</h2>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={toggleEdit}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 border-b border-gray-700 pb-4">
          <div>
            <strong>Name:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.name
            )}
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <strong>Date of Birth:</strong>{" "}
            {isEditing ? (
              <input
                type="date"
                name="dob"
                value={userData.dob}
                onChange={handleChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.dob || "Not Set"
            )}
            {errors.dob && <p className="text-red-500">{errors.dob}</p>}
          </div>
          <div>
            <strong>Gender:</strong> {userData.gender} (System-set)
          </div>
          <div>
            <strong>Email ID:</strong>{" "}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.email || "Not Set"
            )}
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <strong>Phone No:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.phone || "Not Set"
            )}
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        </div>
  
        <h2 className="text-2xl font-bold mt-6 mb-4">Occupation & Address</h2>
        <div className="border-b border-gray-700 pb-4">
          <div>
            <strong>Occupation:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="occupation"
                value={userData.occupation}
                onChange={handleChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.occupation || "Not Set"
            )}
          </div>
          <div>
            <strong>Address:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.address || "Not Set"
            )}
          </div>
        </div>
  
        <h2 className="text-2xl font-bold mt-6 mb-4">Priority Level</h2>
        <div className="border-b border-gray-700 pb-4">
          <div><strong>Profile Priority:</strong> {userData.priorityLevel} (System-set)</div>
        </div>
  
        <h2 className="text-2xl font-bold mt-6 mb-4">Accounts</h2>
        <div className="border-b border-gray-700 pb-4">
          <div>
            <strong>Salary Account:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="salary"
                value={userData.accounts.salary}
                onChange={handleAccountChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.accounts.salary || "Not Set"
            )}
            {errors.salary && <p className="text-red-500">{errors.salary}</p>}
          </div>
          <div>
            <strong>Secondary Account (Optional):</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="secondary"
                value={userData.accounts.secondary}
                onChange={handleAccountChange}
                className="bg-gray-800 p-1 rounded"
              />
            ) : (
              userData.accounts.secondary || "Not Set"
            )}
          </div>
        </div>
  
        <h2 className="text-2xl font-bold mt-6 mb-4">ITR Upload</h2>
        <div className="pb-4">
          {userData.itrReceipt ? (
            <p className="text-green-400">✔ {userData.itrReceipt} Uploaded</p>
          ) : (
            <input type="file" className="bg-gray-800 p-2 rounded cursor-pointer" onChange={handleFileChange} />
          )}
        </div>
  
        {/* Edit & Save Button */}
        
      </div>
    );
  };

  export const MyWallet = () => {
    const [balance, setBalance] = useState(
      parseFloat(localStorage.getItem("walletBalance")) || 0
    );
    const [amount, setAmount] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [upiId, setUpiId] = useState(localStorage.getItem("userUpiId") || "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGeneratingUpi, setIsGeneratingUpi] = useState(false);
    const [transactions, setTransactions] = useState(
      JSON.parse(localStorage.getItem("transactions")) || []
    );
  
    useEffect(() => {
      localStorage.setItem("walletBalance", balance);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      localStorage.setItem("userUpiId", upiId);
    }, [balance, transactions, upiId]);
  
    const handleSubmit = () => {
      const numericAmount = parseFloat(amount);
      if (!numericAmount || numericAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
      if (!paymentType) {
        alert("Please select a payment type.");
        return;
      }
      if (paymentType === "upi" && !upiId.trim()) {
        alert("Please enter a valid UPI ID.");
        return;
      }
  
      setBalance((prev) => prev + numericAmount);
      setTransactions((prev) => [
        ...prev,
        { id: Date.now(), type: "Add", amount: numericAmount, paymentType, upiId },
      ]);
  
      alert(`₹${numericAmount} added successfully!`);
      setAmount("");
      setPaymentType("");
      setIsModalOpen(false);
    };
  
    return (
      <div className="main-wallet  w-[100%] rounded-xl text-center flex flex-col flex-grow items-center h-[100%] py-6">
        {/* Wallet Display */}
        <div className="wallet-display shadow-md rounded-lg pb-4 w-[95%] bg-[#2E5077] m-[10px] flex justify-between text-white">
          <div className="rounded-lg flex-col flex-grow">
            <div className="text-start text-[40px] font-bold px-4 py-2 m-[10px]">
              My Wallet
            </div>
            <div className="text-start text-[40px] font-semibold px-6 w-max text-[#C6EBC5] rounded-xl">
              <p className="text-sm px-1 w-max">Current balance in your wallet</p>
              {balance !== null && balance !== undefined ? `₹${balance.toFixed(2)}` : "Loading..."}
            </div>
          </div>
          <div className="rounded-lg w-max m-[10px] flex justify-center items-center mr-[50px]">
            <button
              className="add-money-btn w-[150px] h-[50px] rounded-lg  bg-[#C6EBC5] text-black font-semibold hover:scale-110 transition-transform duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Add Money
            </button>
          </div>
        </div>
  
        {/* UPI ID Section (Separate from Add Money) */}
        <div className="upi-section w-[95%] bg-[#f0c77b71] text-black p-4 rounded-lg  mt-4">
          <h3 className="text-lg font-semibold">UPI ID</h3>
          {upiId ? (
            <p className="text-md ">{upiId}</p>
          ) : (
            <>
              {!isGeneratingUpi ? (
                <button
                  className="generate-upi-btn bg-[#C6EBC5] text-black font-semibold px-4 py-2 rounded-lg mt-2 hover:scale-110 transition-transform"
                  onClick={() => setIsGeneratingUpi(true)}
                >
                  Generate UPI ID
                </button>
              ) : (
                <div className="mt-2">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full p-2 border border-gray-400 rounded"
                    placeholder="Enter your UPI ID"
                  />
                </div>
              )}
            </>
          )}
        </div>
  
        {/* Add Money Modal */}
        {isModalOpen && (
          <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal bg-[#C6EBC5] p-6 rounded-lg w-1/3 text-black">
              <h2 className="text-xl font-semibold mb-4">Add Money</h2>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded mt-1"
                  placeholder="Enter amount"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="paymentType" className="block text-sm font-medium">Payment Type</label>
                <select
                  id="paymentType"
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded mt-1"
                >
                  <option value="">Select Payment Type</option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
  
              {/* Show UPI ID if UPI is selected */}
              {paymentType === "upi" && (
                <div className="mb-4">
                  <label htmlFor="upiId" className="block text-sm font-medium">UPI ID</label>
                  <input
                    id="upiId"
                    type="text"
                    value={upiId}
                    readOnly
                    className="w-full p-2 border border-gray-400 rounded bg-gray-200 text-gray-600"
                  />
                </div>
              )}
  
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-[#2E5077] text-white px-4 py-2 rounded mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export const ViewHistory = () => {
  const hardcodedHistory = [
    {
      date: "20/02/2025",
      poolName: "New Alpha Pool",
      Amount: "20000",
      role: "Contributor",
    },
    
    {
      date: "25/03/2025",
      poolName: "Velocity Capital",
      Amount: "30000",
      role: "Contributor",
    },
    {
      date: "30/03/2025",
      poolName: "Momentum Pool",
      Amount: "70000",
      role: "Borrower",
    },
    {
      date: "02/04/2025",
      poolName: "Pioneer Investment",
      Amount: "12000",
      role: "Contributor",
    },
    {
      date: "07/04/2025",
      poolName: "Vortex Funding",
      Amount: "55000",
      role: "Borrower",
    },
    {
      date: "12/04/2025",
      poolName: "Titan Reserve",
      Amount: "80000",
      role: "Contributor",
    },
    {
      date: "15/03/2025",
      poolName: "Infinity Yield Fund",
      Amount: "35000",
      role: "Borrower",
    },
    {
      date: "18/03/2025",
      poolName: "Hyper Growth Pool",
      Amount: "60000",
      role: "Contributor",
    },
    {
      date: "22/03/2025",
      poolName: "Quantum Returns",
      Amount: "45000",
      role: "Borrower",
    },
    
    
    
  ];
  

  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Force update localStorage with new hardcoded data every time
    setHistory(hardcodedHistory);
    localStorage.setItem("userHistory", JSON.stringify(hardcodedHistory));
  }, []); // Empty dependency ensures this runs only once on component mount

  return (
    <div className=" p-6 text-white rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">View History</h2>

      {history.length === 0 ? (
        <p className="text-center text-gray-400">No history available.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-[#f0c77b71] text-black rounded-xl">
            <thead>
              <tr className="text-left bg-[#C6EBC5] text-black font-semibold rounded-xl ">
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Pool Name</th>
                <th className="py-3 px-6">Contributed/Borrowed<br/> Amount</th>
                <th className="py-3 px-6">Role</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index} className="border-b border-gray-600 hover:bg-[#36587B] transition">
                  <td className="py-3 px-6">{entry.date}</td>
                  <td className="py-3 px-6">{entry.poolName}</td>
                  <td className="py-3 px-6">{entry.Amount}</td>
                  <td className="py-3 px-6">{entry.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

  
const hardcodedDeadlines = [
  {
    deadlineDate: "25/02/2025",
    amountToRepay: "₹50,000",
    account: "Savings Account - 1234",
    interest: "5%",
    penalty: "₹2,000",
  },
  {
    deadlineDate: "10/03/2025",
    amountToRepay: "₹30,000",
    account: "Checking Account - 5678",
    interest: "6%",
    penalty: "₹1,500",
  },
  {
    deadlineDate: "20/03/2025",
    amountToRepay: "₹75,000",
    account: "Business Account - 9101",
    interest: "4.5%",
    penalty: "₹2,500",
  },
  {
    deadlineDate: "05/04/2025",
    amountToRepay: "₹40,000",
    account: "Savings Account - 2345",
    interest: "5.2%",
    penalty: "₹1,800",
  },
  {
    deadlineDate: "15/04/2025",
    amountToRepay: "₹60,000",
    account: "Investment Account - 6789",
    interest: "5.8%",
    penalty: "₹2,200",
  },
  {
    deadlineDate: "30/04/2025",
    amountToRepay: "₹90,000",
    account: "Business Account - 5432",
    interest: "4.8%",
    penalty: "₹3,000",
  },
];

 export const ViewDeadlines = () => {
  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    setDeadlines(hardcodedDeadlines);
    localStorage.setItem("loanDeadlines", JSON.stringify(hardcodedDeadlines));
  }, []);

  return (
    <div className=" p-6 text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">View Deadlines</h2>

      {deadlines.length === 0 ? (
        <p className="text-center text-gray-400">No deadlines available.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-[#f0c77b71] text-black rounded-lg">
            <thead>
              <tr className="text-left bg-[#C6EBC5] text-black font-semibold">
                <th className="py-3 px-6">Deadline Date</th>
                <th className="py-3 px-6">Amount to Repay</th>
                <th className="py-3 px-6">Account</th>
                <th className="py-3 px-6">Interest</th>
                <th className="py-3 px-6">Penalty</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((entry, index) => (
                <tr key={index} className="border-b border-gray-600 hover:bg-[#36587B] transition">
                  <td className="py-3 px-6">{entry.deadlineDate}</td>
                  <td className="py-3 px-6">{entry.amountToRepay}</td>
                  <td className="py-3 px-6">{entry.account}</td>
                  <td className="py-3 px-6">{entry.interest}</td>
                  <td className="py-3 px-6">{entry.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Profile;
