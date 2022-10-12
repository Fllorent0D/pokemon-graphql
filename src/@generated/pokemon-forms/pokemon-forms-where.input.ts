import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';
import { Pokemon_form_namesListRelationFilter } from '../prisma/pokemon-form-names-list-relation-filter.input';
import { Pokemon_form_pokeathlon_statsListRelationFilter } from '../prisma/pokemon-form-pokeathlon-stats-list-relation-filter.input';

@InputType()
export class pokemon_formsWhereInput {

    @Field(() => [pokemon_formsWhereInput], {nullable:true})
    AND?: Array<pokemon_formsWhereInput>;

    @Field(() => [pokemon_formsWhereInput], {nullable:true})
    OR?: Array<pokemon_formsWhereInput>;

    @Field(() => [pokemon_formsWhereInput], {nullable:true})
    NOT?: Array<pokemon_formsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_identifier?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    introduced_in_version_group_id?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_default?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_battle_only?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;

    @Field(() => Pokemon_form_namesListRelationFilter, {nullable:true})
    pokemon_form_names?: Pokemon_form_namesListRelationFilter;

    @Field(() => Pokemon_form_pokeathlon_statsListRelationFilter, {nullable:true})
    pokemon_form_pokeathlon_stats?: Pokemon_form_pokeathlon_statsListRelationFilter;
}
