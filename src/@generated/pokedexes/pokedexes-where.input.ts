import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsRelationFilter } from '../prisma/regions-relation-filter.input';
import { GenerationsListRelationFilter } from '../prisma/generations-list-relation-filter.input';
import { Pokedex_proseListRelationFilter } from '../prisma/pokedex-prose-list-relation-filter.input';
import { Pokemon_dex_numbersListRelationFilter } from '../prisma/pokemon-dex-numbers-list-relation-filter.input';
import { Version_groupsListRelationFilter } from '../prisma/version-groups-list-relation-filter.input';

@InputType()
export class pokedexesWhereInput {

    @Field(() => [pokedexesWhereInput], {nullable:true})
    AND?: Array<pokedexesWhereInput>;

    @Field(() => [pokedexesWhereInput], {nullable:true})
    OR?: Array<pokedexesWhereInput>;

    @Field(() => [pokedexesWhereInput], {nullable:true})
    NOT?: Array<pokedexesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => RegionsRelationFilter, {nullable:true})
    regions?: RegionsRelationFilter;

    @Field(() => GenerationsListRelationFilter, {nullable:true})
    generations?: GenerationsListRelationFilter;

    @Field(() => Pokedex_proseListRelationFilter, {nullable:true})
    pokedex_prose?: Pokedex_proseListRelationFilter;

    @Field(() => Pokemon_dex_numbersListRelationFilter, {nullable:true})
    pokemon_dex_numbers?: Pokemon_dex_numbersListRelationFilter;

    @Field(() => Version_groupsListRelationFilter, {nullable:true})
    version_groups?: Version_groupsListRelationFilter;
}
