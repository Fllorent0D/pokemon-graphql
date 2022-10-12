import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesUpdateWithoutItemsInput } from './berries-update-without-items.input';

@InputType()
export class berriesUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => berriesUpdateWithoutItemsInput)
    data!: berriesUpdateWithoutItemsInput;
}
