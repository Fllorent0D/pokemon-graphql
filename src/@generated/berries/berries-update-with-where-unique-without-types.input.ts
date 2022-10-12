import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesUpdateWithoutTypesInput } from './berries-update-without-types.input';

@InputType()
export class berriesUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => berriesUpdateWithoutTypesInput)
    data!: berriesUpdateWithoutTypesInput;
}
