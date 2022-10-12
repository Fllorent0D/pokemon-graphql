import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { version_groups } from '../version-groups/version-groups.model';
import { pokemon } from '../pokemon/pokemon.model';
import { pokemon_form_names } from '../pokemon-form-names/pokemon-form-names.model';
import { pokemon_form_pokeathlon_stats } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats.model';
import { Pokemon_formsCount } from '../prisma/pokemon-forms-count.output';

@ObjectType()
export class pokemon_forms {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    form_identifier!: string | null;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:true})
    introduced_in_version_group_id!: number | null;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => version_groups, {nullable:true})
    version_groups?: version_groups | null;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;

    @Field(() => [pokemon_form_names], {nullable:true})
    pokemon_form_names?: Array<pokemon_form_names>;

    @Field(() => [pokemon_form_pokeathlon_stats], {nullable:true})
    pokemon_form_pokeathlon_stats?: Array<pokemon_form_pokeathlon_stats>;

    @Field(() => Pokemon_formsCount, {nullable:false})
    _count?: Pokemon_formsCount;
}
