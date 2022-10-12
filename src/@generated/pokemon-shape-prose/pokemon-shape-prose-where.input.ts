import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokemon_shapesRelationFilter } from '../prisma/pokemon-shapes-relation-filter.input';

@InputType()
export class pokemon_shape_proseWhereInput {

    @Field(() => [pokemon_shape_proseWhereInput], {nullable:true})
    AND?: Array<pokemon_shape_proseWhereInput>;

    @Field(() => [pokemon_shape_proseWhereInput], {nullable:true})
    OR?: Array<pokemon_shape_proseWhereInput>;

    @Field(() => [pokemon_shape_proseWhereInput], {nullable:true})
    NOT?: Array<pokemon_shape_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_shape_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    awesome_name?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokemon_shapesRelationFilter, {nullable:true})
    pokemon_shapes?: Pokemon_shapesRelationFilter;
}
