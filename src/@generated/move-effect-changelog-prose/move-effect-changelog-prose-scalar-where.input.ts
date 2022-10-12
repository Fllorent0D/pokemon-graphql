import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class move_effect_changelog_proseScalarWhereInput {

    @Field(() => [move_effect_changelog_proseScalarWhereInput], {nullable:true})
    AND?: Array<move_effect_changelog_proseScalarWhereInput>;

    @Field(() => [move_effect_changelog_proseScalarWhereInput], {nullable:true})
    OR?: Array<move_effect_changelog_proseScalarWhereInput>;

    @Field(() => [move_effect_changelog_proseScalarWhereInput], {nullable:true})
    NOT?: Array<move_effect_changelog_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_effect_changelog_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    effect?: StringFilter;
}
