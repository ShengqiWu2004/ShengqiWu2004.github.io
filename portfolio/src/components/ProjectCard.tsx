import React, { useState, useRef } from "react";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Project } from "../types";
import { formatDate, validFormat } from "./Common";

export const ProjectCard = ({ project }: { project: Project }) => {
    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const handleImageClick = (imageIndex: number) => {
        setSelectedImageIndex(imageIndex);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImageIndex(0);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && selectedImageIndex < project.pictures.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
        if (isRightSwipe && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    return (
        <>
            <Card id={validFormat(project.name)} sx={{ width: "98%", backgroundColor: "rgba(206, 240, 241, 0.3)", margin: "20px auto" }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ fontWeight: "bold", fontSize: "1.3rem", fontFamily: "Arial, sans-serif" }}
                            >
                                <a
                                    href={project.link}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.name}
                                </a>
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {formatDate(project.begin_time)} - {formatDate(project.end_time)}
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "text.secondary", marginTop: "10px" }}>
                            {project.description}
                        </Typography>
                        <ul style={{ paddingLeft: "20px", marginTop: "10px", color: "text.secondary" }}>
                            {project.bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                        </ul>
                        {project.pictures.length > 0 && (<ImageList
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                overflowX: "auto",
                                overflowY: "hidden",
                                height: 100,
                                width: "98%",
                                marginTop: "10px",
                                marginLeft:"1%",
                            }}
                            cols={project.pictures.length}
                            rowHeight={100}
                        >
                            {project.pictures.map((image, index) => (
                                <ImageListItem
                                    key={index}
                                    sx={{
                                        position: "relative",
                                        "&:hover .MuiImageListItemBar-root": { opacity: 1 },
                                    }}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img
                                        src={`${project.rel_path}${image.src}`}
                                        alt={image.alt}
                                        style={{ height: "100px", width: "auto" }}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={image.alt}
                                        sx={{
                                            fontSize: "0.5rem",
                                            fontFamily: "Arial",
                                            backgroundColor: "rgba(189, 195, 199, 0.8)",
                                            height: "20%",
                                            position: "absolute",
                                            bottom: 0,
                                            width: "100%",
                                            opacity: 0,
                                            transition: "opacity 0.3s",
                                        }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>)}
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                sx={{
                    "& .MuiPaper-root": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                    },
                }}
            >
                <DialogTitle sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
                    {project.pictures[selectedImageIndex]?.alt}
                </DialogTitle>
                <Box 
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {project.pictures[selectedImageIndex] && (
                        <img
                            src={`${project.rel_path}${project.pictures[selectedImageIndex].src}`}
                            alt={project.pictures[selectedImageIndex].alt}
                            style={{ maxWidth: "100%", maxHeight: "80vh" }}
                        />
                    )}
                </Box>
            </Dialog>
        </>
    );
};