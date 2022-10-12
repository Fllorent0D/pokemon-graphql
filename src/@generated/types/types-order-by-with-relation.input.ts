import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_damage_classesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { berriesOrderByRelationAggregateInput } from '../berries/berries-order-by-relation-aggregate.input';
import { move_changelogOrderByRelationAggregateInput } from '../move-changelog/move-changelog-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { pokemon_typesOrderByRelationAggregateInput } from '../pokemon-types/pokemon-types-order-by-relation-aggregate.input';
import { type_efficacyOrderByRelationAggregateInput } from '../type-efficacy/type-efficacy-order-by-relation-aggregate.input';
import { type_namesOrderByRelationAggregateInput } from '../type-names/type-names-order-by-relation-aggregate.input';

@InputType()
export class typesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => move_damage_classesOrderByWithRelationInput, {nullable:true})
    move_damage_classes?: move_damage_classesOrderByWithRelationInput;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => berriesOrderByRelationAggregateInput, {nullable:true})
    berries?: berriesOrderByRelationAggregateInput;

    @Field(() => move_changelogOrderByRelationAggregateInput, {nullable:true})
    move_changelog?: move_changelogOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;

    @Field(() => pokemon_typesOrderByRelationAggregateInput, {nullable:true})
    pokemon_types?: pokemon_typesOrderByRelationAggregateInput;

    @Field(() => type_efficacyOrderByRelationAggregateInput, {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: type_efficacyOrderByRelationAggregateInput;

    @Field(() => type_efficacyOrderByRelationAggregateInput, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: type_efficacyOrderByRelationAggregateInput;

    @Field(() => type_namesOrderByRelationAggregateInput, {nullable:true})
    type_names?: type_namesOrderByRelationAggregateInput;
}
