import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesCreateWithoutTypesInput } from './berries-create-without-types.input';

@InputType()
export class berriesCreateOrConnectWithoutTypesInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesCreateWithoutTypesInput, {nullable:false})
    @Type(() => berriesCreateWithoutTypesInput)
    create!: berriesCreateWithoutTypesInput;
}
