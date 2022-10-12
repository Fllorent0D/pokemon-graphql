import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesUpdateWithoutBerry_firmnessInput } from './berries-update-without-berry-firmness.input';

@InputType()
export class berriesUpdateWithWhereUniqueWithoutBerry_firmnessInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesUpdateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berriesUpdateWithoutBerry_firmnessInput)
    data!: berriesUpdateWithoutBerry_firmnessInput;
}
