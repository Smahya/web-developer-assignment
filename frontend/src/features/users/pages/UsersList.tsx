"use client";

import { TableComponent } from "@/components/Table/Table";

import { User, TableColumn } from "@/types/shared";
import { Text } from "@/components/Text";
import { useUsersList } from "@/hooks/useUsersList";
import { useRouter } from "next/navigation";

export default function UsersListPage() {
  const router = useRouter();
  const { data: usersData, setQuery, query, isLoading } = useUsersList();

  return (
    <div className="grid gap-6 px-4">
      <Text variant="h2">Users</Text>

      <TableComponent<User>
        columns={userColumns}
        data={usersData?.data || []}
        total={usersData?.count || 0}
        loading={isLoading}
        page={query.pageNumber}
        pageSize={query.pageSize}
        handleRowClick={(row) => {
          router.push(`/posts/${row.id}?name=${row.name}&email=${row.email}`);
        }}
        setPage={(page) => setQuery({ ...query, pageNumber: page })}
      />
    </div>
  );
}

const userColumns: TableColumn<User>[] = [
  {
    key: "name",
    label: "Full Name",
  },
  {
    key: "email",
    label: "Email Address",
    render: (value) => <span className="lowercase">{value as string}</span>,
  },
  {
    key: "address",
    label: "Address",
    width: "50%",
    render: (_, row) => {
      if (!row.address) return <span>-</span>;

      const { street, state, city, zipcode } = row.address;
      const formattedAddress = `${street}, ${state}, ${city}, ${zipcode}`;

      return <span title={formattedAddress}>{formattedAddress}</span>;
    },
  },
];
