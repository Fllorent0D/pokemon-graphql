import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Ability_changelogRelationFilter } from '../prisma/ability-changelog-relation-filter.input';

@InputType()
export class ability_changelog_proseWhereInput {

    @Field(() => [ability_changelog_proseWhereInput], {nullable:true})
    AND?: Array<ability_changelog_proseWhereInput>;

    @Field(() => [ability_changelog_proseWhereInput], {nullable:true})
    OR?: Array<ability_changelog_proseWhereInput>;

    @Field(() => [ability_changelog_proseWhereInput], {nullable:true})
    NOT?: Array<ability_changelog_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_changelog_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    effect?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Ability_changelogRelationFilter, {nullable:true})
    ability_changelog?: Ability_changelogRelationFilter;
}
