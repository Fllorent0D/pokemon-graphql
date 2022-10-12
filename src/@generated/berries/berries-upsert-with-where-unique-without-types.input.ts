import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesUpdateWithoutTypesInput } from './berries-update-without-types.input';
import { berriesCreateWithoutTypesInput } from './berries-create-without-types.input';

@InputType()
export class berriesUpsertWithWhereUniqueWithoutTypesInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => berriesUpdateWithoutTypesInput)
    update!: berriesUpdateWithoutTypesInput;

    @Field(() => berriesCreateWithoutTypesInput, {nullable:false})
    @Type(() => berriesCreateWithoutTypesInput)
    create!: berriesCreateWithoutTypesInput;
}
