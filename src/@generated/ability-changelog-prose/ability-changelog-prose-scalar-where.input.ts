import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ability_changelog_proseScalarWhereInput {

    @Field(() => [ability_changelog_proseScalarWhereInput], {nullable:true})
    AND?: Array<ability_changelog_proseScalarWhereInput>;

    @Field(() => [ability_changelog_proseScalarWhereInput], {nullable:true})
    OR?: Array<ability_changelog_proseScalarWhereInput>;

    @Field(() => [ability_changelog_proseScalarWhereInput], {nullable:true})
    NOT?: Array<ability_changelog_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_changelog_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    effect?: StringFilter;
}
