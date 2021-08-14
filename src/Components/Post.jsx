import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    media:{
        height: 200,
        objectFit: 'contain'
    },
    body: {
        fontSize: '15px',
    },
    card:{
        marginBottom: theme.spacing(5)
    }
}))

function Post() {
  const classes = useStyle()
  return (
    <Card className={classes.card} >

        <CardActionArea>
            <CardMedia className={classes.media} 
                image="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/119606636_336098347630734_4733916365893799315_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFKVIdLqzYpxYP2YjVmpwG2mjbtsxMlfHSaNu2zEyV8dEm7w6R3gzn_pac7DOgzKoeGB0ONU1axVYRg-qDnTL8S&_nc_ohc=1kiIACl39s0AX_OYuu0&_nc_ht=scontent.flos1-2.fna&oh=9f18042b0b4dd7ec70d8e211716ed8d0&oe=613AE75D"
                title="My Post"
            />

            <CardContent>
                <Typography gutterBottom variant="h5">My Post</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut ratione quasi quam. Veniam iure distinctio quo, cumque aut hic dicta laudantium ab non nam veritatis! Doloremque, fugit eligendi commodi quo, itaque, incidunt aspernatur nesciunt impedit debitis fuga ipsum. Omnis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut ratione quasi quam. Veniam iure distinctio quo, cumque aut hic dicta laudantium ab non nam veritatis! Doloremque, fugit eligendi commodi quo, itaque, incidunt aspernatur nesciunt impedit debitis fuga ipsum. Omnis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut ratione quasi quam. Veniam iure distinctio quo,
                </Typography>
            </CardContent>

        </CardActionArea>

        <CardActions>
                <Button color="primary">Share</Button>
                <Button color="primary">Learn more</Button>
        </CardActions>

    </Card>
  )
}

export default Post
