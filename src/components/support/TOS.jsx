const TOS = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="shadow-md text-white border-b-2 border-x p-6 rounded-lg border-secondary-500">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions of Use</h1>
      <p className="mb-2">
        <strong>Important Notice</strong>
      </p>
      <p className="mb-4">
        This is a sample project and not a real course. The terms and conditions
        presented below are fictitious and are designed solely for demonstration
        purposes.
      </p>
      <p className="mb-2">
        <strong>1. Introduction</strong>
      </p>
      <p className="mb-4">
        By using our online programming courses platform, you accept these terms
        and conditions in full. If you disagree with these terms and conditions
        or any part of these terms and conditions, you must not use our
        platform.
      </p>
      <p className="mb-2">
        <strong>2. License to use the platform</strong>
      </p>
      <p className="mb-4">
        Unless otherwise stated, we own the intellectual property rights of the
        platform and the material on the platform. All these intellectual
        property rights are reserved.
      </p>
      <p className="mb-2">
        <strong>3. Acceptable Use</strong>
      </p>
      <p className="mb-4">
        You must not use our platform in any way that causes, or may cause,
        damage to the platform or impairment of the availability or
        accessibility of the platform.
      </p>
      <p className="mb-2">
        <strong>4. Limitations of Liability</strong>
      </p>
      <p className="mb-4">
        Our platform is provided "as is" without any warranty or representation,
        express or implied. We are not liable for any indirect, consequential or
        incidental loss.
      </p>
      <p className="mb-2">
        <strong>5. Variation</strong>
      </p>
      <p className="mb-4">
        We may revise these terms and conditions at any time without notice.
      </p>
      <p className="mb-2">
        <strong>6. Law and Jurisdiction</strong>
      </p>
      <p className="mb-4">
        These terms and conditions will be governed by and construed in
        accordance with the laws of the country where the project is based.
      </p>
      <p className="mb-2">
        <strong>Last update date:</strong> {currentDate}
      </p>
    </div>
  );
};

export default TOS;
