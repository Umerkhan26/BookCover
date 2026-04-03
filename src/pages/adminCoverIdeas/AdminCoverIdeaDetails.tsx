import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBookRequestById } from "../../apis/apis";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import {
  Container,
  HeaderSection,
  Title,
  SeriesBadge,
} from "./AdminCoverIdea.styles";

const AdminCoverIdeaDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookRequest, setBookRequest] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const loadDetails = async () => {
      if (!id) {
        setError("Invalid request ID");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const res = await fetchBookRequestById(id);
        setBookRequest(res);
      } catch (err: any) {
        setError(
          typeof err === "string"
            ? err
            : err?.message || "Failed to load request details",
        );
      } finally {
        setLoading(false);
      }
    };

    void loadDetails();
  }, [id]);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Cover Idea Details</title>
      </Helmet>

      <HeaderSection>
        <Title>Book Request Details</Title>
      </HeaderSection>

      <BackButton type="button" onClick={() => navigate("/admin/coverIdeas")}>
        ← Back to Cover Ideas
      </BackButton>

      {loading ? (
        <StateText>Loading details...</StateText>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : !bookRequest ? (
        <StateText>Request not found</StateText>
      ) : (
        <DetailsCard>
          <InfoRow>
            <InfoLabel>Submitted</InfoLabel>
            <InfoValue>{formatSubmittedAt(bookRequest.createdAt)}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>User Name</InfoLabel>
            <InfoValue>{bookRequest.name || "N/A"}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>{bookRequest.email || "N/A"}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Book Title</InfoLabel>
            <InfoValue>{bookRequest.title || "N/A"}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Genre</InfoLabel>
            <InfoValue>{bookRequest.genre || "N/A"}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Is Series</InfoLabel>
            <InfoValue>
              <SeriesBadge isSeries={!!bookRequest.isSeries}>
                {bookRequest.isSeries ? "Yes" : "No"}
              </SeriesBadge>
            </InfoValue>
          </InfoRow>
          {bookRequest.description && (
            <InfoRow>
              <InfoLabel>Description</InfoLabel>
              <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                {bookRequest.description}
              </InfoValue>
            </InfoRow>
          )}
          {bookRequest.mainCharacters && (
            <InfoRow>
              <InfoLabel>Main Characters</InfoLabel>
              <InfoValue>{bookRequest.mainCharacters}</InfoValue>
            </InfoRow>
          )}
          {bookRequest.setting && (
            <InfoRow>
              <InfoLabel>Book Cover Setting</InfoLabel>
              <InfoValue>{bookRequest.setting}</InfoValue>
            </InfoRow>
          )}
          {Array.isArray(bookRequest.coverPreference) &&
            bookRequest.coverPreference.length > 0 && (
              <InfoRow>
                <InfoLabel>Cover Preferences</InfoLabel>
                <InfoValue>{bookRequest.coverPreference.join(", ")}</InfoValue>
              </InfoRow>
            )}
          {Array.isArray(bookRequest.comparableCovers) &&
            bookRequest.comparableCovers.length > 0 && (
              <InfoRow>
                <InfoLabel>Comparable Covers</InfoLabel>
                <CoverGrid>
                  {bookRequest.comparableCovers.map(
                    (cover: string, index: number) => (
                      <CoverImage
                        key={index}
                        src={cover}
                        alt={`Comparable Cover ${index + 1}`}
                        loading="lazy"
                        onClick={() => setPreviewImage(cover)}
                      />
                    ),
                  )}
                </CoverGrid>
              </InfoRow>
            )}
        </DetailsCard>
      )}

      {previewImage && (
        <ImagePreviewOverlay onClick={() => setPreviewImage(null)}>
          <ImagePreviewContainer onClick={(e) => e.stopPropagation()}>
            <PreviewCloseButton
              type="button"
              onClick={() => setPreviewImage(null)}
              aria-label="Close image preview"
            >
              ×
            </PreviewCloseButton>
            <PreviewImage src={previewImage} alt="Cover preview" />
          </ImagePreviewContainer>
        </ImagePreviewOverlay>
      )}
    </Container>
  );
};

export default AdminCoverIdeaDetails;

const BackButton = styled.button`
  border: 1px solid #d1d5db;
  background: #fff;
  color: #111827;
  border-radius: 8px;
  padding: 7px 12px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

const DetailsCard = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
`;

const InfoRow = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
`;

const InfoValue = styled.div`
  font-size: 14px;
  color: #111827;
  line-height: 1.45;
`;

const CoverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  margin-top: 8px;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  object-fit: cover;
  cursor: zoom-in;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 24px rgba(2, 6, 23, 0.2);
  }
`;

const StateText = styled.div`
  color: #64748b;
  font-weight: 600;
`;

const ErrorText = styled.div`
  color: #dc2626;
  font-weight: 600;
`;

const ImagePreviewOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 16px;
`;

const ImagePreviewContainer = styled.div`
  position: relative;
  max-width: min(92vw, 1100px);
  max-height: 90vh;
`;

const PreviewImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 90vh;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
`;

const PreviewCloseButton = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  color: #111827;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
`;
