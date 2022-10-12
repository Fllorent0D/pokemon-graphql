import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';
import { Type } from 'class-transformer';
import { type_namesCreateWithoutTypesInput } from './type-names-create-without-types.input';

@InputType()
export class type_namesCreateOrConnectWithoutTypesInput {

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;

    @Field(() => type_namesCreateWithoutTypesInput, {nullable:false})
    @Type(() => type_namesCreateWithoutTypesInput)
    create!: type_namesCreateWithoutTypesInput;
}
