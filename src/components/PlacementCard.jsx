import React from 'react';
import {
  Box,
  Typography,
  Button,
  Link,
  Switch,
  Tooltip
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RokuTile from '../images/Channels/roku_chan.png';
import DisneyTile from '../images/Channels/disney.png';
import HuluTile from '../images/Channels/hulu.png';
import HBOTile from '../images/Channels/hbo.png';
import PeacockTile from '../images/Channels/peacock.png';
import TubiTile from '../images/Channels/tubi.png';
import ESPNTile from '../images/Channels/espn.png';
import RokuChannelPlacement from '../images/roku_channel_placement.png';
import Paramount from '../images/Channels/paramount.png';

export default function PlacementCard({
  automaticPlacement,
  setAutomaticPlacement,
  placementToggle,
  setPlacementToggle
}) {
  return (
    <Box sx={{ 
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      p: 3,
      backgroundColor: 'white',
      mb: 3
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h2">
          Placement
        </Typography>
        <Button variant="outlined" size="small">
          Edit
        </Button>
      </Box>
      
      <Typography variant="caption" color="text.secondary">
        Lets you select where your ads will be shown. <Link href="#" underline="hover" color="primary">Learn about ad placement.</Link>
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', width: '240px' }}>
          <Typography variant="body1" color="text.secondary">
            Automatic placement
          </Typography>
          <Tooltip 
            title={
              <Box>
                <Typography variant="body2" gutterBottom>
                  Automatic placement optimizes your ad delivery across all available placements to get the best results for your campaign.
                </Typography>
              </Box>
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  color: 'text.primary',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  maxWidth: 300
                }
              },
              arrow: {
                sx: {
                  color: 'white',
                  '&::before': {
                    border: '1px solid #ccc'
                  }
                }
              }
            }}
          >
            <HelpOutlineIcon fontSize="small" color="action" />
          </Tooltip>
        </Box>
        <Switch size="small" defaultChecked checked={automaticPlacement} onChange={(e) => setAutomaticPlacement(e.target.checked)} />
        <Typography variant="caption" color="text.secondary" sx={{ ml: '1px' }}>
          CPM estimate (all ad types): $8-$30
        </Typography>
      </Box>
      
      {!automaticPlacement && (
        <Box sx={{ 
          mt: 3,
          animation: 'fadeIn 0.3s ease-in',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
            },
            '100%': {
              opacity: 1,
            },
          },
        }}>
          <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: 'bold', mb: 1 }}>
            App selection
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
            Place ads across Roku and other streaming apps. Selecting both options may allow Roku to place your ads on more apps, which can help you reach your campaign goal. <Link href="#" underline="hover" color="primary">See a complete list of apps.</Link>
          </Typography>
        </Box>
      )}
      
      {automaticPlacement && (
        <Box sx={{ 
          animation: 'fadeIn 0.3s ease-in',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
            },
            '100%': {
              opacity: 1,
            },
          },
        }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', mt: 2 }}>
            <Box component="img" src={RokuTile} alt="Roku Channel" sx={{ width: 50, height: 38 }} />
            <Box component="img" src={DisneyTile} alt="Disney" sx={{ width: 50, height: 38 }} />
            <Box component="img" src={HuluTile} alt="Hulu" sx={{ width: 50, height: 38 }} />
            <Box component="img" src={HBOTile} alt="HBO" sx={{ width: 50, height: 38 }} />
            <Box component="img" src={PeacockTile} alt="Peacock" sx={{ width: 50, height: 38 }} />
            <Box component="img" src={TubiTile} alt="Tubi" sx={{ width: 50, height: 38 }} />
            <Box component="img" src={ESPNTile} alt="ESPN" sx={{ width: 50, height: 38 }} />
          </Box>
          
          <Link href="#" underline="hover" color="primary" sx={{ mt: 1, display: 'inline-block' }}>
            See more
          </Link>
        </Box>
      )}
      
      {!automaticPlacement && (
        <Box sx={{ 
          mt: 3,
          display: 'flex',
          gap: 2,
          width: '100%',
          animation: 'fadeInScale 0.4s ease-out',
          '@keyframes fadeInScale': {
            '0%': {
              opacity: 0,
              transform: 'translateY(-10px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}>
          <Box sx={{ 
            flex: 1,
            backgroundImage: `url(${RokuChannelPlacement})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <Box sx={{
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '16px'
            }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: 'bold', mb: 0.5, color: 'white' }}>
                  Roku
                </Typography>
                <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
                  CPM estimate (all ad types): $8-$22
                </Typography>
              </Box>
              
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Switch
                  size="small"
                  checked={placementToggle}
                  onChange={(e) => setPlacementToggle(e.target.checked)}
                />
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', minWidth: '60px' }}>
                  {placementToggle ? 'Include' : 'Exclude'}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ 
            flex: 1,
            border: '1px solid #ccc',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <Box sx={{
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '16px'
            }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', mb: 2 }}>
                <Box component="img" src={Paramount} alt="Paramount" sx={{ width: 50, height: 38 }} />
                <Box component="img" src={DisneyTile} alt="Disney" sx={{ width: 50, height: 38 }} />
                <Box component="img" src={HuluTile} alt="Hulu" sx={{ width: 50, height: 38 }} />
                <Box component="img" src={HBOTile} alt="HBO" sx={{ width: 50, height: 38 }} />
                <Box component="img" src={PeacockTile} alt="Peacock" sx={{ width: 50, height: 38 }} />
                <Box component="img" src={TubiTile} alt="Tubi" sx={{ width: 50, height: 38 }} />
                <Box component="img" src={ESPNTile} alt="ESPN" sx={{ width: 50, height: 38 }} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: 'bold', mb: 0.5, color: 'text.primary' }}>
                  Other streaming apps
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  CPM estimate: $10-$30
                </Typography>
              </Box>
              
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Switch
                  size="small"
                  checked={placementToggle}
                  onChange={(e) => setPlacementToggle(e.target.checked)}
                />
                <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold', minWidth: '60px' }}>
                  {placementToggle ? 'Include' : 'Exclude'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
