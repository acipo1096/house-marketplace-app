import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(null);
  const [shareLinkCopied, setShareLinkCopied] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();
  return <div>LISTING</div>;
}

export default Listing;
