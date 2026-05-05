import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import Chip from "@mui/material/Chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BoltIcon from "@mui/icons-material/Bolt";
import TuneIcon from "@mui/icons-material/Tune";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { keyframes } from "@mui/system";
import IncontentVideo from "../images/Creatives/In-content_video.mp4";
import GorillaMascot from "../images/gorilla.png";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-16px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

export default function LandingPage({ onCreateCampaign, onNavigateToCampaigns, isManagedUser, onUseVideoCreative, onSetupLeadTracking }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const quickLaunchCards = [
    {
      id: "lead-gen",
      badge: "AI Recommended",
      badgeColor: "#2e7d32",
      badgeBg: "#e8f5e9",
      title: "Quick Launch: Local Lead Generation",
      description: "Best for service businesses and local agencies",
      buttonLabel: "Setup lead tracking",
      details: "Pre-configured campaign optimized for local lead generation with AI-powered audience targeting, automatic bid optimization, and conversion tracking setup.",
    },
    {
      id: "awareness",
      badge: "Fastest to Value",
      badgeColor: "#0B61A0",
      badgeBg: "#e3f2fd",
      title: "Quick Launch: Awareness",
      description: "Best for brands looking to build reach and visibility",
      buttonLabel: "Launch this setup",
      details: "Awareness campaign template with broad reach targeting, optimized frequency capping, and brand lift measurement built in.",
    },
    {
      id: "custom",
      badge: "Custom",
      badgeColor: "#4f01a3",
      badgeBg: "#f3e5f5",
      title: "Create Your Own",
      description: "Build a custom campaign from scratch",
      buttonLabel: "Create campaign",
      details: "Full control over every aspect of your campaign — audience, budget, schedule, placements, and creative.",
    },
  ];

  const activeCampaigns = [
    {
      name: "Spring Collection 2026",
      status: "Out performing",
      statusColor: "#2e7d32",
      spendPercent: 29,
      spent: 3491,
      budget: 12000,
      metrics: [
        { label: "Impressions", value: "11.6M" },
        { label: "Households", value: "11.6M" },
        { label: "CTR", value: "0.82%" },
        { label: "CPM", value: "$0.30" },
        { label: "Reach", value: "1.0M" },
        { label: "VCR", value: "6%" },
      ],
      aiConfidence: "92%",
      aiRecommendation: "Increase budget by 25%",
    },
    {
      name: "Brand Awareness Q2",
      status: "Needs attention",
      statusColor: "#c62828",
      spendPercent: 8,
      spent: 5040,
      budget: 64000,
      metrics: [
        { label: "Impressions", value: "63.5M" },
        { label: "Households", value: "63.5M" },
        { label: "CTR", value: "0.52%" },
        { label: "CPM", value: "$0.08" },
        { label: "Reach", value: "2.5M" },
        { label: "VCR", value: "1%" },
      ],
      aiConfidence: "87%",
      aiRecommendation: "Adjust targeting demographics",
    },
  ];

  const draftCampaigns = [
    {
      name: "Summer Sale 2026",
      status: "Creative needed",
      budget: 2500,
      date: "Not set",
      target: "Not set",
    },
    {
      name: "Product Launch - Smart TV",
      status: "Creative needed",
      budget: 5000,
      date: "Not set",
      target: "Not set",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "calc(100vh - 60px)" }}>
      {/* Promo Banner */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #e8eaf6 0%, #e3f2fd 100%)",
          px: { xs: 2, md: 5 },
          py: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <InfoOutlinedIcon sx={{ color: "#0B61A0", fontSize: 32, flexShrink: 0 }} />
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1rem", color: "#1a237e" }}>
            Want $500 in free ad credits?
          </Typography>
          <Typography variant="body1" sx={{ color: "#424242" }}>
            New advertisers get a free $500 in ad credits when you launch your first campaign with a budget of $1000 or more.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={onCreateCampaign}
          sx={{
            backgroundColor: "#20004c",
            fontWeight: "bold",
            px: 3,
            py: 1.2,
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#35006e" },
          }}
        >
          Create campaign
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ px: { xs: 2, md: 5 }, py: 4 }}>

        {isManagedUser && (
        <>
        {/* Active Campaigns Section */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "6px",
            border: "1px solid #e0e0e0",
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.125rem", mb: 2.5 }}>
            Active campaigns
          </Typography>
          <Box sx={{ display: "flex", gap: 2.5 }}>
            {activeCampaigns.map((campaign) => (
              <Box
                key={campaign.name}
                sx={{
                  flex: 1,
                  border: "1px solid #e0e0e0",
                  borderRadius: "6px",
                  p: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Typography
                    sx={{
                      color: "#1565c0",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {campaign.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: campaign.statusColor,
                      border: `1px solid ${campaign.statusColor}`,
                      borderRadius: "4px",
                      px: 1,
                      py: 0.25,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {campaign.status}
                  </Typography>
                </Box>

                {/* Spend Progress */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {/* Circular progress */}
                  <Box sx={{ position: "relative", width: 48, height: 48 }}>
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="24" cy="24" r="20" fill="none" stroke="#e0e0e0" strokeWidth="4" />
                      <circle
                        cx="24" cy="24" r="20" fill="none"
                        stroke="#4f01a3" strokeWidth="4"
                        strokeDasharray={`${campaign.spendPercent * 1.256} 125.6`}
                        strokeLinecap="round"
                        transform="rotate(-90 24 24)"
                      />
                    </svg>
                    <Typography
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "0.6rem",
                        fontWeight: "bold",
                      }}
                    >
                      {campaign.spendPercent}%
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#757575" }}>Spend</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                      <Typography component="span" sx={{ fontSize: "0.75rem", verticalAlign: "top", mr: 0.25 }}>$</Typography>
                      {campaign.spent.toLocaleString()}
                      <Typography component="span" sx={{ fontSize: "0.8rem", color: "#757575", fontWeight: 400 }}> / ${campaign.budget.toLocaleString()}</Typography>
                    </Typography>
                  </Box>
                </Box>

                {/* Metrics Grid */}
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5 }}>
                  {campaign.metrics.map((metric) => (
                    <Box key={metric.label}>
                      <Typography variant="body2" sx={{ color: "#757575", fontSize: "0.7rem" }}>{metric.label}</Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>{metric.value}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* AI Recommendation */}
                <Box
                  sx={{
                    backgroundColor: "#e8f5e9",
                    borderRadius: "6px",
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "#c8e6c9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <SmartToyIcon sx={{ fontSize: 18, color: "#2e7d32" }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>AI Recommendation</Typography>
                      <Typography
                        sx={{
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "#2e7d32",
                          border: "1px solid #2e7d32",
                          borderRadius: "4px",
                          px: 0.75,
                          py: 0.1,
                        }}
                      >
                        {campaign.aiConfidence} confidence
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{campaign.aiRecommendation}</Typography>
                  </Box>
                  <ChevronRightIcon sx={{ color: "#757575" }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Draft Campaigns Section */}
        <Box
          sx={{
            mt: 3,
            backgroundColor: "white",
            borderRadius: "6px",
            border: "1px solid #e0e0e0",
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.125rem", mb: 2.5 }}>
            Draft campaigns
          </Typography>
          <Box sx={{ display: "flex", gap: 2.5 }}>
            {draftCampaigns.map((campaign) => (
              <Box
                key={campaign.name}
                sx={{
                  flex: 1,
                  border: "1px solid #e0e0e0",
                  borderRadius: "6px",
                  p: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Typography
                    sx={{
                      color: "#1565c0",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {campaign.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#c62828",
                    }}
                  >
                    {campaign.status}
                  </Typography>
                </Box>

                {/* Budget */}
                <Box>
                  <Typography variant="body2" sx={{ color: "#757575" }}>Intended weekly budget</Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    <Typography component="span" sx={{ fontSize: "0.75rem", verticalAlign: "top", mr: 0.25 }}>$</Typography>
                    {campaign.budget.toLocaleString()}
                  </Typography>
                </Box>

                {/* Date & Target */}
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#757575", fontSize: "0.7rem" }}>Date</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>{campaign.date}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#757575", fontSize: "0.7rem" }}>Target</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>{campaign.target}</Typography>
                  </Box>
                </Box>

                {/* Add Creative Button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#4f01a3",
                    fontWeight: "bold",
                    borderRadius: "6px",
                    mt: "auto",
                    py: 1.2,
                    "&:hover": { backgroundColor: "#3d0080" },
                  }}
                >
                  Add creative
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
        </>
        )}

        <Typography variant="h1" sx={{ mb: 3, mt: 4, fontSize: "1.5rem", fontWeight: "bold" }}>
          Need a hand?
        </Typography>

        {/* First Row - Quick Launch Cards */}
        {!isManagedUser && (
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              gap: 2.5,
              pb: 2,
              px: 1,
            }}
          >
            {/* Quick Launch Cards */}
            {quickLaunchCards.map((card) => (
              <Card
                key={card.id}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  p: 3,
                  transition: "box-shadow 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {/* Badge */}
                <Typography
                  sx={{
                    color: card.badgeColor,
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    mb: 1.5,
                  }}
                >
                  {card.badge}
                </Typography>

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    lineHeight: 1.3,
                    mb: 1,
                    color: "#1a1a1a",
                  }}
                >
                  {card.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{ color: "#757575", mb: 2, flex: 1 }}
                >
                  {card.description}
                </Typography>

                {/* Expandable Details */}
                <Collapse in={expandedCard === card.id}>
                  <Box
                    sx={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: 2,
                      p: 2,
                      mb: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#616161" }}>
                      {card.details}
                    </Typography>
                  </Box>
                </Collapse>

                {/* Actions */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "auto" }}>
                  <Button
                    size="small"
                    onClick={() => toggleDetails(card.id)}
                    endIcon={
                      expandedCard === card.id ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    }
                    sx={{
                      color: "#757575",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                    }}
                  >
                    Show details
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={card.id === "custom" ? onCreateCampaign : card.id === "lead-gen" ? onSetupLeadTracking : undefined}
                    sx={{
                      backgroundColor: "#4f01a3",
                      fontWeight: "bold",
                      borderRadius: 6,
                      px: 2,
                      fontSize: "0.8rem",
                      "&:hover": { backgroundColor: "#3d0080" },
                    }}
                  >
                    {card.buttonLabel}
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
        )}

        {/* Second Row - AI Video & Book a Walkthrough */}
        <Box
          sx={{
            display: "flex",
            gap: 2.5,
            px: 1,
            mt: 1,
          }}
        >
            {/* AI Video Ad Generator Card */}
            <Card
              sx={{
                flex: 1,
                minWidth: 300,
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.2s",
                "&:hover": {
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                },
              }}
            >
              {/* Video Preview */}
              <Box sx={{ position: "relative" }}>
                <Box
                  component="video"
                  src={IncontentVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  sx={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Overlay badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    borderRadius: 5,
                    px: 2,
                    py: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <VideocamIcon sx={{ fontSize: 18, color: "#4f01a3" }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    AI generated using your own assets!
                  </Typography>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    mb: 0.5,
                    color: "#1a1a1a",
                  }}
                >
                  AI Video Ad Generator
                </Typography>
                <Typography variant="body1" sx={{ color: "#757575", mb: 2 }}>
                  See how we transform your assets into compelling video ads
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: "auto", alignSelf: "flex-start" }}>
                  <Button
                    variant="contained"
                    onClick={onUseVideoCreative}
                    sx={{
                      backgroundColor: "#4f01a3",
                      fontWeight: "bold",
                      borderRadius: 6,
                      px: 3,
                      fontSize: "0.85rem",
                      "&:hover": { backgroundColor: "#3d0080" },
                    }}
                  >
                    Use this creative in a campaign
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#4f01a3",
                      color: "#4f01a3",
                      fontWeight: "bold",
                      borderRadius: 6,
                      px: 3,
                      fontSize: "0.85rem",
                      "&:hover": { borderColor: "#3d0080", color: "#3d0080" },
                    }}
                  >
                    Generate an AI creative
                  </Button>
                </Box>
              </Box>
            </Card>

            {/* Book a Walkthrough Card */}
            <Card
              sx={{
                flex: 1,
                minWidth: 300,
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                p: 3,
                transition: "box-shadow 0.2s",
                "&:hover": {
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                },
                "&:hover .gorilla-mascot": {
                  animation: `${bounce} 0.6s ease`,
                },
              }}
            >
                <Typography
                  sx={{
                    color: "#757575",
                    fontSize: "0.75rem",
                    mb: 0.5,
                  }}
                >
                  Get help from a human
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    lineHeight: 1.3,
                    mb: 1,
                    color: "#1a1a1a",
                  }}
                >
                  Book a walkthrough
                </Typography>
                <Typography variant="body1" sx={{ color: "#757575", mb: 2 }}>
                  Meet with an Ads Manager specialist to review your business, validate your setup, and get launch guidance.
                </Typography>

                {/* Gorilla mascot */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: 1,
                  }}
                >
                  <Box
                    className="gorilla-mascot"
                    component="img"
                    src={GorillaMascot}
                    alt="Ads Manager mascot"
                    sx={{
                      width: 200,
                      height: "auto",
                      animation: `${float} 3s ease-in-out infinite`,
                    }}
                  />
                </Box>

                {/* Appointment Options */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: "auto" }}>
                  {[
                    "15 min intro call",
                    "30 min onboarding session",
                    "Creative review appointment",
                  ].map((option) => (
                    <Box
                      key={option}
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: 2,
                        px: 2,
                        py: 1.5,
                        cursor: "pointer",
                        transition: "all 0.15s",
                        "&:hover": {
                          borderColor: "#4f01a3",
                          backgroundColor: "#faf5ff",
                        },
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {option}
                      </Typography>
                    </Box>
                  ))}
                </Box>
            </Card>
        </Box>
      </Box>
    </Box>
  );
}
