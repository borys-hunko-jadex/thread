import { ClassConstructor, plainToInstance } from 'class-transformer';

const TransformResponse = <T>(classConstructor: ClassConstructor<T>) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      return plainToInstance(
        classConstructor,
        originalMethod.apply(this, args),
        {
          excludeExtraneousValues: true,
          enableCircularCheck: true,
        },
      );
    };
  };
};

export default TransformResponse;
