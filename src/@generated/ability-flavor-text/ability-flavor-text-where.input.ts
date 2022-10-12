import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { AbilitiesRelationFilter } from '../prisma/abilities-relation-filter.input';

@InputType()
export class ability_flavor_textWhereInput {

    @Field(() => [ability_flavor_textWhereInput], {nullable:true})
    AND?: Array<ability_flavor_textWhereInput>;

    @Field(() => [ability_flavor_textWhereInput], {nullable:true})
    OR?: Array<ability_flavor_textWhereInput>;

    @Field(() => [ability_flavor_textWhereInput], {nullable:true})
    NOT?: Array<ability_flavor_textWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    flavor_text?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => AbilitiesRelationFilter, {nullable:true})
    abilities?: AbilitiesRelationFilter;
}
