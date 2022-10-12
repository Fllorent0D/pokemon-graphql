import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Contest_typesRelationFilter } from '../prisma/contest-types-relation-filter.input';

@InputType()
export class contest_type_namesWhereInput {

    @Field(() => [contest_type_namesWhereInput], {nullable:true})
    AND?: Array<contest_type_namesWhereInput>;

    @Field(() => [contest_type_namesWhereInput], {nullable:true})
    OR?: Array<contest_type_namesWhereInput>;

    @Field(() => [contest_type_namesWhereInput], {nullable:true})
    NOT?: Array<contest_type_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Contest_typesRelationFilter, {nullable:true})
    contest_types?: Contest_typesRelationFilter;
}
