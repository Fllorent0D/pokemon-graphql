import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_damage_classes } from '../move-damage-classes/move-damage-classes.model';
import { generations } from '../generations/generations.model';
import { berries } from '../berries/berries.model';
import { move_changelog } from '../move-changelog/move-changelog.model';
import { moves } from '../moves/moves.model';
import { pokemon_types } from '../pokemon-types/pokemon-types.model';
import { type_efficacy } from '../type-efficacy/type-efficacy.model';
import { type_names } from '../type-names/type-names.model';
import { TypesCount } from '../prisma/types-count.output';

@ObjectType()
export class types {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id!: number | null;

    @Field(() => move_damage_classes, {nullable:true})
    move_damage_classes?: move_damage_classes | null;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => [berries], {nullable:true})
    berries?: Array<berries>;

    @Field(() => [move_changelog], {nullable:true})
    move_changelog?: Array<move_changelog>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => [pokemon_types], {nullable:true})
    pokemon_types?: Array<pokemon_types>;

    @Field(() => [type_efficacy], {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: Array<type_efficacy>;

    @Field(() => [type_efficacy], {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: Array<type_efficacy>;

    @Field(() => [type_names], {nullable:true})
    type_names?: Array<type_names>;

    @Field(() => TypesCount, {nullable:false})
    _count?: TypesCount;
}
