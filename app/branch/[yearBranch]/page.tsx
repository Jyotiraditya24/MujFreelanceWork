export default async function ({
  params,
}: {
  params: Promise<{ yearBranch: string }>;
}) {
  const { yearBranch } = await params;
  return <div>page of {yearBranch}</div>;
}
