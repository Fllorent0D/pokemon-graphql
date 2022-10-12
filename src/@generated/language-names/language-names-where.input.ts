import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';

@InputType()
export class language_namesWhereInput {

    @Field(() => [language_namesWhereInput], {nullable:true})
    AND?: Array<language_namesWhereInput>;

    @Field(() => [language_namesWhereInput], {nullable:true})
    OR?: Array<language_namesWhereInput>;

    @Field(() => [language_namesWhereInput], {nullable:true})
    NOT?: Array<language_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages_language_names_local_language_idTolanguages?: LanguagesRelationFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages_language_names_language_idTolanguages?: LanguagesRelationFilter;
}
