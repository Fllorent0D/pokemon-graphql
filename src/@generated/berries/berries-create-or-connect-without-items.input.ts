import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesCreateWithoutItemsInput } from './berries-create-without-items.input';

@InputType()
export class berriesCreateOrConnectWithoutItemsInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesCreateWithoutItemsInput, {nullable:false})
    @Type(() => berriesCreateWithoutItemsInput)
    create!: berriesCreateWithoutItemsInput;
}
