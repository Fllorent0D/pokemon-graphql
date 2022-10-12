import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { AbilitiesRelationFilter } from '../prisma/abilities-relation-filter.input';

@InputType()
export class ability_proseWhereInput {

    @Field(() => [ability_proseWhereInput], {nullable:true})
    AND?: Array<ability_proseWhereInput>;

    @Field(() => [ability_proseWhereInput], {nullable:true})
    OR?: Array<ability_proseWhereInput>;

    @Field(() => [ability_proseWhereInput], {nullable:true})
    NOT?: Array<ability_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    short_effect?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => AbilitiesRelationFilter, {nullable:true})
    abilities?: AbilitiesRelationFilter;
}
