import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const copyright = (
    <Typography variant="body2" color="textSecondary" align="center">
        {'copyright © '}
        <Link color="inherit" href="https://github.com/hekaiyou/rainbond-react-demo">
            dragonli test
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);
