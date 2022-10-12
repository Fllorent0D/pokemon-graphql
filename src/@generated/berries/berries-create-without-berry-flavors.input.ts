import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { typesCreateNestedOneWithoutBerriesInput } from '../types/types-create-nested-one-without-berries.input';
import { berry_firmnessCreateNestedOneWithoutBerriesInput } from '../berry-firmness/berry-firmness-create-nested-one-without-berries.input';
import { itemsCreateNestedOneWithoutBerriesInput } from '../items/items-create-nested-one-without-berries.input';

@InputType()
export class berriesCreateWithoutBerry_flavorsInput {

    @Field(() => Int, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    max_harvest!: number;

    @Field(() => Int, {nullable:false})
    growth_time!: number;

    @Field(() => Int, {nullable:false})
    soil_dryness!: number;

    @Field(() => Int, {nullable:false})
    smoothness!: number;

    @Field(() => typesCreateNestedOneWithoutBerriesInput, {nullable:true})
    types?: typesCreateNestedOneWithoutBerriesInput;

    @Field(() => berry_firmnessCreateNestedOneWithoutBerriesInput, {nullable:false})
    berry_firmness!: berry_firmnessCreateNestedOneWithoutBerriesInput;

    @Field(() => itemsCreateNestedOneWithoutBerriesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutBerriesInput;
}
