import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class move_effect_changelogScalarWhereInput {

    @Field(() => [move_effect_changelogScalarWhereInput], {nullable:true})
    AND?: Array<move_effect_changelogScalarWhereInput>;

    @Field(() => [move_effect_changelogScalarWhereInput], {nullable:true})
    OR?: Array<move_effect_changelogScalarWhereInput>;

    @Field(() => [move_effect_changelogScalarWhereInput], {nullable:true})
    NOT?: Array<move_effect_changelogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    changed_in_version_group_id?: IntFilter;
}
