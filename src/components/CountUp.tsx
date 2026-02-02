import { useEffect, useState } from 'react'; // Importing React hooks: useEffect for side effects (animation), useState for managing the number value.

// Defining the expected properties (props) for this component.
interface CountUpProps {
  end: number;        // The final number to stop at (e.g., 225).
  duration?: number;  // Optional: How long the animation takes in milliseconds.
  suffix?: string;    // Optional: A string to add after the number (e.g., "+").
  easing?: 'easeOutExpo' | 'linear' | 'easeOutQuad'; // Optional: The easing function to use.
}

// The Component definition. Defaults: duration is 2000ms (2s), suffix is empty, easing is 'easeOutExpo'.
const CountUp = ({ end, duration = 2000, suffix = '', easing = 'easeOutExpo' }: CountUpProps) => {
  // State variable 'count' holds the current number being displayed. Starts at 0.
  const [count, setCount] = useState(0);

  // useEffect triggers the animation logic whenever 'end', 'duration' or 'easing' changes.
  useEffect(() => {
    let startTime: number | null = null; // Variable to track when the animation loop starts.
    let animationFrameId: number;        // Stores the ID of the requested frame so we can cancel it later.

    // This function runs on every frame of the animation.
    const animate = (timestamp: number) => {
      // 'timestamp' is automatically provided by requestAnimationFrame.
      // If this is the first frame, set the start time.
      if (!startTime) startTime = timestamp;

      // Calculate how much time has passed since the start.
      const progress = timestamp - startTime;

      // Calculate progress as a percentage between 0 and 1 (0% to 100%).
      // Math.min ensures it never goes above 1 even if the animation runs slightly longer.
      const percentage = Math.min(progress / duration, 1);

      // Determine the easing value based on the selected easing type.
      let easeValue = percentage; // Default to linear

      if (easing === 'easeOutExpo') {
        // Ease-out expo: Fast start, very slow end.
        easeValue = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      } else if (easing === 'easeOutQuad') {
        // Ease-out quad: Smoother deceleration, not as fast at the start as Expo.
        easeValue = 1 - (1 - percentage) * (1 - percentage);
      } else if (easing === 'linear') {
        // Linear: Constant speed. Good for small numbers to show every step.
        easeValue = percentage;
      }
      
      // Update the state with the current number. 
      // Math.floor removes decimals (we only want whole numbers).
      setCount(Math.floor(easeValue * end));

      // If the time passed is less than the duration, keep animating.
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate); // Request the next frame.
      } else {
        setCount(end); // Ensure the final number is exactly the 'end' value.
      }
    };

    // Start the animation loop.
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function: runs when the component unmounts or props change.
    // This stops the animation to prevent memory leaks or errors.
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, easing]); // Dependency array: only re-run if these values change.

  // Render the component.
  return (
    <>
      {count}  {/* Display the current animated number */}
      {suffix} {/* Display the suffix (like "+") immediately after the number */}
    </>
  );
};

export default CountUp;