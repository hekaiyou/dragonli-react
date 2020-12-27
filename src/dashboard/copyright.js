import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const copyright = (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/hekaiyou/rainbond-react-demo">
            Rainbond React Demo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);
