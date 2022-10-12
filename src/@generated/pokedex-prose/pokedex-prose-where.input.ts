import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { PokedexesRelationFilter } from '../prisma/pokedexes-relation-filter.input';

@InputType()
export class pokedex_proseWhereInput {

    @Field(() => [pokedex_proseWhereInput], {nullable:true})
    AND?: Array<pokedex_proseWhereInput>;

    @Field(() => [pokedex_proseWhereInput], {nullable:true})
    OR?: Array<pokedex_proseWhereInput>;

    @Field(() => [pokedex_proseWhereInput], {nullable:true})
    NOT?: Array<pokedex_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => PokedexesRelationFilter, {nullable:true})
    pokedexes?: PokedexesRelationFilter;
}
