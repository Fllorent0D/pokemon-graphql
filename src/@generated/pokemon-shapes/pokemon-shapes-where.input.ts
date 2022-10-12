import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Pokemon_shape_proseListRelationFilter } from '../prisma/pokemon-shape-prose-list-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';

@InputType()
export class pokemon_shapesWhereInput {

    @Field(() => [pokemon_shapesWhereInput], {nullable:true})
    AND?: Array<pokemon_shapesWhereInput>;

    @Field(() => [pokemon_shapesWhereInput], {nullable:true})
    OR?: Array<pokemon_shapesWhereInput>;

    @Field(() => [pokemon_shapesWhereInput], {nullable:true})
    NOT?: Array<pokemon_shapesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Pokemon_shape_proseListRelationFilter, {nullable:true})
    pokemon_shape_prose?: Pokemon_shape_proseListRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesListRelationFilter;
}
