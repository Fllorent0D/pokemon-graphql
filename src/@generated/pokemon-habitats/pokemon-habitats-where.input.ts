import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Pokemon_habitat_namesListRelationFilter } from '../prisma/pokemon-habitat-names-list-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';

@InputType()
export class pokemon_habitatsWhereInput {

    @Field(() => [pokemon_habitatsWhereInput], {nullable:true})
    AND?: Array<pokemon_habitatsWhereInput>;

    @Field(() => [pokemon_habitatsWhereInput], {nullable:true})
    OR?: Array<pokemon_habitatsWhereInput>;

    @Field(() => [pokemon_habitatsWhereInput], {nullable:true})
    NOT?: Array<pokemon_habitatsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Pokemon_habitat_namesListRelationFilter, {nullable:true})
    pokemon_habitat_names?: Pokemon_habitat_namesListRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesListRelationFilter;
}
