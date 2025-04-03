import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-gery-50);
    display: flex,
    align-items: center;
    justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 3, If there is No authenticated user redirect to the login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. While loading, show a spoinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
