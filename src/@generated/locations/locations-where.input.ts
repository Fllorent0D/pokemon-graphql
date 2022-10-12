import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsRelationFilter } from '../prisma/regions-relation-filter.input';
import { Location_areasListRelationFilter } from '../prisma/location-areas-list-relation-filter.input';
import { Location_game_indicesListRelationFilter } from '../prisma/location-game-indices-list-relation-filter.input';
import { Location_namesListRelationFilter } from '../prisma/location-names-list-relation-filter.input';
import { Pokemon_evolutionListRelationFilter } from '../prisma/pokemon-evolution-list-relation-filter.input';

@InputType()
export class locationsWhereInput {

    @Field(() => [locationsWhereInput], {nullable:true})
    AND?: Array<locationsWhereInput>;

    @Field(() => [locationsWhereInput], {nullable:true})
    OR?: Array<locationsWhereInput>;

    @Field(() => [locationsWhereInput], {nullable:true})
    NOT?: Array<locationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => RegionsRelationFilter, {nullable:true})
    regions?: RegionsRelationFilter;

    @Field(() => Location_areasListRelationFilter, {nullable:true})
    location_areas?: Location_areasListRelationFilter;

    @Field(() => Location_game_indicesListRelationFilter, {nullable:true})
    location_game_indices?: Location_game_indicesListRelationFilter;

    @Field(() => Location_namesListRelationFilter, {nullable:true})
    location_names?: Location_namesListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution?: Pokemon_evolutionListRelationFilter;
}
