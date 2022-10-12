import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { AbilitiesRelationFilter } from '../prisma/abilities-relation-filter.input';

@InputType()
export class ability_namesWhereInput {

    @Field(() => [ability_namesWhereInput], {nullable:true})
    AND?: Array<ability_namesWhereInput>;

    @Field(() => [ability_namesWhereInput], {nullable:true})
    OR?: Array<ability_namesWhereInput>;

    @Field(() => [ability_namesWhereInput], {nullable:true})
    NOT?: Array<ability_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => AbilitiesRelationFilter, {nullable:true})
    abilities?: AbilitiesRelationFilter;
}
