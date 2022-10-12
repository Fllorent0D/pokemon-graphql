import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class move_changelogScalarWhereInput {

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    AND?: Array<move_changelogScalarWhereInput>;

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    OR?: Array<move_changelogScalarWhereInput>;

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    NOT?: Array<move_changelogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    changed_in_version_group_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_chance?: IntNullableFilter;
}
