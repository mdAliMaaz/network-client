import React, { createContext, useState, useEffect, useContext } from "react";
import { useRecoilValue } from "recoil";
import io, { Socket } from "socket.io-client";
import { userState } from "@/atoms/userAtom";

interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];
}

const SocketContext = createContext<SocketContextType | null>(null);

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

export const SocketContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user) {
      const newSocket = io("http://localhost:8000", {
        query: {
          userId: user?._id,
        },
      });

      setSocket(newSocket);
      newSocket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
