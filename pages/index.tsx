import Link from "next/link";

export default function IndexPage() {
  return(
    <div>
      残金は

      です。
      <Link href="/specification">
        <a>
          明細書を見る
        </a>
      </Link>
    </div>
  )
}