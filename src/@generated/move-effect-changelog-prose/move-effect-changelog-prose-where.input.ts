import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_effect_changelogRelationFilter } from '../prisma/move-effect-changelog-relation-filter.input';

@InputType()
export class move_effect_changelog_proseWhereInput {

    @Field(() => [move_effect_changelog_proseWhereInput], {nullable:true})
    AND?: Array<move_effect_changelog_proseWhereInput>;

    @Field(() => [move_effect_changelog_proseWhereInput], {nullable:true})
    OR?: Array<move_effect_changelog_proseWhereInput>;

    @Field(() => [move_effect_changelog_proseWhereInput], {nullable:true})
    NOT?: Array<move_effect_changelog_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_effect_changelog_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    effect?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_effect_changelogRelationFilter, {nullable:true})
    move_effect_changelog?: Move_effect_changelogRelationFilter;
}
