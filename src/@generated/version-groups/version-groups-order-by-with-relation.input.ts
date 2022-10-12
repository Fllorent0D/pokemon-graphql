import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokedexesOrderByWithRelationInput } from '../pokedexes/pokedexes-order-by-with-relation.input';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { ability_changelogOrderByRelationAggregateInput } from '../ability-changelog/ability-changelog-order-by-relation-aggregate.input';
import { ability_flavor_textOrderByRelationAggregateInput } from '../ability-flavor-text/ability-flavor-text-order-by-relation-aggregate.input';
import { encounter_slotsOrderByRelationAggregateInput } from '../encounter-slots/encounter-slots-order-by-relation-aggregate.input';
import { item_flavor_textOrderByRelationAggregateInput } from '../item-flavor-text/item-flavor-text-order-by-relation-aggregate.input';
import { machinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { move_changelogOrderByRelationAggregateInput } from '../move-changelog/move-changelog-order-by-relation-aggregate.input';
import { move_effect_changelogOrderByRelationAggregateInput } from '../move-effect-changelog/move-effect-changelog-order-by-relation-aggregate.input';
import { move_flavor_textOrderByRelationAggregateInput } from '../move-flavor-text/move-flavor-text-order-by-relation-aggregate.input';
import { pokemon_formsOrderByRelationAggregateInput } from '../pokemon-forms/pokemon-forms-order-by-relation-aggregate.input';
import { version_group_regionsOrderByRelationAggregateInput } from '../version-group-regions/version-group-regions-order-by-relation-aggregate.input';
import { versionsOrderByRelationAggregateInput } from '../versions/versions-order-by-relation-aggregate.input';

@InputType()
export class version_groupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: keyof typeof SortOrder;

    @Field(() => pokedexesOrderByWithRelationInput, {nullable:true})
    pokedexes?: pokedexesOrderByWithRelationInput;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => ability_changelogOrderByRelationAggregateInput, {nullable:true})
    ability_changelog?: ability_changelogOrderByRelationAggregateInput;

    @Field(() => ability_flavor_textOrderByRelationAggregateInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textOrderByRelationAggregateInput;

    @Field(() => encounter_slotsOrderByRelationAggregateInput, {nullable:true})
    encounter_slots?: encounter_slotsOrderByRelationAggregateInput;

    @Field(() => item_flavor_textOrderByRelationAggregateInput, {nullable:true})
    item_flavor_text?: item_flavor_textOrderByRelationAggregateInput;

    @Field(() => machinesOrderByRelationAggregateInput, {nullable:true})
    machines?: machinesOrderByRelationAggregateInput;

    @Field(() => move_changelogOrderByRelationAggregateInput, {nullable:true})
    move_changelog?: move_changelogOrderByRelationAggregateInput;

    @Field(() => move_effect_changelogOrderByRelationAggregateInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogOrderByRelationAggregateInput;

    @Field(() => move_flavor_textOrderByRelationAggregateInput, {nullable:true})
    move_flavor_text?: move_flavor_textOrderByRelationAggregateInput;

    @Field(() => pokemon_formsOrderByRelationAggregateInput, {nullable:true})
    pokemon_forms?: pokemon_formsOrderByRelationAggregateInput;

    @Field(() => version_group_regionsOrderByRelationAggregateInput, {nullable:true})
    version_group_regions?: version_group_regionsOrderByRelationAggregateInput;

    @Field(() => versionsOrderByRelationAggregateInput, {nullable:true})
    versions?: versionsOrderByRelationAggregateInput;
}
