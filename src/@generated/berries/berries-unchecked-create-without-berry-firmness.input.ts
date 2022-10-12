import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berry_flavorsUncheckedCreateNestedManyWithoutBerriesInput } from '../berry-flavors/berry-flavors-unchecked-create-nested-many-without-berries.input';

@InputType()
export class berriesUncheckedCreateWithoutBerry_firmnessInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Int, {nullable:true})
    natural_gift_type_id?: number;

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

    @Field(() => berry_flavorsUncheckedCreateNestedManyWithoutBerriesInput, {nullable:true})
    berry_flavors?: berry_flavorsUncheckedCreateNestedManyWithoutBerriesInput;
}
