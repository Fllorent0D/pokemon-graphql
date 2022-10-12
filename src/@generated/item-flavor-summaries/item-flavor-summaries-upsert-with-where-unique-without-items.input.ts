import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesUpdateWithoutItemsInput } from './item-flavor-summaries-update-without-items.input';
import { item_flavor_summariesCreateWithoutItemsInput } from './item-flavor-summaries-create-without-items.input';

@InputType()
export class item_flavor_summariesUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    where!: item_flavor_summariesWhereUniqueInput;

    @Field(() => item_flavor_summariesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_flavor_summariesUpdateWithoutItemsInput)
    update!: item_flavor_summariesUpdateWithoutItemsInput;

    @Field(() => item_flavor_summariesCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_flavor_summariesCreateWithoutItemsInput)
    create!: item_flavor_summariesCreateWithoutItemsInput;
}
