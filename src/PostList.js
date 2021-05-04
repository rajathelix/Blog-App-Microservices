import axios from 'axios'
import React, { useState, UseEffect, useEffect } from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
export default () => {
    const [post, setPosts] = useState({})
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts();
    }, [])
    const renderedPosts = Object.values(post).map(post => {
        return (
            <div className="card" style={{ width: '30%', marginButtom: '20px' }} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center">{renderedPosts}</div>
    )
}