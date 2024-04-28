import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const UserSearch = () => {
  return (
    <div className="flex items-center space-x-1">
        <Input placeholder="Search for a user" />
        <Button size={"icon"}>
          <Search />
        </Button>
      </div>
  )
}

export default UserSearch
