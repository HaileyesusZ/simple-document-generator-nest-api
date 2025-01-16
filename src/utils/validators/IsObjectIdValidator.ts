import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ObjectId } from 'mongodb';

@ValidatorConstraint({ name: 'isObjectId', async: false })
export class IsObjectIdValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return ObjectId.isValid(value);
  }

  defaultMessage(): string {
    return 'Owner Id must be a valid Id';
  }
}
