import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutTypesInput } from './generations-update-without-types.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutTypesInput } from './generations-create-without-types.input';

@InputType()
export class generationsUpsertWithoutTypesInput {

    @Field(() => generationsUpdateWithoutTypesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutTypesInput)
    update!: generationsUpdateWithoutTypesInput;

    @Field(() => generationsCreateWithoutTypesInput, {nullable:false})
    @Type(() => generationsCreateWithoutTypesInput)
    create!: generationsCreateWithoutTypesInput;
}
