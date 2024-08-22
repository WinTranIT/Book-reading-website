import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation, useNavigate} from 'react-router-dom';
import '../css/BookPage.css'; // Đảm bảo bạn có file CSS này
import Search from "../components/Search";
// Import các hình ảnh
import logo from '../imgs/logo.png';

import book from '../imgs/book.jpg';
import author from '../imgs/nguoi.jpg';
import a0 from "../imgs/img-contact.png";
import a1 from "../imgs/451112440_1898269430639898_843756217286475983_n.png";
import {getBookDetail, getBookLatest} from "../services/apiService";
import Suggestions from "../components/Suggestions";
import TrendingBooks from "../components/TrendingBooks";
const BookPage = () => {
    const [rating, setRating] = useState(0);
    const [bookDetails, setBookDetails] = useState(null);
    const [books, setBooks] = useState([]);

    const location = useLocation();
    const id = new URLSearchParams(location.search).get('query');


    const navigate = useNavigate();
    useEffect(() => {
        const fetchBookDetails = async () => {
            if (id) {
                try {
                    const data = await getBookDetail(id);
                    setBookDetails(data);
                } catch (error) {
                    console.error('Error fetching book details:', error);
                }
            }
        };

        fetchBookDetails();
    }, [id]);

    const handleRatingClick = (newRating) => {
        setRating(newRating);
    };

    const reviews = [
        {
            id: 1,
            userName: "User Name",
            reviewsCount: "0,000 Reviews",
            followersCount: "102 Followers",
            reviewDate: "Month DD, YYYY",
            reviewContent: "Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex",
            likesCount: "54 Likes"
        },
        {
            id: 2,
            userName: "User Name",
            reviewsCount: "0,000 Reviews",
            followersCount: "102 Followers",
            reviewDate: "Month DD, YYYY",
            reviewContent: "Ut commodo elit adipiscing hendrerit non non elementum id id cursus non odio vel tincidunt quam at, ac sit Nam at, malesuada non placerat Nunc urna ex. eget ipsum ex sapien Lorem varius libero, placerat Cras nec dui Donec In ex felis, volutpat sit amet, varius tincidunt non tortor. elit. Morbi turpis venenatis dui Nullam tincidunt lorem. ipsum Donec fringilla Vestibulum sit consectetur Nam dui. hendrerit vitae turpis lorem. Quisque placerat ex. Cras massa ex ex nisl. ex",
            likesCount: "54 Likes"
        }
    ];


    return (
        <div className="book-page">
            <Search/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="book-info-container">
                            <div className="book-image">
                                {bookDetails && (
                                    <img src={bookDetails.coverImageUrl} alt="Book" className="img-fluid"/>
                                )}
                            </div>
                            <div className="book-actions">
                                <button className="btn btn-primary">Currently Reading</button>
                                <button className="btn btn-secondary"
                                        onClick={()=>navigate(`/read?id=${bookDetails.bookId}`)}>
                                    Want to Read
                                </button>
                                <div className="rating-stars">
                                    {[...Array(5)].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleRatingClick(index + 1)}
                                            className={index < rating ? 'star selected' : 'star'}
                                            aria-label={`Rating ${index + 1}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                                <button className="btn btn-outline-secondary">Book Statics</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="book-description">
                            {bookDetails ? (
                                <>
                                    <h1 className="book-title">{bookDetails.title}</h1>
                                    <p className="author-name">{bookDetails.author}</p>
                                    <div className="d-flex align-items-center mb-3">
                                        <div style={{fontSize: "24px", marginRight: "10px"}}>
                                            <span style={{color: "#f39c12"}}>★ ★ ★ ★ ☆</span>
                                        </div>
                                        <h4 style={{margin: "0"}}>4.5</h4>
                                        <span className="text-muted ml-2">654 Ratings · 756 Reviews</span>
                                    </div>
                                    <p className="content">{bookDetails.description}</p>
                                </>
                            ) : (
                                <p>Loading book details...</p>
                            )}
                        </div>

                        {/* Phần This Edition */}
                        <div className="this-edition mt-4">
                            <h4>This Edition</h4>
                            <table className="table table-borderless">
                                <tbody>
                                <tr>
                                    <td><strong>Format</strong></td>
                                    <td>No. of Pages, Hardcover</td>
                                </tr>
                                <tr>
                                    <td><strong>Expected Publication</strong></td>
                                    <td>21/08/2022, by LibSlay</td>
                                </tr>
                                <tr>
                                    <td><strong>ISBN</strong></td>
                                    <td>123456789000 (ISBN10: 125088425X)</td>
                                </tr>
                                <tr>
                                    <td><strong>Language</strong></td>
                                    <td>Việt Nam</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Phần More Edition */}
                        <div className="more-edition mt-4">
                            <h4>More Suggestions</h4>
                            <Suggestions/>
                        </div>

                        {/* Phần thông tin người dùng */}
                        <div className="user-info mt-4">
                            <a href="#" className="d-block mt-2">Show all Editions</a>
                            <p>
                                <img src={a0} alt="Currently Reading" className="rounded-circle" width="30"
                                     height="30"/>
                                481 people are currently reading
                            </p>
                            <p>
                                <img src={a1} alt="Want to Read" className="rounded-circle" width="30"
                                     height="30"/>
                                189k people want to Read
                            </p>
                            <a href="#" className="d-block">More Information's</a>
                        </div>
                    </div>
                </div>

                <hr className="my-4"/>
                {/* Phần thông tin tác giả (Author Info) */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="author-info">
                            <h2>About the Author</h2>
                            <div className="d-flex align-items-start">
                                <img src={author} alt="Author" className="author-image mr-4 rounded-circle"
                                     style={{width: "100px", height: "100px", objectFit: "cover"}}/>
                                <div className="author-bio">
                                <h4 className="font-weight-bold">Author Name</h4>
                                    <p className="text-muted">No.of Books &nbsp;&nbsp;&nbsp; No.of Followers</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula gravida
                                        lacus venenatis.
                                        Nullam vitae facilisis leo. Hendrerit nec maximus nisl, malesuada tincidunt
                                        facilisis lobortis.
                                        Nullam vitae facilisis laoreet tincidunt non.
                                    </p>
                                    <p>
                                        Cursus volutpat lorem. Amet, nec amet, tortor. Maximus tincidunt convallis.
                                        Faucibus tincidunt
                                        turpis Nam Sed est, consectetur tempor commodo ex.
                                    </p>
                                    <p>
                                        Ut nec est, vehicula, odio convallis. Ut felis, luctus dolor at placerat risus
                                        sit Lorem Ut Donec
                                        laoreet convallis. Quis elementum tortor. Volutpat eget non.
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <button className="btn btn-primary">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-4"/>
                <div className="row mt-5" style={{backgroundColor: "#ECF2D5", padding: "30px", borderRadius: "10px"}}>
                    <div className="col-md-6 text-center">
                        <div className="rating-reviews">
                            <h2 style={{color: "#2A3A61"}}>Rating & Reviews</h2>
                            <img src={author} alt="User" className="rounded-circle mb-3"
                                 style={{width: "80px", height: "80px", objectFit: "cover"}}/>
                            <h4 className="font-weight-bold mb-3">What Do You Think?</h4>

                            <div className="d-flex justify-content-center">
                                <div className="col-sm-3">
                                    <div style={{fontSize: "24px", color: "#FFD700"}}>
                                        {[...Array(5)].map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleRatingClick(index + 1)}
                                                className={index < rating ? 'star selected' : 'star'}
                                                aria-label={`Rating ${index + 1}`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                    <p>Rate This Book</p>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn btn-primary">Write a review</button>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="community-reviews">
                            <h2 style={{color: "#2A3A61"}}>Community Reviews</h2>
                            <div className="d-flex align-items-center mb-3">
                                <div style={{fontSize: "24px", marginRight: "10px"}}>
                                    {/* Dùng icon hoặc các ngôi sao từ thư viện để hiển thị đánh giá */}
                                    <span style={{color: "#f39c12"}}>★ ★ ★ ★ ☆</span>
                                </div>
                                <h4 style={{margin: "0"}}>4.5</h4>
                                <span className="text-muted ml-2">654 Ratings · 756 Reviews</span>
                            </div>
                            <div style={{textAlign: "left"}} className="sprogress-bar">
                                <div className="progress-bar-container">
                                    <span className="stars">5 stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar"
                                             style={{width: "70%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-bar-container">
                                    <span className="stars">4 stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar"
                                             style={{width: "60%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-bar-container">
                                    <span className="stars">3 stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar"
                                             style={{width: "50%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-bar-container">
                                    <span className="stars">2 stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar"
                                             style={{width: "30%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-bar-container">
                                    <span className="stars">1 star</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar"
                                             style={{width: "10%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="reviews-section container">
                    <h3 className="section-title">Readers Reviews</h3>
                    <p>Displaying 1 - 10 of 68 reviews</p>
                    {reviews.map(review => (
                        <div key={review.id} className="review-item row mb-4">

                            <div className="col-2">
                                <img src={author} alt="User" className="img-fluid rounded-circle"
                                     style={{width: "80px", height: "80px", objectFit: "cover"}}/>
                                <div style={{fontSize: "24px", marginRight: "10px"}} className="">
                                    {/* Dùng icon hoặc các ngôi sao từ thư viện để hiển thị đánh giá */}
                                    <span style={{color: "#f39c12"}}>★ ★ ★ ★ ☆</span>
                                </div>
                                <button className="btn btn-primary">Follow</button>
                            </div>

                            <div className="col-10">
                                <div className="user-info">
                                    <strong>{review.userName}</strong>
                                    <p>{review.reviewsCount}</p>
                                    <p>{review.followersCount}</p>
                                </div>

                                <div className="review-content">
                                    <p className="text-muted">{review.reviewDate}</p>
                                    <p>{review.reviewContent}</p>
                                    <div className="review-actions">
                                        <span>{review.likesCount}</span>
                                        <button className="btn btn-link">Like</button>
                                        <button className="btn btn-link">Comment</button>
                                        <button className="btn btn-link">...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="more-edition mt-4">
                    <h4>More Editions</h4>
                    <Suggestions/>
                </div>
                <button style={{borderRadius: "25px", marginTop: "20px", textAlign: "center"}}
                        className="btn btn-primary">All Similar books
                </button>
            </div>
</div>
)
    ;
};

export default BookPage;
