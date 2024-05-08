import { useEffect, useState } from "react";
import blogService from "../appwrite/blog";
import { Container, Postcard } from "../components";
import { useSelector } from "react-redux";

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        blogService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center h-[75vh]">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Blog Available please add Some !!!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center h-[75vh]">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Blog Available please add Some !!!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home