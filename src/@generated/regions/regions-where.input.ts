import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { GenerationsListRelationFilter } from '../prisma/generations-list-relation-filter.input';
import { LocationsListRelationFilter } from '../prisma/locations-list-relation-filter.input';
import { PokedexesListRelationFilter } from '../prisma/pokedexes-list-relation-filter.input';
import { Region_namesListRelationFilter } from '../prisma/region-names-list-relation-filter.input';
import { Version_group_regionsListRelationFilter } from '../prisma/version-group-regions-list-relation-filter.input';

@InputType()
export class regionsWhereInput {

    @Field(() => [regionsWhereInput], {nullable:true})
    AND?: Array<regionsWhereInput>;

    @Field(() => [regionsWhereInput], {nullable:true})
    OR?: Array<regionsWhereInput>;

    @Field(() => [regionsWhereInput], {nullable:true})
    NOT?: Array<regionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => GenerationsListRelationFilter, {nullable:true})
    generations?: GenerationsListRelationFilter;

    @Field(() => LocationsListRelationFilter, {nullable:true})
    locations?: LocationsListRelationFilter;

    @Field(() => PokedexesListRelationFilter, {nullable:true})
    pokedexes?: PokedexesListRelationFilter;

    @Field(() => Region_namesListRelationFilter, {nullable:true})
    region_names?: Region_namesListRelationFilter;

    @Field(() => Version_group_regionsListRelationFilter, {nullable:true})
    version_group_regions?: Version_group_regionsListRelationFilter;
}
