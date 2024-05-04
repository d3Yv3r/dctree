import LinkItem from "@/components/LinkItem";
import LinkList from "@/components/LinkList";
import storage from "@/storage";

const links = storage.getAccountLinks();

export default function AccountLinks() {
  return (
    <LinkList>
      <img
        src={storage.getItem("logo-img")}
        width="200px"
        className="m-auto"
        style={{ borderRadius: "100%" }}
        alt="Logo"
      />
      {links.map((item, index) => (
        <LinkItem {...item} key={index} />
      ))}
    </LinkList>
  );
}
