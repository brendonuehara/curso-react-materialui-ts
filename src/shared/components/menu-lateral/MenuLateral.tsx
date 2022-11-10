import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IMenuLateral {
  children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();

  return (
    <><>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b2ec0a8-3b2f-4e35-879b-7b4e270d6314/df10bvx-4948d2c0-d89f-4efa-aae8-374760251280.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiMmVjMGE4LTNiMmYtNGUzNS04NzliLTdiNGUyNzBkNjMxNFwvZGYxMGJ2eC00OTQ4ZDJjMC1kODlmLTRlZmEtYWFlOC0zNzQ3NjAyNTEyODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zKMqqrh-HWfxwXs2ps--1vlWOdC8wV-kK8aIsseYAIs" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </><>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </></>
  );
};
