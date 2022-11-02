const singletonKey = "__charrue_singleton_key__" as const;

type SingletonClass<V> = { new (...args: any[]): V } & { [singletonKey]: Record<string, V> };

export default function Singleton<T>(getScope?: (...args: any[]) => any): any {
  return (target: SingletonClass<T>) => {
    const Ctor: SingletonClass<T> = target as SingletonClass<T>;

    Ctor[singletonKey] = {};

    const IsSingleton = function (this: any, ...args: any[]) {
      const scope = getScope
        ? JSON.stringify(getScope(...args))
        : JSON.stringify(Array.from(args));

      if (Ctor.prototype !== this.constructor.prototype) {
        Ctor.constructor.call(this, ...args);
        return this;
      }

      if (!Ctor[singletonKey][scope]) {
        Ctor[singletonKey][scope] = new Ctor(...args);
      }
      return Ctor[singletonKey][scope];
    };

    Object.defineProperties(
      IsSingleton,
      Object.getOwnPropertyDescriptors(Ctor),
    );
    return IsSingleton;
  };
}
