import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokemon_formsRelationFilter } from '../prisma/pokemon-forms-relation-filter.input';

@InputType()
export class pokemon_form_namesWhereInput {

    @Field(() => [pokemon_form_namesWhereInput], {nullable:true})
    AND?: Array<pokemon_form_namesWhereInput>;

    @Field(() => [pokemon_form_namesWhereInput], {nullable:true})
    OR?: Array<pokemon_form_namesWhereInput>;

    @Field(() => [pokemon_form_namesWhereInput], {nullable:true})
    NOT?: Array<pokemon_form_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pokemon_name?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokemon_formsRelationFilter, {nullable:true})
    pokemon_forms?: Pokemon_formsRelationFilter;
}
