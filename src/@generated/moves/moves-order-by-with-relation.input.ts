import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { super_contest_effectsOrderByWithRelationInput } from '../super-contest-effects/super-contest-effects-order-by-with-relation.input';
import { contest_effectsOrderByWithRelationInput } from '../contest-effects/contest-effects-order-by-with-relation.input';
import { contest_typesOrderByWithRelationInput } from '../contest-types/contest-types-order-by-with-relation.input';
import { move_effectsOrderByWithRelationInput } from '../move-effects/move-effects-order-by-with-relation.input';
import { move_damage_classesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';
import { move_targetsOrderByWithRelationInput } from '../move-targets/move-targets-order-by-with-relation.input';
import { typesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { contest_combosOrderByRelationAggregateInput } from '../contest-combos/contest-combos-order-by-relation-aggregate.input';
import { machinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { move_changelogOrderByRelationAggregateInput } from '../move-changelog/move-changelog-order-by-relation-aggregate.input';
import { move_flag_mapOrderByRelationAggregateInput } from '../move-flag-map/move-flag-map-order-by-relation-aggregate.input';
import { move_flavor_summariesOrderByRelationAggregateInput } from '../move-flavor-summaries/move-flavor-summaries-order-by-relation-aggregate.input';
import { move_flavor_textOrderByRelationAggregateInput } from '../move-flavor-text/move-flavor-text-order-by-relation-aggregate.input';
import { move_metaOrderByWithRelationInput } from '../move-meta/move-meta-order-by-with-relation.input';
import { move_meta_stat_changesOrderByRelationAggregateInput } from '../move-meta-stat-changes/move-meta-stat-changes-order-by-relation-aggregate.input';
import { move_namesOrderByRelationAggregateInput } from '../move-names/move-names-order-by-relation-aggregate.input';
import { pokemon_evolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';
import { super_contest_combosOrderByRelationAggregateInput } from '../super-contest-combos/super-contest-combos-order-by-relation-aggregate.input';

@InputType()
export class movesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: keyof typeof SortOrder;

    @Field(() => super_contest_effectsOrderByWithRelationInput, {nullable:true})
    super_contest_effects?: super_contest_effectsOrderByWithRelationInput;

    @Field(() => contest_effectsOrderByWithRelationInput, {nullable:true})
    contest_effects?: contest_effectsOrderByWithRelationInput;

    @Field(() => contest_typesOrderByWithRelationInput, {nullable:true})
    contest_types?: contest_typesOrderByWithRelationInput;

    @Field(() => move_effectsOrderByWithRelationInput, {nullable:true})
    move_effects?: move_effectsOrderByWithRelationInput;

    @Field(() => move_damage_classesOrderByWithRelationInput, {nullable:true})
    move_damage_classes?: move_damage_classesOrderByWithRelationInput;

    @Field(() => move_targetsOrderByWithRelationInput, {nullable:true})
    move_targets?: move_targetsOrderByWithRelationInput;

    @Field(() => typesOrderByWithRelationInput, {nullable:true})
    types?: typesOrderByWithRelationInput;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => contest_combosOrderByRelationAggregateInput, {nullable:true})
    contest_combos_contest_combos_second_move_idTomoves?: contest_combosOrderByRelationAggregateInput;

    @Field(() => contest_combosOrderByRelationAggregateInput, {nullable:true})
    contest_combos_contest_combos_first_move_idTomoves?: contest_combosOrderByRelationAggregateInput;

    @Field(() => machinesOrderByRelationAggregateInput, {nullable:true})
    machines?: machinesOrderByRelationAggregateInput;

    @Field(() => move_changelogOrderByRelationAggregateInput, {nullable:true})
    move_changelog?: move_changelogOrderByRelationAggregateInput;

    @Field(() => move_flag_mapOrderByRelationAggregateInput, {nullable:true})
    move_flag_map?: move_flag_mapOrderByRelationAggregateInput;

    @Field(() => move_flavor_summariesOrderByRelationAggregateInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesOrderByRelationAggregateInput;

    @Field(() => move_flavor_textOrderByRelationAggregateInput, {nullable:true})
    move_flavor_text?: move_flavor_textOrderByRelationAggregateInput;

    @Field(() => move_metaOrderByWithRelationInput, {nullable:true})
    move_meta?: move_metaOrderByWithRelationInput;

    @Field(() => move_meta_stat_changesOrderByRelationAggregateInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesOrderByRelationAggregateInput;

    @Field(() => move_namesOrderByRelationAggregateInput, {nullable:true})
    move_names?: move_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionOrderByRelationAggregateInput;

    @Field(() => super_contest_combosOrderByRelationAggregateInput, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_second_move_id?: super_contest_combosOrderByRelationAggregateInput;

    @Field(() => super_contest_combosOrderByRelationAggregateInput, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_first_move_id?: super_contest_combosOrderByRelationAggregateInput;
}
