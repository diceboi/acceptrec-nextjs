export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-[#312252]">Job not found</h1>
      <p className="text-lg text-neutral-600 mt-4">
        The job you&apos;re looking for may have expired or been removed.
      </p>
      <a
        href="/jobs"
        className="inline-block mt-6 bg-[#00afaa] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-[#019993] transition"
      >
        Back to job listings
      </a>
    </div>
  );
}
