import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { TypesRelationFilter } from '../prisma/types-relation-filter.input';
import { Berry_firmnessRelationFilter } from '../prisma/berry-firmness-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';
import { Berry_flavorsListRelationFilter } from '../prisma/berry-flavors-list-relation-filter.input';

@InputType()
export class berriesWhereInput {

    @Field(() => [berriesWhereInput], {nullable:true})
    AND?: Array<berriesWhereInput>;

    @Field(() => [berriesWhereInput], {nullable:true})
    OR?: Array<berriesWhereInput>;

    @Field(() => [berriesWhereInput], {nullable:true})
    NOT?: Array<berriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    firmness_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    natural_gift_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    natural_gift_type_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    size?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_harvest?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_time?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    soil_dryness?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    smoothness?: IntFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types?: TypesRelationFilter;

    @Field(() => Berry_firmnessRelationFilter, {nullable:true})
    berry_firmness?: Berry_firmnessRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;

    @Field(() => Berry_flavorsListRelationFilter, {nullable:true})
    berry_flavors?: Berry_flavorsListRelationFilter;
}
