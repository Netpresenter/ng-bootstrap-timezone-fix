const ALIASES = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout'],
};
export function parseTriggers(triggers) {
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((trigger) => trigger.split(':'))
        .map((triggerPair) => (ALIASES[triggerPair[0]] || triggerPair));
    const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.includes('manual'));
    if (manualTriggers.length > 1) {
        throw `Triggers parse error: only one manual trigger is allowed`;
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw `Triggers parse error: manual trigger can't be mixed with other triggers`;
    }
    return manualTriggers.length ? [] : parsedTriggers;
}
export function listenToTriggers(element, triggers, isOpenedFn, openFn, closeFn, openDelayMs = 0, closeDelayMs = 0) {
    const parsedTriggers = parseTriggers(triggers);
    if (parsedTriggers.length === 0) {
        return () => { };
    }
    const activeOpenTriggers = new Set();
    const cleanupFns = [];
    let timeout;
    function addEventListener(name, listener) {
        element.addEventListener(name, listener);
        cleanupFns.push(() => element.removeEventListener(name, listener));
    }
    function withDelay(fn, delayMs) {
        clearTimeout(timeout);
        if (delayMs > 0) {
            timeout = setTimeout(fn, delayMs);
        }
        else {
            fn();
        }
    }
    for (const [openTrigger, closeTrigger] of parsedTriggers) {
        if (!closeTrigger) {
            addEventListener(openTrigger, () => isOpenedFn() ? withDelay(closeFn, closeDelayMs) : withDelay(openFn, openDelayMs));
        }
        else {
            addEventListener(openTrigger, () => {
                activeOpenTriggers.add(openTrigger);
                withDelay(() => activeOpenTriggers.size > 0 && openFn(), openDelayMs);
            });
            addEventListener(closeTrigger, () => {
                activeOpenTriggers.delete(openTrigger);
                withDelay(() => activeOpenTriggers.size === 0 && closeFn(), closeDelayMs);
            });
        }
    }
    return () => cleanupFns.forEach((cleanupFn) => cleanupFn());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC90cmlnZ2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRztJQUNmLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDbkMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztDQUM5QixDQUFDO0FBRUYsTUFBTSxVQUFVLGFBQWEsQ0FBQyxRQUFnQjtJQUM3QyxNQUFNLGVBQWUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsTUFBTSxjQUFjLEdBQUcsZUFBZTtTQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ1osR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFzQixDQUFDLENBQUM7SUFFdEYsTUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTlGLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMvQixNQUFNLDBEQUEwRCxDQUFDO0lBQ2xFLENBQUM7SUFFRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDOUQsTUFBTSx5RUFBeUUsQ0FBQztJQUNqRixDQUFDO0lBRUQsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUMvQixPQUFvQixFQUNwQixRQUFnQixFQUNoQixVQUF5QixFQUN6QixNQUFrQixFQUNsQixPQUFtQixFQUNuQixXQUFXLEdBQUcsQ0FBQyxFQUNmLFlBQVksR0FBRyxDQUFDO0lBRWhCLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDakMsT0FBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUM3QyxNQUFNLFVBQVUsR0FBbUIsRUFBRSxDQUFDO0lBQ3RDLElBQUksT0FBWSxDQUFDO0lBRWpCLFNBQVMsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFFBQW9CO1FBQzNELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLEVBQWMsRUFBRSxPQUFlO1FBQ2pELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqQixPQUFPLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO2FBQU0sQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1FBQ04sQ0FBQztJQUNGLENBQUM7SUFFRCxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLElBQUksY0FBYyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ25CLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FDbEMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQ2hGLENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNQLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBRyxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFDSCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO2dCQUNuQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLE9BQU8sRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFMSUFTRVMgPSB7XG5cdGhvdmVyOiBbJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSddLFxuXHRmb2N1czogWydmb2N1c2luJywgJ2ZvY3Vzb3V0J10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vyczogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nP11bXSB7XG5cdGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xuXG5cdGlmICh0cmltbWVkVHJpZ2dlcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnNcblx0XHQuc3BsaXQoL1xccysvKVxuXHRcdC5tYXAoKHRyaWdnZXIpID0+IHRyaWdnZXIuc3BsaXQoJzonKSlcblx0XHQubWFwKCh0cmlnZ2VyUGFpcikgPT4gKEFMSUFTRVNbdHJpZ2dlclBhaXJbMF1dIHx8IHRyaWdnZXJQYWlyKSBhcyBbc3RyaW5nLCBzdHJpbmc/XSk7XG5cblx0Y29uc3QgbWFudWFsVHJpZ2dlcnMgPSBwYXJzZWRUcmlnZ2Vycy5maWx0ZXIoKHRyaWdnZXJQYWlyKSA9PiB0cmlnZ2VyUGFpci5pbmNsdWRlcygnbWFudWFsJykpO1xuXG5cdGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG5cdFx0dGhyb3cgYFRyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkYDtcblx0fVxuXG5cdGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnMubGVuZ3RoID4gMSkge1xuXHRcdHRocm93IGBUcmlnZ2VycyBwYXJzZSBlcnJvcjogbWFudWFsIHRyaWdnZXIgY2FuJ3QgYmUgbWl4ZWQgd2l0aCBvdGhlciB0cmlnZ2Vyc2A7XG5cdH1cblxuXHRyZXR1cm4gbWFudWFsVHJpZ2dlcnMubGVuZ3RoID8gW10gOiBwYXJzZWRUcmlnZ2Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMoXG5cdGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuXHR0cmlnZ2Vyczogc3RyaW5nLFxuXHRpc09wZW5lZEZuOiAoKSA9PiBib29sZWFuLFxuXHRvcGVuRm46ICgpID0+IHZvaWQsXG5cdGNsb3NlRm46ICgpID0+IHZvaWQsXG5cdG9wZW5EZWxheU1zID0gMCxcblx0Y2xvc2VEZWxheU1zID0gMCxcbikge1xuXHRjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnModHJpZ2dlcnMpO1xuXG5cdGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gKCkgPT4ge307XG5cdH1cblxuXHRjb25zdCBhY3RpdmVPcGVuVHJpZ2dlcnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0Y29uc3QgY2xlYW51cEZuczogKCgpID0+IHZvaWQpW10gPSBbXTtcblx0bGV0IHRpbWVvdXQ6IGFueTtcblxuXHRmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5hbWU6IHN0cmluZywgbGlzdGVuZXI6ICgpID0+IHZvaWQpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuXHRcdGNsZWFudXBGbnMucHVzaCgoKSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHdpdGhEZWxheShmbjogKCkgPT4gdm9pZCwgZGVsYXlNczogbnVtYmVyKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChkZWxheU1zID4gMCkge1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZm4sIGRlbGF5TXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmbigpO1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3QgW29wZW5UcmlnZ2VyLCBjbG9zZVRyaWdnZXJdIG9mIHBhcnNlZFRyaWdnZXJzKSB7XG5cdFx0aWYgKCFjbG9zZVRyaWdnZXIpIHtcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIob3BlblRyaWdnZXIsICgpID0+XG5cdFx0XHRcdGlzT3BlbmVkRm4oKSA/IHdpdGhEZWxheShjbG9zZUZuLCBjbG9zZURlbGF5TXMpIDogd2l0aERlbGF5KG9wZW5Gbiwgb3BlbkRlbGF5TXMpLFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcihvcGVuVHJpZ2dlciwgKCkgPT4ge1xuXHRcdFx0XHRhY3RpdmVPcGVuVHJpZ2dlcnMuYWRkKG9wZW5UcmlnZ2VyKTtcblx0XHRcdFx0d2l0aERlbGF5KCgpID0+IGFjdGl2ZU9wZW5UcmlnZ2Vycy5zaXplID4gMCAmJiBvcGVuRm4oKSwgb3BlbkRlbGF5TXMpO1xuXHRcdFx0fSk7XG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKGNsb3NlVHJpZ2dlciwgKCkgPT4ge1xuXHRcdFx0XHRhY3RpdmVPcGVuVHJpZ2dlcnMuZGVsZXRlKG9wZW5UcmlnZ2VyKTtcblx0XHRcdFx0d2l0aERlbGF5KCgpID0+IGFjdGl2ZU9wZW5UcmlnZ2Vycy5zaXplID09PSAwICYmIGNsb3NlRm4oKSwgY2xvc2VEZWxheU1zKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoKSA9PiBjbGVhbnVwRm5zLmZvckVhY2goKGNsZWFudXBGbikgPT4gY2xlYW51cEZuKCkpO1xufVxuIl19