import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './index';
import { hours } from '../../data/storeData';

export default function StoreStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [nextChange, setNextChange] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkStoreStatus = () => {
      const now = currentTime;
      const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeInMinutes = currentHour * 60 + currentMinute;

      // Store hours: 9 AM - 12 AM (midnight)
      const openTime = 9 * 60; // 9 AM in minutes
      const closeTime = 24 * 60; // 12 AM (midnight) in minutes

      // Check if store is open
      const isCurrentlyOpen = currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;

      setIsOpen(isCurrentlyOpen);

      // Calculate next change
      if (isCurrentlyOpen) {
        // Store is open, calculate time until close
        const minutesUntilClose = closeTime - currentTimeInMinutes;
        const hoursUntilClose = Math.floor(minutesUntilClose / 60);
        const minutesUntilCloseRemainder = minutesUntilClose % 60;

        if (hoursUntilClose > 0) {
          setNextChange(`Closes in ${hoursUntilClose}h ${minutesUntilCloseRemainder}m`);
        } else {
          setNextChange(`Closes in ${minutesUntilCloseRemainder}m`);
        }
      } else {
        // Store is closed, calculate time until open
        let minutesUntilOpen;
        if (currentTimeInMinutes < openTime) {
          // Before opening today
          minutesUntilOpen = openTime - currentTimeInMinutes;
        } else {
          // After closing, opens tomorrow
          minutesUntilOpen = (24 * 60 - currentTimeInMinutes) + openTime;
        }

        const hoursUntilOpen = Math.floor(minutesUntilOpen / 60);
        const minutesUntilOpenRemainder = minutesUntilOpen % 60;

        if (hoursUntilOpen > 0) {
          setNextChange(`Opens in ${hoursUntilOpen}h ${minutesUntilOpenRemainder}m`);
        } else {
          setNextChange(`Opens in ${minutesUntilOpenRemainder}m`);
        }
      }
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
        isOpen
          ? 'bg-green-500/10 border-green-500/20 text-green-500'
          : 'bg-red-500/10 border-red-500/20 text-red-500'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
      <span className="text-sm font-medium">
        {isOpen ? 'Open Now' : 'Closed'}
      </span>
      <span className="text-xs opacity-75">•</span>
      <span className="text-xs opacity-75">{nextChange}</span>
    </motion.div>
  );
}
