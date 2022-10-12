import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_damage_classesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';
import { move_meta_stat_changesOrderByRelationAggregateInput } from '../move-meta-stat-changes/move-meta-stat-changes-order-by-relation-aggregate.input';
import { naturesOrderByRelationAggregateInput } from '../natures/natures-order-by-relation-aggregate.input';
import { pokemon_statsOrderByRelationAggregateInput } from '../pokemon-stats/pokemon-stats-order-by-relation-aggregate.input';
import { stat_hintsOrderByRelationAggregateInput } from '../stat-hints/stat-hints-order-by-relation-aggregate.input';
import { stat_namesOrderByRelationAggregateInput } from '../stat-names/stat-names-order-by-relation-aggregate.input';

@InputType()
export class statsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: keyof typeof SortOrder;

    @Field(() => move_damage_classesOrderByWithRelationInput, {nullable:true})
    move_damage_classes?: move_damage_classesOrderByWithRelationInput;

    @Field(() => move_meta_stat_changesOrderByRelationAggregateInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesOrderByRelationAggregateInput;

    @Field(() => naturesOrderByRelationAggregateInput, {nullable:true})
    natures_natures_increased_stat_idTostats?: naturesOrderByRelationAggregateInput;

    @Field(() => naturesOrderByRelationAggregateInput, {nullable:true})
    natures_natures_decreased_stat_idTostats?: naturesOrderByRelationAggregateInput;

    @Field(() => pokemon_statsOrderByRelationAggregateInput, {nullable:true})
    pokemon_stats?: pokemon_statsOrderByRelationAggregateInput;

    @Field(() => stat_hintsOrderByRelationAggregateInput, {nullable:true})
    stat_hints?: stat_hintsOrderByRelationAggregateInput;

    @Field(() => stat_namesOrderByRelationAggregateInput, {nullable:true})
    stat_names?: stat_namesOrderByRelationAggregateInput;
}
