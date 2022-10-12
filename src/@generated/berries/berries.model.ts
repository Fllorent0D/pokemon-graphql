import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { types } from '../types/types.model';
import { berry_firmness } from '../berry-firmness/berry-firmness.model';
import { items } from '../items/items.model';
import { berry_flavors } from '../berry-flavors/berry-flavors.model';
import { BerriesCount } from '../prisma/berries-count.output';

@ObjectType()
export class berries {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    firmness_id!: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power!: number | null;

    @Field(() => Int, {nullable:true})
    natural_gift_type_id!: number | null;

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

    @Field(() => types, {nullable:true})
    types?: types | null;

    @Field(() => berry_firmness, {nullable:false})
    berry_firmness?: berry_firmness;

    @Field(() => items, {nullable:false})
    items?: items;

    @Field(() => [berry_flavors], {nullable:true})
    berry_flavors?: Array<berry_flavors>;

    @Field(() => BerriesCount, {nullable:false})
    _count?: BerriesCount;
}
