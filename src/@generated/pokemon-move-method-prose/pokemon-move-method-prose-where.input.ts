import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokemon_move_methodsRelationFilter } from '../prisma/pokemon-move-methods-relation-filter.input';

@InputType()
export class pokemon_move_method_proseWhereInput {

    @Field(() => [pokemon_move_method_proseWhereInput], {nullable:true})
    AND?: Array<pokemon_move_method_proseWhereInput>;

    @Field(() => [pokemon_move_method_proseWhereInput], {nullable:true})
    OR?: Array<pokemon_move_method_proseWhereInput>;

    @Field(() => [pokemon_move_method_proseWhereInput], {nullable:true})
    NOT?: Array<pokemon_move_method_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokemon_move_methodsRelationFilter, {nullable:true})
    pokemon_move_methods?: Pokemon_move_methodsRelationFilter;
}
