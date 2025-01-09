export function CustomerReviews() {
  const reviews = [
    {
      text: "All my family member ITR got done by Taxeasy. They helped a lot to reduce my tax liability as per income tax provision. Also TaxEasy charge a very nominal fees as compared to others.",
      author: "Harshit Agarwal",
      initial: "H"
    },
    {
      text: "There are many ITR filing platform who have large customers but they hardly reply to your queries and provide help in time. I have reached to Taxeasy after failed follow ups on many platforms and they have done my itr filing within an hour. That's so easy and so helpful.",
      author: "Shubham S S TRADERS",
      initial: "S"
    },
    {
      text: "I am lucky to get these guys who helped me to file my ITR ITR. TaxEasy is very helpful and professional throughout the process. Never imagined that filing ITR would be this smooth and easy thanks to these guys.",
      author: "Shruti Agrawal",
      initial: "S"
    },
    {
      text: "I got filled my ITR with TaxEasy last year and this year I called for choosing old or new scheme returns that is asked by my employer they provide proper calculation for that without any extra charges. they are best for employees who knows nothing about ITR they guide properly. Thanks TaxEasy",
      author: "Deepti Verma",
      initial: "D"
    },
    {
      text: "Very satisfied with their service. TaxEasy team was very professional in they filed my return on the same day without any hassle. Team have good knowledge of his domain and he clears all the query in a prompt manner",
      author: "GUPTA JI STORE",
      initial: "G"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">Reviews from Customers</h2>
        <p className="text-center text-gray-600 mb-12">Heard from Our Customers what they have to say about Us!</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold mr-3">
                  {review.initial}
                </div>
                <div>
                  <div className="flex items-center">
                    <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-medium">{review.author}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

