import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_typesOrderByWithRelationInput } from '../contest-types/contest-types-order-by-with-relation.input';
import { statsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';
import { nature_battle_style_preferencesOrderByRelationAggregateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-order-by-relation-aggregate.input';
import { nature_namesOrderByRelationAggregateInput } from '../nature-names/nature-names-order-by-relation-aggregate.input';
import { nature_pokeathlon_statsOrderByRelationAggregateInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-order-by-relation-aggregate.input';

@InputType()
export class naturesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decreased_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    increased_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hates_flavor_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes_flavor_id?: keyof typeof SortOrder;

    @Field(() => contest_typesOrderByWithRelationInput, {nullable:true})
    contest_types_contest_typesTonatures_likes_flavor_id?: contest_typesOrderByWithRelationInput;

    @Field(() => contest_typesOrderByWithRelationInput, {nullable:true})
    contest_types_contest_typesTonatures_hates_flavor_id?: contest_typesOrderByWithRelationInput;

    @Field(() => statsOrderByWithRelationInput, {nullable:true})
    stats_natures_increased_stat_idTostats?: statsOrderByWithRelationInput;

    @Field(() => statsOrderByWithRelationInput, {nullable:true})
    stats_natures_decreased_stat_idTostats?: statsOrderByWithRelationInput;

    @Field(() => nature_battle_style_preferencesOrderByRelationAggregateInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesOrderByRelationAggregateInput;

    @Field(() => nature_namesOrderByRelationAggregateInput, {nullable:true})
    nature_names?: nature_namesOrderByRelationAggregateInput;

    @Field(() => nature_pokeathlon_statsOrderByRelationAggregateInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsOrderByRelationAggregateInput;
}
