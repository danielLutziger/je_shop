import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Feature_Img1 from "../assets/img_4.png";
import Feature_Img2 from "../assets/img_1.png";
import Feature_Img3 from "../assets/img_2.png";
import Feature_Img4 from "../assets/img_3.png";

// Mock data for services
const services = [
    {
        id: "1",
        title: "Service 1",
        price: "CHF 19.99",
        description: "High-quality service tailored for your needs.",
        duration: "45 minutes",
        images: [Feature_Img1, Feature_Img2], // Multiple images for preview
    },
    {
        id: "2",
        title: "Service 2",
        price: "CHF 29.99",
        description: "Affordable and efficient service solutions.",
        duration: "60 minutes",
        images: [Feature_Img2],
    },
    {
        id: "3",
        title: "Service 3",
        price: "CHF 39.99",
        description: "Experience premium quality services.",
        duration: "75 minutes",
        images: [Feature_Img3],
    },
    {
        id: "4",
        title: "Service 4",
        price: "CHF 49.99",
        description: "Exceptional service guaranteed every time.",
        duration: "90 minutes",
        images: [Feature_Img4, Feature_Img1],
    },
];

export default function ProductDetail() {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();

    // Find the specific product
    const product = services.find((service) => service.id === id);

    // Track the currently selected image for preview
    const [selectedImage, setSelectedImage] = useState(product?.images[0]);

    if (!product) {
        return <Typography>Product not found!</Typography>;
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
                maxWidth: "1200px",
                margin: "auto",
                padding: "20px",
            }}
        >
            {/* Image Section */}
            <Box sx={{ flex: 1 }}>
                {/* Selected Image */}
                <Box
                    component="img"
                    src={selectedImage}
                    alt={product.title}
                    sx={{
                        width: "100%",
                        borderRadius: "8px",
                        mb: 2,
                    }}
                />

                {/* Image Previews */}
                <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
                    {product.images.map((img, idx) => (
                        <Box
                            key={idx}
                            component="img"
                            src={img}
                            alt={`Preview ${idx + 1}`}
                            onClick={() => setSelectedImage(img)} // Change main image on click
                            sx={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                cursor: "pointer",
                                border: selectedImage === img ? "2px solid #8e44ad" : "none",
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Product Details Section */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {product.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Price:</strong> {product.price}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Duration:</strong> {product.duration}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    <strong>Description:</strong> {product.description}
                </Typography>

                {/* Action Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => alert("Added to cart!")}
                    >
                        Add to Cart
                    </Button>
                    <Button variant="outlined" onClick={() => navigate("/")}>
                        Back to Services
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
