import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { TypesRelationFilter } from '../prisma/types-relation-filter.input';

@InputType()
export class type_namesWhereInput {

    @Field(() => [type_namesWhereInput], {nullable:true})
    AND?: Array<type_namesWhereInput>;

    @Field(() => [type_namesWhereInput], {nullable:true})
    OR?: Array<type_namesWhereInput>;

    @Field(() => [type_namesWhereInput], {nullable:true})
    NOT?: Array<type_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types?: TypesRelationFilter;
}
