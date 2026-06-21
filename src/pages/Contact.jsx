export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100">
          <h1 className="text-3xl font-extrabold text-blue-950 mb-6 text-center">Contact Us</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
