import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Pokemon_color_namesListRelationFilter } from '../prisma/pokemon-color-names-list-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';

@InputType()
export class pokemon_colorsWhereInput {

    @Field(() => [pokemon_colorsWhereInput], {nullable:true})
    AND?: Array<pokemon_colorsWhereInput>;

    @Field(() => [pokemon_colorsWhereInput], {nullable:true})
    OR?: Array<pokemon_colorsWhereInput>;

    @Field(() => [pokemon_colorsWhereInput], {nullable:true})
    NOT?: Array<pokemon_colorsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Pokemon_color_namesListRelationFilter, {nullable:true})
    pokemon_color_names?: Pokemon_color_namesListRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesListRelationFilter;
}
