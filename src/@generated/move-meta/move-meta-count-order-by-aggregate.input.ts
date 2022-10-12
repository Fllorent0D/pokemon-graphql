import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class move_metaCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta_ailment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_hits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_hits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_turns?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_turns?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recoil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    healing?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    crit_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ailment_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flinch_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_chance?: keyof typeof SortOrder;
}
