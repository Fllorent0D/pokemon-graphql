import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutTypesInput } from './generations-create-without-types.input';

@InputType()
export class generationsCreateOrConnectWithoutTypesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutTypesInput, {nullable:false})
    @Type(() => generationsCreateWithoutTypesInput)
    create!: generationsCreateWithoutTypesInput;
}
