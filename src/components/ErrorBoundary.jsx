import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-navy-night px-4 text-center text-offwhite">
          <h2 className="font-title text-3xl text-gold sm:text-4xl">حدث خطأ غير متوقع</h2>
          <p className="mt-2 text-sm text-offwhite/70">يرجى إعادة تحميل الصفحة أو العودة للرئيسية.</p>
          <button
            onClick={() => window.location.assign(import.meta.env.MODE === "production" ? "/WARETH" : "/")}
            className="mt-6 rounded border border-gold px-4 py-2 text-gold transition hover:bg-gold/10"
          >
            الرئيسية
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}