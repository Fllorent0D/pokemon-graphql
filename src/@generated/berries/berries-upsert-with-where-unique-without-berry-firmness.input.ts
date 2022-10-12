import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesUpdateWithoutBerry_firmnessInput } from './berries-update-without-berry-firmness.input';
import { berriesCreateWithoutBerry_firmnessInput } from './berries-create-without-berry-firmness.input';

@InputType()
export class berriesUpsertWithWhereUniqueWithoutBerry_firmnessInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesUpdateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berriesUpdateWithoutBerry_firmnessInput)
    update!: berriesUpdateWithoutBerry_firmnessInput;

    @Field(() => berriesCreateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berriesCreateWithoutBerry_firmnessInput)
    create!: berriesCreateWithoutBerry_firmnessInput;
}
