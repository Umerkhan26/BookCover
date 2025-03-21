import React, { useEffect, useState } from "react";
import { Container, Table, TableContainer, TableData, TableHeader, TableRow, ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  ModalBody } from "./AdminCoverIdea.styles";  // Assuming these are styled-components
import { fetchAllBookRequests } from "../../apis/apis";  // Assuming the fetch function is in the apis folder

// Importing Modal Styled Components


const AdminCoverIdea: React.FC = () => {
  const [bookRequests, setBookRequests] = useState<any[]>([]); // State to store fetched book requests
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
  const [error, setError] = useState<string | null>(null); // State to manage error

  const [selectedBookRequest, setSelectedBookRequest] = useState<any | null>(null); // State to manage the selected book request for modal

  useEffect(() => {
    // Function to load book requests
    const loadBookRequests = async () => {
      try {
        const data = await fetchAllBookRequests(); // Fetching the data
        setBookRequests(data); // Storing data in state
      } catch (err) {
        setError("Failed to load book requests"); // Error handling
      } finally {
        setLoading(false); // Setting loading to false after data is fetched or failed
      }
    };

    loadBookRequests(); // Call the function to load book requests on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetch fails
  }

  // Function to show the modal with the full details of a book request
  const handleInfoClick = (bookRequest: any) => {
    setSelectedBookRequest(bookRequest); // Set selected book request data
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedBookRequest(null); // Clear the selected book request
  };

  return (
    <Container>
      <h1 className="text-black mb-4">Book Cover Ideas</h1>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader className="header-id">ID</TableHeader>
              <TableHeader className="header-username">User Name</TableHeader>
              <TableHeader className="header-email">Email</TableHeader>

              <TableHeader className="header-booktitle">Book Title</TableHeader>
              <TableHeader className="header-genre">Genre</TableHeader>
              <TableHeader className="header-series">Is Series?</TableHeader>
              <TableHeader className="header-cover">Cover Preference</TableHeader>
              <TableHeader className="header-moreinfo">More Info</TableHeader>
            </tr>
          </thead>
          <tbody>
            {/* Render rows dynamically from bookRequests */}
            {bookRequests.length > 0 ? (
              bookRequests.map((bookRequest) => (
                <TableRow key={bookRequest._id}>
                  <TableData className="book-id">{bookRequest._id}</TableData>
                  <TableData className="user-name">{bookRequest.name}</TableData>
                  <TableData className="book-email">{bookRequest.email}</TableData>

                  <TableData className="book-title">{bookRequest.title}</TableData>
                  <TableData className="book-genre">{bookRequest.genre}</TableData>
                  <TableData className="book-series">{bookRequest.isSeries ? "Yes" : "No"}</TableData>
<TableData className="book-cover">{bookRequest.coverPreference?.join(", ")}</TableData>
                  <TableData className="book-button">
                    <button className="font-bold text-green-600 text-lg" onClick={() => handleInfoClick(bookRequest)}>
                      Info
                    </button>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <tr>
                <TableData colSpan={7}>No orders found</TableData>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>

      {/* Modal to show more details */}
      {selectedBookRequest && (
  <ModalOverlay>
    <ModalContent>
      <CloseButton onClick={closeModal}>×</CloseButton>
      <ModalTitle>Book Request Details</ModalTitle>
      <ModalBody>
        <div>
          <p><strong>Email:</strong></p>
          <p>{selectedBookRequest.email}</p>
        </div>

        <div>
          <p><strong>Description:</strong></p>
          <p>{selectedBookRequest.description}</p>
        </div>

        <div>
          <p><strong>Main Characters:</strong></p>
          <p>{selectedBookRequest.mainCharacters}</p>
        </div>

        <div>
          <p><strong>Book Cover Setting:</strong></p>
          <p>{selectedBookRequest.setting}</p>
        </div>

        <div>
          <p><strong>Comparable Covers:</strong></p>
          <div>
            {selectedBookRequest.comparableCovers?.map((cover: string, index: number) => (
              <img key={index} src={cover} alt="Comparable Cover" style={{ width: "300px", height: "auto", margin: "5px" }} />
            ))}
          </div>
        </div>
      </ModalBody>
    </ModalContent>
  </ModalOverlay>
)}

    </Container>
  );
};

export default AdminCoverIdea;
