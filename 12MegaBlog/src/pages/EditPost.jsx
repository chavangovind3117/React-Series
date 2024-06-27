import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    console.log("slug : ", slug)

    const fetchPost = async () => {
        if (slug) {
            try {
                const post = await appwriteService.getPost(slug)
                if (post) {
                    setPost(post)
                }
            } catch (error) {
                console.error("Error fetching post:", error)
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        fetchPost();
    }, [slug, navigate])

    console.log("edit btn", post)

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost