import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berry_firmnessCreateNestedOneWithoutBerriesInput } from '../berry-firmness/berry-firmness-create-nested-one-without-berries.input';
import { itemsCreateNestedOneWithoutBerriesInput } from '../items/items-create-nested-one-without-berries.input';
import { berry_flavorsCreateNestedManyWithoutBerriesInput } from '../berry-flavors/berry-flavors-create-nested-many-without-berries.input';

@InputType()
export class berriesCreateWithoutTypesInput {

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

    @Field(() => berry_firmnessCreateNestedOneWithoutBerriesInput, {nullable:false})
    berry_firmness!: berry_firmnessCreateNestedOneWithoutBerriesInput;

    @Field(() => itemsCreateNestedOneWithoutBerriesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutBerriesInput;

    @Field(() => berry_flavorsCreateNestedManyWithoutBerriesInput, {nullable:true})
    berry_flavors?: berry_flavorsCreateNestedManyWithoutBerriesInput;
}
